import React, { useState } from "react";
import "./BranchFilter.css";

function BranchFilter({ onFilter, filter }) {
  const handleFilterChange = (event) => {
    const text = event.target.value;
    console.log(text);
    onFilter(text);
  };

  return (
    <div className="filter-container-branch">
      <input
        type="text"
        className="filter-input"
        placeholder="Branch"
        value={filter}
        onChange={handleFilterChange}
        id="BranchInput"
        style={{ textAlign: "center" }}
      />
    </div>
  );
}

export default BranchFilter;
