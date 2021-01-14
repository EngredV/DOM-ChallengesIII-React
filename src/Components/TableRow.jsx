import React, { Component } from 'react';
import TableCell from "./TableCell";

const TableRow = ({ cellColor, columns, handleClick }) => {
    let tableColumns = [];

    for (let i = 0; i < columns; i++) {
        tableColumns.push(
            <TableCell 
                key={i}
                cellColor={cellColor}
                handleClick={handleClick}
            />
        )
    }

    return (
        <tr>
            {tableColumns}
        </tr>
    )
}

export default TableRow;



