import React, { useState } from 'react';

function Busqueda({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div id="subcont_busqueda">
    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={handleSearchChange}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>

  );
}

export default Busqueda;