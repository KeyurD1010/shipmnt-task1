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

const data = [
  {
    "Book Name": "Book 1",
    "ISBN Code": "ISBN0001",
    "Author Name": "Author A",
    "Author Email": "billyclark@cherry-williams.com",
    "Date of Birth": "1953-09-24",
  },
  {
    "Book Name": "Book 2",
    "ISBN Code": "ISBN0002",
    "Author Name": "Author A",
    "Author Email": "billyclark@cherry-williams.com",
    "Date of Birth": "1953-09-24",
  },
  {
    "Book Name": "Book 3",
    "ISBN Code": "ISBN0003",
    "Author Name": "Author A",
    "Author Email": "billyclark@cherry-williams.com",
    "Date of Birth": "1953-09-24",
  },
  {
    "Book Name": "Book 4",
    "ISBN Code": "ISBN0004",
    "Author Name": "Author A",
    "Author Email": "billyclark@cherry-williams.com",
    "Date of Birth": "1953-09-24",
  },
  {
    "Book Name": "Book 5",
    "ISBN Code": "ISBN0005",
    "Author Name": "Author A",
    "Author Email": "billyclark@cherry-williams.com",
    "Date of Birth": "1953-09-24",
  },
  {
    "Book Name": "Book 6",
    "ISBN Code": "ISBN0006",
    "Author Name": "Author A",
    "Author Email": "billyclark@cherry-williams.com",
    "Date of Birth": "1953-09-24",
  },
  {
    "Book Name": "Book 7",
    "ISBN Code": "ISBN0007",
    "Author Name": "Author A",
    "Author Email": "billyclark@cherry-williams.com",
    "Date of Birth": "1953-09-24",
  },
  {
    "Book Name": "Book 8",
    "ISBN Code": "ISBN0008",
    "Author Name": "Author A",
    "Author Email": "billyclark@cherry-williams.com",
    "Date of Birth": "1953-09-24",
  },
  {
    "Book Name": "Book 9",
    "ISBN Code": "ISBN0009",
    "Author Name": "Author A",
    "Author Email": "billyclark@cherry-williams.com",
    "Date of Birth": "1953-09-24",
  },
  {
    "Book Name": "Book 10",
    "ISBN Code": "ISBN0010",
    "Author Name": "Author A",
    "Author Email": "billyclark@cherry-williams.com",
    "Date of Birth": "1953-09-24",
  },
  {
    "Book Name": "Book 11",
    "ISBN Code": "ISBN0011",
    "Author Name": "Author B",
    "Author Email": "nicolewilson@moore-collins.com",
    "Date of Birth": "1964-06-04",
  },
  {
    "Book Name": "Book 12",
    "ISBN Code": "ISBN0012",
    "Author Name": "Author B",
    "Author Email": "nicolewilson@moore-collins.com",
    "Date of Birth": "1964-06-04",
  },
  {
    "Book Name": "Book 13",
    "ISBN Code": "ISBN0013",
    "Author Name": "Author B",
    "Author Email": "nicolewilson@moore-collins.com",
    "Date of Birth": "1964-06-04",
  },
  {
    "Book Name": "Book 14",
    "ISBN Code": "ISBN0014",
    "Author Name": "Author B",
    "Author Email": "nicolewilson@moore-collins.com",
    "Date of Birth": "1964-06-04",
  },
  {
    "Book Name": "Book 15",
    "ISBN Code": "ISBN0015",
    "Author Name": "Author B",
    "Author Email": "nicolewilson@moore-collins.com",
    "Date of Birth": "1964-06-04",
  },
  {
    "Book Name": "Book 16",
    "ISBN Code": "ISBN0016",
    "Author Name": "Author B",
    "Author Email": "nicolewilson@moore-collins.com",
    "Date of Birth": "1964-06-04",
  },
];

function ShowExcel() {
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
      <TableContainer component={Paper} className="shadow-lg mb-4">
        <Table>
          <TableHead className="bg-blue-500">
            <TableRow>
              <TableCell className="text-white font-bold">Book Name</TableCell>
              <TableCell className="text-white font-bold">ISBN Code</TableCell>
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
    </div>
  );
}

export default ShowExcel;
