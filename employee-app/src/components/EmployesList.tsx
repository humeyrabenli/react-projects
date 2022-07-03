import Employee from "./Employee";
import { useState } from "react";

const EmployeeList = () => {
    useState()
  return (
    <table className="table-striped table-hover table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <Employee />
      </tbody>
    </table>
  );
};

export default EmployeeList;
