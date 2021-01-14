import React, { Component } from 'react';
import { Table } from "./Components";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellColor: "",
      rows: 1,
      columns: 1,
      fillAllCells: "",
      fillAllUncoloredCells: "",
      clearAllCells: "",
    }
  }

  addRow = () => {
    this.setState({ rows: this.state.rows + 1 });
  }

  addColumn = () => {
    this.setState({ columns: this.state.columns + 1 });
  }

  removeRow = () => {
    if (this.state.rows < 1) { 
      return alert("Error: there are now rows to delete.");
    }
    else {
      this.setState({ rows: this.state.rows - 1 });
    }
  }

  removeColumn = () => {
    if (this.state.columns < 1) {
      return alert("Error: there are no columns to delete.");
    }
    else {
      this.setState({ columns: this.state.columns - 1 });
    }
  }

  selectedColor = (event) => {
    this.setState({
      cellColor: event.target.value
    })
  }

  fillAllCells = (event) => {
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++){
      allCells[i].style.backgroundColor = this.state.cellColor;
    }
  };

  fillAllUncoloredCells = (event) => {
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++){
      if(allCells[i].style.backgroundColor === ""){
        allCells[i].style.backgroundColor = this.state.cellColor;
      }
    }
  };

  clearAllCells = (event) => {
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++){
      allCells[i].style.backgroundColor = "";
    }
  };

  handleClick = (event) => {
    event.target.style.backgroundColor = this.state.cellColor;
  }

  render() {
    return (
      <>
        <div className="butns">
          <button className="btns" onClick={() => this.addRow(this.state)}>Add Row</button>
          <button className="btns" onClick={() => this.addColumn(this.state)}>Add Column</button>
          <button className="btns" onClick={() => this.removeRow(this.state)}>Delete Row</button>
          <button className="btns" onClick={() => this.removeColumn(this.state)}>Delete Column</button> 
          <button className="btns" onClick={() => this.fillAllCells(this.state)}>Fill all cells</button>
          <button className="btns" onClick={() => this.fillAllUncoloredCells(this.state)}>Fill all uncolored cells</button>
          <button className="btns" onClick={() => this.clearAllCells(this.state)}>Clear all cells</button>     
        </div>
        <div className="dropdown">
          <select value={this.state.cellColor} onChange={this.selectedColor}>
            <option value="">--Select A Color--</option>
            <option className="black" id="black" value="black">Black</option>
            <option className="red" id="red" value="red">Red</option>
            <option className="deepPink" id="deepPink" value="deepPink">Deep Pink</option>
            <option className="pink" id="pink" value="pink">Pink</option>
            <option className="purple" id="purple" value="purple">Purple</option>
            <option className="blue" id="blue" value="blue">Blue</option>
            <option className="lightBlue" id="lightBlue" value="lightBlue">Light Blue</option>
            <option className="green" id="green" value="green">Green</option>
            <option className="lightGreen" id="lightGreen" value="lightGreen">Light Green</option>
            <option className="orange" id="orange" value="orange">Orange</option>
            <option className="yellow" id="yellow" value="yellow">Yellow</option> 
          </select>
        </div>
        <div className="Table">
          <Table
            rows={this.state.rows}
            columns={this.state.columns}
            cellColor={this.state.cellColor}
            handleClick={this.handleClick}
          />
        </div>
        
      </>
    )
  }
}

export default App;



