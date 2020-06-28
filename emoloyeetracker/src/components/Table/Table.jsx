import React, { Component } from "react";

class Table extends Component {
  state = {};
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Location</th>
            <th>Department</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {this.props.employeeData.map((employee) => {
            return (
              <tr>
                <td>{employee.id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.location}</td>
                <td>{employee.department}</td>
                <td>{employee.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
