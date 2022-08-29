import {Paper, Table, TableBody, TableCell,  TableContainer, TableRow } from "@mui/material"

export const Orders = () => {
    return (
    <TableContainer component={Paper}/>;
        <Table>
            <TableHead>
            <TableRow>
<TableCell>ID client </TableCell>
<TableCell>Amount</TableCell>
<TableCell>Adress</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>

            </TableBody>
        </Table>
          )

    }