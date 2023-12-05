import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  Vagas,
  placa,
  tempo,
  status,
  tempoExcedido,
  ValorAdicional
) {
  return { Vagas, placa, tempo, status, tempoExcedido, ValorAdicional };
}

const rows = [
  createData(
    "VAGAS",
    "PLACA",
    "TEMPO",
    "STATUS",
    "TEMPO EXEDIDO",
    "VALOR ADICIONAL"
  ),
  createData("vaga 1", "IJZ-797", 10, "OCUPADO", "N", "N"),
  createData("vaga 2", "--", "--", "LIVRE", "--", "--"),
  createData("vaga 3", "dfg-324", 15, "OCUPADO", "N", "N"),
  createData("vaga 4", "vbn-724", 18, "OCUPADO", 3, "3,00"),
  createData("vaga 5", "--", "--", "LIVRE", "--", "--"),
  createData("vaga 6", "ghj-745", 30, "OCUPADO", 15, "S"),
  createData("vaga 7", "--", "--", "LIVRE", "--", "--"),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Vagas.toUpperCase()}</TableCell>
              <TableCell align="right">{row.placa}</TableCell>
              <TableCell align="right">{row.tempo}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.tempoExcedido}</TableCell>
              <TableCell align="right">{row.ValorAdicional}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
