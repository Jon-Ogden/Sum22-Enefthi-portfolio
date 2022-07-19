import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Css/topcollection.css";

function createData(name, artist, percent, price, owners, items) {
  return { name, artist, percent, price, owners, items };
}

const rows = [
  createData("Nft Title", "Arist name", 159, 6.0, 24, 4.0, 15),
  createData("Nft Title", "Arist name", 237, 9.0, 37, 4.3),
];
const TopCollection = () => {
  return (
    <div className="topcollection">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Collection </TableCell>
              <TableCell align="right">Volume</TableCell>
              <TableCell align="right">% change</TableCell>
              <TableCell align="right">Floor Price</TableCell>
              <TableCell align="right">Owners</TableCell>
              <TableCell align="right">Items</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.percent}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.owners}</TableCell>
                <TableCell align="right">{row.items}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TopCollection;
