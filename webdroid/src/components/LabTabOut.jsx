import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import DebouncedInput from "./DebouncedInput";
import axios from "axios";

const LapTabOut = () => {
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
    columnHelper.accessor("tgl_keluar", {
      cell: (info) => <span>{new Date(info.getValue()).toLocaleDateString()}</span>,
      header: "Tanggal Keluar",
    }),
    columnHelper.accessor("tgl_exp", {
      cell: (info) => <span>{new Date(info.getValue()).toLocaleDateString()}</span>,
      header: "Tanggal Kadaluarsa",
    }),
    columnHelper.accessor("stock", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Stok",
    }),
    columnHelper.accessor("catatan", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Catatan",
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
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Terjadi kesalahan saat mengambil data dari server.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-2 max-w-5xl mx-auto text-black border shadow-lg rounded-lg mb-16 overflow-auto">
      <div className=" flex items-center mb-2 ">
        <span className="font-semibold w-[120px] ">Obat Keluar</span>
        <div className="flex items-center gap-1 w-full justify-end">
          <DebouncedInput value={globalFilter ?? ""} onChange={(value) => setGlobalFilter(String(value))} className="p-2 bg-birugrad/60 outline-none w-1/5 focus:w-1/3 duration-300 rounded-lg shadow-lg" placeholder="Cari semua kolom" />
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
          {table.getRowModel().rows.map((row, i) => (
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
  );
};

export default LapTabOut;
