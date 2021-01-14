import React, { Component } from 'react';
import TableRow from "./TableRow";

const Table = ({ cellColor, rows, columns, handleClick }) => {
    let tableRows = [];

    for (let i = 0; i < rows; i++) {
        tableRows.push(
            <TableRow 
                key={i}
                cellColor={cellColor}
                columns={columns}
                handleClick={handleClick}
            />
        )
    }

    return (
        <table className="Table">
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}

export default Table;

