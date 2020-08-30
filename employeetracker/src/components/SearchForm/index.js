import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  console.log (props);
  return (
    <React.Fragment>
    <form className="search">
      {/* <div className="form-group">
        <label htmlFor="Employee">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="Employee"
          list="Employees"
          type="text"
          className="form-control"
          placeholder="Type in an employee nameto begin"
          id="employee"
        /> */}
        
      
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      {/* </div> */}
    </form>
          <table>
            <th>First and Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Phone</th>
            <tbody>
          {props.employees && props.employees.map((employee, index)=> (
            <tr key={index}>
              <td>
                {employee.name.first} {employee.name.last}
              </td>
              <td>{employee.email}</td>
              <td>
                {employee.dob.date}
              </td>
              <td>{employee.dob.age}</td>
              <td>{employee.phone}</td>
            </tr>
          ))}
          </tbody>
          </table>
        
    </React.Fragment>
  );
}

export default SearchForm;