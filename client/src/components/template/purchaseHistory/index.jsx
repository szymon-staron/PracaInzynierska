import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import './style.scss';

function createData(id, date, price, amount) {
    return { id, date, price, amount };
}

export const PurchaseHistory = () => {
    const { user } = useSelector((state) => state);
    console.log(user.details.name);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <tr className="headerRow">
                        <th>Numer zamówienia</th>
                        <th>Data zamówienia</th>
                        <th>Cena</th>
                        <th>Ilość</th>
                    </tr>
                </TableHead>
                <TableBody>
                    {user.history.map((row) => (
                        <tr key={row.id} className="row">
                            <th>{row.id}</th>
                            <th>{row.date}</th>
                            <th>{row.price} pln.</th>
                            <th>{row.amount}</th>
                        </tr>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
