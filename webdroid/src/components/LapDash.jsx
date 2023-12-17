import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { searchicon } from "../assets";
import DebouncedInput from "./DebouncedInput";
import axios from "axios";

const LapDash = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "ID",
    }),
    columnHelper.accessor("name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Nama Obat",
    }),
    columnHelper.accessor("brand", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Brand/Merek",
    }),
    columnHelper.accessor("stock", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Stok",
    }),
    columnHelper.accessor("catatan", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Catatan",
    }),
    columnHelper.accessor("status", {
      cell: (info) => {
        const stockValue = info.row.original.stock;

        let status;
        if (stockValue < 10) {
          status = "Low";
        } else if (stockValue > 50) {
          status = "Full";
        } else {
          status = "Mid";
        }

        let statusClassName = "py-1 px-2 rounded";

        if (status === "Low") {
          statusClassName += " bg-red-400 text-white rounded-lg";
        } else if (status === "Mid") {
          statusClassName += " bg-blue-400 text-white rounded-lg";
        } else if (status === "Full") {
          statusClassName += " bg-green-400 text-white rounded-lg";
        }
        return <span className={statusClassName}>{status}</span>;
      },
      header: "Status",
    }),
  ];
  const [data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4923/api/v1/obat");
        const newData = response.data.map((item) => {
          const stockValue = Number(item.stock);
          let status;
          if (stockValue < 10) {
            status = "Low";
          } else if (stockValue > 50) {
            status = "Full";
          } else {
            status = "Mid";
          }
          return { ...item, status };
        });
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Terjadi kesalahan saat mengambil data dari server.");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <p className=" font-poppins font-bold text-[30px] text-center my-20">Daftar Obat</p>
      <div className="p-2 max-w-5xl mx-auto text-black border shadow-lg rounded-lg mb-16 overflow-auto">
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-1 w-full">
            <DebouncedInput value={globalFilter ?? ""} onChange={(value) => setGlobalFilter(String(value))} className="p-2 bg-birugrad/60 outline-none w-1/3 focus:w-1/2 duration-300 rounded-lg shadow-lg" placeholder="Cari semua kolom" />
          </div>
          {/* Filter Status */}
          <div className="flex gap-2 items-center">
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
              }}
              className="p-2 bg-transparent text-[#6499E9] font-poppins bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-[#6499E9] rounded-lg font-semibold outline outline-[#6499E9] outline-3"
            >
              <option value="All">All</option>
              <option value="Low">Low</option>
              <option value="Mid">Mid</option>
              <option value="Full">Full</option>
            </select>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
              className="p-2 bg-transparent text-[#6499E9] font-poppins bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-[#6499E9] rounded-lg font-semibold outline outline-[#6499E9] outline-3"
            >
              {[10, 20, 30, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
        <table className="border w-full text-left">
          <thead className="bg-birugrad2/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="capitalize px-3.5 py-2">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.filter((row) => {
                const stockValue = Number(row.original.stock);
                const status = row.original.status;
                return statusFilter === "All" || status === statusFilter;
              })
              .map((row, i) => (
                <tr
                  key={row.id}
                  className={`
            ${i % 2 === 0 ? "bg-birugrad/60" : " bg-birugrad2/50"}
          `}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3.5 py-2">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            {table.getRowModel().rows.length === 0 && (
              <tr className="text-center h-32">
                <td colSpan={12}>Emang ada ya?</td>
              </tr>
            )}
          </tbody>
        </table>
        {error && <div className="text-red-500">{error}</div>}
        {/* pagination */}
        <div className="flex items-center justify-end mt-2 gap-2">
          <div className=" flex text-white bg-[#6499E9] rounded-lg space-x-1">
            <button
              onClick={() => {
                table.previousPage();
              }}
              disabled={!table.getCanPreviousPage()}
              className="p-1 px-2 disabled:opacity-30 text-[#6499E9] bg-[#3E3B64] rounded-tl-lg rounded-bl-lg"
            >
              {"<"}
            </button>
            <span className="flex items-center gap-1">
              <div>Halaman</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} dari {table.getPageCount()}
              </strong>
            </span>
            <button
              onClick={() => {
                table.nextPage();
              }}
              disabled={!table.getCanNextPage()}
              className="p-1 px-2 disabled:opacity-30  text-[#6499E9] bg-[#3E3B64] rounded-tr-lg rounded-br-lg"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LapDash;
