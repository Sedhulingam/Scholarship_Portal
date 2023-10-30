import React, { useState } from "react";
import Header from "./Components/Header/Header";
import AddButton from "./Components/Filter/AddIcon";
import Table from "./Components/Table/Table";
import RegNoFilter from "./Components/Filter/RegnoFilter";
import NameFilter from "./Components/Filter/NameFilter"; // Import the Name filter component
import ProgrammeFilter from "./Components/Filter/ProgrammeFilter";
import BranchFilter from "./Components/Filter/BranchFilter";
import "bootstrap/dist/css/bootstrap.min.css";
import GenderFilter from "./Components/Filter/GenderFilter";
import Physically from "./Components/Filter/Physically";

function App() {
  const [regNoFilter, setRegNoFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [programmeFilter, setProgrammeFilter] = useState("");
  const [branchFilter, setBranchFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [physically, setPhysically] = useState("");

  return (
    <div>
      <Header />
      <div className="filter-container">
        <AddButton />
        <RegNoFilter
          onFilter={(filterText) => setRegNoFilter(filterText)}
          filter={regNoFilter}
        />
        <NameFilter
          onFilter={(filterText) => setNameFilter(filterText)}
          filter={nameFilter}
        />
        <ProgrammeFilter
          onFilter={(filterText) => setProgrammeFilter(filterText)}
          filter={programmeFilter}
        />
        <BranchFilter
          onFilter={(filterText) => setBranchFilter(filterText)}
          filter={branchFilter}
        />
        <GenderFilter
          onFilter={(filterText) => setGenderFilter(filterText)}
          filter={genderFilter}
        />
        <Physically
          onFilter={(filterText) => setPhysically(filterText)}
          filter={physically}
        />
      </div>
      <Table
        regNoFilter={regNoFilter}
        nameFilter={nameFilter}
        programmeFilter={programmeFilter}
        branchFilter={branchFilter}
        genderFilter={genderFilter}
        physically={physically}
      />
    </div>
  );
}

export default App;
