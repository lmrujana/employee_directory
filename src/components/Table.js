import React from 'react';

function Table(props){
    const employees = props.employeesArray
    const employeesTable = employees.map(employee => (
        <tr>
            <th scope="row">{employee.id}</th>
            <td>{employee.name}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
        </tr>
    ))
    return(
        <table className="table">
            <thead>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
            </thead>
            <tbody>
                {employeesTable}
            </tbody>
        </table>
    )
}

export default Table;