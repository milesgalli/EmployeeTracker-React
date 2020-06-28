import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import employees from "./employee.json";
import Table from "./components/Table/Table";

class App extends Component {
  state = {
    employees: employees,
    processed: employees,
  };

  // grab filter info from search bar (pass in event handler)

  // process the employees in Appp.js
  sort(){

  }

  search(input){

  }

  // pass that processed data to Table

  render() {
    return (
      <section>

        <img src="gool.cea"></img>
        <SearchBar search={search} sort={sort} />
        <Table employeeData ={this.state.employees}/>
      </section>
    );
  }
}

export default App;
