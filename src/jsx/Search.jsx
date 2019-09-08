import React from "react";

const Search = (props) => { 
        return (
            <div>
                <input name='keyword' value={props.value} onChange={props.handleChange}>
                </input>
                <button className='button' onClick={props.handleSearch}>Search</button>
            </div>
        )
    }

export default Search;