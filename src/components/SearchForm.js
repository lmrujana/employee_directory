import React from 'react';

function SearchForm(props) {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="searchBar" className="form-label">Search:</label>
                    <input
                        id="searchBar"
                        type="text"
                        className="form-control"
                        onChange={props.filter}
                    />
                </div>
                <div className="mb-3">
                    <button className="btn btn-success" onClick={props.sortByName}>Sort By Name</button>
                    {" "}
                    <button className="btn btn-success" onClick={props.sortById}>Sort By Id</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;