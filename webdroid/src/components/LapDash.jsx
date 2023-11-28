import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import dummydash from "../data/dummydash.json";
import { useState } from "react";
import CetakBtn from "./CetakBtn";
import DebouncedInput from "./DebouncedInput";

const LapDash = () => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "ID",
    }),
    columnHelper.accessor("nama_obat", {
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

        return <span>{status}</span>;
      },
      header: "Status",
    }),
  ];
  const [data] = useState(() => [...dummydash]);
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

  return (
    <div className="w-full">
      <p className=" font-poppins font-bold text-[30px] text-center my-20">Daftar Obat</p>
      <div className="p-2 max-w-5xl mx-auto text-black border shadow-lg rounded-lg mb-16">
        <div className="flex justify-between mb-2">
          <div className="w-full gap-1">
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
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
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
              ))
            ) : (
              <tr className="text-center h-32">
                <td colSpan={12}>Emang ada ya?</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* pagination */}
        <div className="flex items-center justify-end mt-2 gap-2">
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {">"}
          </button>

          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16 bg-transparent"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="p-2 bg-transparent"
          >
            {[10, 20, 30, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LapDash;
