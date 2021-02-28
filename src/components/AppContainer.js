import React, { Component } from 'react';
import SearchForm from "./SearchForm";
import employeesJSONArray from "../employees.json";

class AppContainer extends Component {
    state = {
        employees: employeesJSONArray
    }

    render() {
        return (
            <div>
                <h1>Testing the homework</h1>
                <SearchForm />
            </div>
        )
    }
}

export default AppContainer;