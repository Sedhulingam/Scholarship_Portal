import React, { useState } from "react";
import "./GenderFilter.css";

function GenderFilter({ onFilter, filter }) {
  const handleFilterChange = (event) => {
    const text = event.target.value;
    console.log(text);
    onFilter(text);
  };

  return (
    <div className="filter-container-gender">
      <input
        type="text"
        className="filter-input"
        placeholder="Gender"
        value={filter}
        onChange={handleFilterChange}
        id="GenderInput"
        style={{ textAlign: "center" }}
      />
    </div>
  );
}

export default GenderFilter;
