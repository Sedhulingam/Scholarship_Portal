import React, { useState } from "react";
import "./RegnoFilter.css";

function RegnoFilter({ onFilter, filter }) {
  const handleFilterChange = (event) => {
    const text = event.target.value;
    console.log(text);

    onFilter(text);
  };

  return (
    <div className="filter-container-regno">
      <input
        type="text"
        className="filter-input"
        placeholder="Reg No"
        value={filter}
        onChange={handleFilterChange}
        id="regNoInput"
        style={{ textAlign: "center" }}
      />
    </div>
  );
}

export default RegnoFilter;
