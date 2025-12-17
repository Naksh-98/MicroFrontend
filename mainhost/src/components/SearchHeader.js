import React, { useState } from 'react'

const SearchHeader = () => {
    const [search, setSearch] = useState('')
    const EventSearch = () => {
        window.dispatchEvent(new CustomEvent("search", { detail: search }))
    }
    return (
        <div className='search-header'>
            <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={EventSearch}>Search</button>
        </div>
    )
}

export default SearchHeader