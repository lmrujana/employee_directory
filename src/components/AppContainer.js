import React, { Component } from 'react';
import SearchForm from "./SearchForm";
import Table from "./Table";
import employeesJSONArray from "../employees.json";

class AppContainer extends Component {
    state = {
        employees: employeesJSONArray
    }

    searchName = query => {
        const seacrhFunction = (s, r) => {
            const regex = new RegExp(`(^${r}+|[ ]${r}+)`, 'i');
            return s.match(regex);
        };

        const filteredArray = employeesJSONArray.filter(employee => seacrhFunction(employee.name, query));

        this.setState({ employees: filteredArray });
    }

    handleOnSort = event => {
        event.preventDefault();

        let sortedArray = this.state.employees.sort((a, b) => {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        })

        this.setState({ employees: sortedArray })
    }

    handleOnSortById = event => {
        event.preventDefault();

        let sortedArray = this.state.employees.sort((a, b) => {
            return a.id - b.id;
        })

        this.setState({ employees: sortedArray })
    }

    handleInputChange = event => {
        const value = event.target.value;
        if (value) {
            this.searchName(value);
        } else {
            this.setState({ employees: employeesJSONArray })
        }
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Employee Directory</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <SearchForm sortByName={this.handleOnSort} sortById={this.handleOnSortById} filter={this.handleInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Table employeesArray={this.state.employees} />
                    </div>
                </div>
            </div>
        )
    }
}

export default AppContainer;