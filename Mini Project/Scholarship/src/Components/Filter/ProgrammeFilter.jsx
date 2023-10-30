import React, { useState } from "react";
import "./ProgrammeFilter.css";

function ProgrammeFilter({ onFilter, filter }) {
  const handleFilterChange = (event) => {
    const text = event.target.value;
    console.log(text);
    onFilter(text);
  };

  return (
    <div className="filter-container-programme">
      <input
        type="text"
        className="filter-input"
        placeholder="Programme"
        value={filter}
        onChange={handleFilterChange}
        id="ProgrammeInput"
        style={{ textAlign: "center" }}
      />
    </div>
  );
}

export default ProgrammeFilter;
