import React from 'react';

export default function Search({searchValue, searchTermChanged, search}) {
    return (
        <form onSubmit={search}>
            <label htmlFor="search-input">Search images:</label>
            <input
                id="search-input"
                type="text"
                placeholder="Enter search term (e.g. 'cats')"
                value={searchValue}
                onChange={searchTermChanged}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        search()
                    }
                }}
            />
            <input type="submit" value="Search" />
        </form>
    )
}
