import React, { useState } from "react";
import "./NameFilter.css";

function NameFilter({ onFilter, filter }) {
  const handleFilterChange = (event) => {
    const text = event.target.value;
    console.log(text);
    onFilter(text);
  };

  return (
    <div className="filter-container-name">
      <input
        type="text"
        className="filter-input"
        placeholder="Name"
        value={filter}
        onChange={handleFilterChange}
        id="NameInput"
        style={{ textAlign: "center" }}
      />
    </div>
  );
}

export default NameFilter;
