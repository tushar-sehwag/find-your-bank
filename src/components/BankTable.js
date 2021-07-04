import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const BankTable = props => {
    return (
        <TableContainer className="table-container" component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Bank</TableCell>
                        <TableCell>IFSC</TableCell>
                        <TableCell>Branch</TableCell>
                        <TableCell>Bank ID</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props?.data?.map(row => (
                            <TableRow key={row.ifsc}>
                                <TableCell>
                                    <Link 
                                        to={{
                                            pathname: `/bank-details/${row.bank_id}`,
                                            state: row
                                        }}
                                    >
                                    {row.bank_name}
                                    </Link>
                                </TableCell>
                                <TableCell>{row.ifsc}</TableCell>
                                <TableCell>{row.branch}</TableCell>
                                <TableCell>{row.bank_id}</TableCell>
                                <TableCell>{row.address}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BankTable
