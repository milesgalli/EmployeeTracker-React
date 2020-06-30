import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import employees from "./employee.json";
import Table from "./components/Table/Table";

class App extends Component {
  state = {
    employees: employees,
    searchTerm: "",
    searchSetting: "searchBy", // placeholder
    sortSetting: "sortBy", // placceholder
    sortOrder: "asc", // acednign by default
  };

  // handle change function so that when the user searches for an employee

  handleChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });


  };

  // grab filter info from search bar (pass in event handler)

  // process the employees in Appp.js
  sortEmployees = () => {
    // sort employees by asending and decesnding order by id.

    let sortSetting = this.state.sortSetting;

    this.state.employees.sort((a, b) => {
      let propA;
      let propB;

      if (this.state.sortSetting === "sortBy") {
        propA = a.id;
        propB = b.id;
      }

      if (this.state.sortOrder === "asc") {
        if (propA < propB) {
          return -1;
        }
        if (propA > propB) {
          return 1;
        }
        return 0;
      } else if (this.state.sortOrder === "desc") {
        if (propA < propB) {
          return 1;
        }
        if (propA > propB) {
          return -1;
        }
        return 0;
      }
    });
  };



  // search(input) {}

  // pass that processed data to Table

  render() {
    return (
      <section>
        <SearchBar  />
        <Table  employeeData={this.state.employees}/>
      </section>
    );
  }
}

export default App;

// {/* <SearchBar search={search} sort={sort} />
// <Table employeeData={this.state.employees} / */}