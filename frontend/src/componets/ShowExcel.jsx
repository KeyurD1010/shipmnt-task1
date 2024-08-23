import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

function ShowExcel({ data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {data === null || data.length === 0 ? (
        <div className="text-xl text-gray-500">Please upload the xls file.</div>
      ) : (
        <>
          <TableContainer component={Paper} className="shadow-lg mb-4">
            <Table>
              <TableHead className="bg-blue-500">
                <TableRow>
                  <TableCell className="text-white font-bold">
                    Book Name
                  </TableCell>
                  <TableCell className="text-white font-bold">
                    ISBN Code
                  </TableCell>
                  <TableCell className="text-white font-bold">
                    Author Name
                  </TableCell>
                  <TableCell className="text-white font-bold">
                    Author Email
                  </TableCell>
                  <TableCell className="text-white font-bold">
                    Date of Birth
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index} className="hover:bg-gray-200">
                      <TableCell>{row["Book Name"]}</TableCell>
                      <TableCell>{row["ISBN Code"]}</TableCell>
                      <TableCell>{row["Author Name"]}</TableCell>
                      <TableCell>{row["Author Email"]}</TableCell>
                      <TableCell>{row["Date of Birth"]}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={data.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50]}
            className="bg-white shadow-lg"
          />
        </>
      )}
    </div>
  );
}

export default ShowExcel;
