import React from "react";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="content">
        <div className="row">
          <div className="col-8 col-md-10">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-3">
                <strong className="text-warning">Name:</strong>{" "}
                {props.firstname} {props.lastname}
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="">
                  <strong className="text-warning">Location:</strong>{" "}
                  {props.location}
                </div>
              </div>

              <div className="col-12 col-md-6 col-xl-3">
                <strong className="text-warning">Role:</strong> {props.role}
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <strong className="text-warning">Department:</strong>{" "}
                {props.department}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <span className="remove" onClick={() => props.handleRemoveFriend(props.id)}>𝘅</span> */}
    </div>
  );
}

export default EmployeeCard;
