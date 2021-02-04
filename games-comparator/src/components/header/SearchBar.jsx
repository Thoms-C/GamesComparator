import React, {useState} from 'react'
import {SearchContainer} from '../../styled-components/SearchBarStyle'

const SearchBar = ({ setsearchValue, searchValue }) => {
    const clear = () => {
      setsearchValue("");
    };

    return (
        <div>
            <SearchContainer 
            type="text"
            value={searchValue}
            placeholder="Find your games"
            onChange={(event)=> {
                setsearchValue(event.target.value)
            }}
            />
            {searchValue !== "" && (
                <div></div>
            )}
        </div>
    )
}

export default SearchBar;