import React, { useState } from "react";
import "./Physically.css";

function Physically({ onFilter, filter }) {
  const handleFilterChange = (event) => {
    const text = event.target.value;
    console.log(text);
    onFilter(text);
  };

  return (
    <div className="filter-container-physically">
      <input
        type="text"
        className="filter-input"
        placeholder="Physically Challenged"
        value={filter}
        onChange={handleFilterChange}
        id="Physically"
        style={{ textAlign: "center" }}
      />
    </div>
  );
}

export default Physically;
