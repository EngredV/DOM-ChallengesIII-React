import React, { Component } from 'react';

const TableCell = ({ cellColor, handleClick }) => {
    return (
        <td onClick={handleClick} onDragOver={handleClick} draggable={true}>
            
        </td>
    )
}

export default TableCell;


