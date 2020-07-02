import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <section>
        <h1 className="title text-light"> Company Employees </h1>
        <form className="">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="form-group form-inline">
                <input
                  type="text"
                  name="searchTerm"
                  placeholder="Search..."
                  className="form-control"
                  value={this.state.searchTerm}
                  onChange={this.handleChange}
                />
                <div className="input-group-append">
                  <select
                    className="form-control"
                    id="searchSetting"
                    name="searchSetting"
                    value={this.state.searchSetting}
                    onChange={this.handleChange}
                  >
                    <option value="searchBy">Search by...</option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="department">Department</option>
                    <option value="role">Role</option>
                    <option value="location">Location</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5">
              {/* sort */}
              <div className="form-group form-inline">
                <select
                  id="sort"
                  className="form-control"
                  name="sortSetting"
                  value={this.state.sortSetting}
                  onChange={this.handleChange}
                >
                  <option disabled value="sortBy">
                    Sort by...
                  </option>
                  <option value="firstName">First Name</option>
                  <option value="lastName">Last Name</option>
                  <option value="department">Department</option>
                  <option value="role">Role</option>
                  <option value="location">Location</option>
                </select>
                {/* sort by ascending or descending */}
                <div className="input-group-append">
                  <label
                    className={`form-control btn ${
                      this.state.sortOrder === "asc"
                        ? "btn-warning"
                        : "btn-outline-warning"
                    }`}
                  >
                    <input
                      type="checkbox" defaultChecked
                      name="sortOrder"
                      id="asc"
                      value="asc"
                      checked={this.state.sortOrder === "asc"}
                      onChange={this.handleChange}
                    />{" "}
                    Asc
                  </label>
                  <label
                    className={`form-control btn ${
                      this.state.sortOrder === "desc"
                        ? "btn-warning"
                        : "btn-outline-warning"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="sortOrder"
                      id="desc"
                      value="desc"
                      checked={this.state.sortOrder === "desc"}
                      onChange={this.handleChange}
                    />{" "}
                    Desc
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
       
      </section>
    );
  }
}

export default SearchBar;
