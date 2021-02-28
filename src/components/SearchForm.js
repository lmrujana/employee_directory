import React from 'react';

function SearchForm() {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="searchBar" className="form-label">Search:</label>
                    <input
                        id="searchBar"
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;