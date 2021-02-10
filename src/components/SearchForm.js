import React from 'react'

const SearchForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} type="text" name="searchTerm" value={props.searchTerm} placeholder="Enter search term"/>
            <input type="submit" value="submit" />
        </form>
    )
}

export default SearchForm