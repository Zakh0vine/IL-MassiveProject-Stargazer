import "./DashTab.css";
import { dummydata } from "../data";
import * as React from "react";
import { useTable } from "react-table";

function Dashtab() {
  const data = React.useMemo(() => dummydata, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Nama Obat",
        accessor: "nama_obat",
      },
      {
        Header: "Merek",
        accessor: "brand",
      },
      {
        Header: "Stok Obat",
        accessor: "stock",
      },
      {
        Header: "Catatan",
        accessor: "catatan",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashtab;
