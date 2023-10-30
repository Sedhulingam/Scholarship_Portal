import React, { useEffect, useState } from "react";
import "./Table.css";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

function Table({
  regNoFilter,
  nameFilter,
  programmeFilter,
  branchFilter,
  genderFilter,
  physically,
}) {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  const recordsPerPage = 6;

  useEffect(() => {
    fetch("http://localhost:8081/alumini")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered;
      if (
        regNoFilter.trim() === "" &&
        nameFilter.trim() === "" &&
        programmeFilter.trim() === "" &&
        branchFilter.trim() === "" &&
        genderFilter.trim() === "" &&
        physically.trim() === ""
      ) {
        filtered = [...data];
      } else {
        filtered = data.filter((row) => {
          const regNo = row.Reg_no;
          const name = row.Name;
          const programme = row.Programme;
          const branch = row.Branch;
          const gender = row.Gender;
          const physically = row.Physically_challenged;
          if (
            (typeof regNo === "string" &&
              regNo.toLowerCase().includes(regNoFilter.toLowerCase())) ||
            (typeof regNo === "number" &&
              regNo.toString().includes(regNoFilter))
          ) {
            if (
              name.toLowerCase().includes(nameFilter.toLowerCase()) &&
              programme.toLowerCase().includes(programmeFilter.toLowerCase()) &&
              branch.toLowerCase().includes(branchFilter.toLowerCase()) &&
              gender.toLowerCase().includes(genderFilter.toLowerCase()) &&
              physically.toLowerCase().includes(physically.toLowerCase())
            ) {
              return true;
            }
          }
          return false;
        });
      }
      setFilteredData(filtered);
    };

    applyFilters();
  }, [
    regNoFilter,
    nameFilter,
    programmeFilter,
    branchFilter,
    genderFilter,
    physically,
    data,
  ]);

  const handleSort = (key) => {
    if (key === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy) {
      if (sortOrder === "asc") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    }
    return 0;
  });

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const records = sortedData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sortedData.length / recordsPerPage);
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="table-container" style={{ padding: "50px" }}>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("SI_no")}>
              SI_no
              {sortBy === "SI_no" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "SI_no" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("Reg_no")}>
              Reg No
              {sortBy === "Reg_no" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "Reg_no" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("Name")}>
              Name
              {sortBy === "Name" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "Name" && sortOrder === "desc" && <BsCaretDownFill />}
            </th>
            <th onClick={() => handleSort("Programme")}>
              Programme
              {sortBy === "Programme" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "Programme" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("Degree")}>
              Degree
              {sortBy === "Degree" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "Degree" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("Branch")}>
              Branch
              {sortBy === "Branch" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "Branch" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("Semester")}>
              Current Semester
              {sortBy === "Semester" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "Semester" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("Father_Name")}>
              Father Name
              {sortBy === "Father_Name" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "Father_Name" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("Mother_Name")}>
              Mother Name
              {sortBy === "Mother_Name" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "Mother_Name" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("tenth_Mark")}>
              10th Mark %
              {sortBy === "tenth_Mark" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "tenth_Mark" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("twelveth_Mark")}>
              12th Mark %
              {sortBy === "twelveth_Mark" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "twelveth_Mark" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("Diploma")}>
              Diploma %
              {sortBy === "Diploma" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "Diploma" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("Gender")}>
              Gender
              {sortBy === "Gender" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "Gender" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("Physically_challenged")}>
              Physically Challenged
              {sortBy === "Physically_challenged" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "Physically_challenged" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>

            <th onClick={() => handleSort("Mobile_No")}>
              Mobile No
              {sortBy === "Mobile_No" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "Mobile_No" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("Personal_Mail_id")}>
              Personal Mail id
              {sortBy === "Personal_Mail_id" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "Personal_Mail_id" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("GCT_mail_id")}>
              GCT Mail id
              {sortBy === "GCT_mail_id" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "GCT_mail_id" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("Address")}>
              Address
              {sortBy === "Address" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "Address" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>

            <th onClick={() => handleSort("First_Graduate")}>
              First Graduate
              {sortBy === "First_Graduate" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "First_Graduate" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("Scholarship_Availed")}>
              Scholarship Availed
              {sortBy === "Scholarship_Availed" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "Scholarship_Availed" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>

            <th onClick={() => handleSort("Annual_Income")}>
              Annual Income
              {sortBy === "Annual_Income" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "Annual_Income" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("Aadhar_No")}>
              Aadhar No
              {sortBy === "Aadhar_No" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "Aadhar_No" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
            <th onClick={() => handleSort("GPA1")}>
              GPA 1
              {sortBy === "GPA1" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "GPA1" && sortOrder === "desc" && <BsCaretDownFill />}
            </th>
            <th onClick={() => handleSort("GPA2")}>
              GPA 2
              {sortBy === "GPA2" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "GPA2" && sortOrder === "desc" && <BsCaretDownFill />}
            </th>
            <th onClick={() => handleSort("GPA3")}>
              GPA 3
              {sortBy === "GPA3" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "GPA3" && sortOrder === "desc" && <BsCaretDownFill />}
            </th>
            <th onClick={() => handleSort("GPA4")}>
              GPA 4
              {sortBy === "GPA4" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "GPA4" && sortOrder === "desc" && <BsCaretDownFill />}
            </th>
            <th onClick={() => handleSort("GPA5")}>
              GPA 5
              {sortBy === "GPA5" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "GPA5" && sortOrder === "desc" && <BsCaretDownFill />}
            </th>
            <th onClick={() => handleSort("GPA6")}>
              GPA 6
              {sortBy === "GPA6" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "GPA6" && sortOrder === "desc" && <BsCaretDownFill />}
            </th>
            <th onClick={() => handleSort("GPA7")}>
              GPA 7
              {sortBy === "GPA7" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "GPA7" && sortOrder === "desc" && <BsCaretDownFill />}
            </th>
            <th onClick={() => handleSort("GPA8")}>
              GPA 8
              {sortBy === "GPA8" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "GPA8" && sortOrder === "desc" && <BsCaretDownFill />}
            </th>
            <th onClick={() => handleSort("Cgpa")}>
              CGPA
              {sortBy === "Cgpa" && sortOrder === "asc" && <BsCaretUpFill />}
              {sortBy === "Cgpa" && sortOrder === "desc" && <BsCaretDownFill />}
            </th>
            <th onClick={() => handleSort("Attendance")}>
              Attendance Percentage
              {sortBy === "Attendance" && sortOrder === "asc" && (
                <BsCaretUpFill />
              )}
              {sortBy === "Attendance" && sortOrder === "desc" && (
                <BsCaretDownFill />
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.SI_no}</td>
              <td>{d.Reg_no}</td>
              <td>{d.Name}</td>
              <td>{d.Programme}</td>
              <td>{d.Degree}</td>
              <td>{d.Branch}</td>
              <td>{d.Semester}</td>
              <td>{d.Father_Name}</td>
              <td>{d.Mother_Name}</td>
              <td>{d.tenth_Mark}</td>
              <td>{d.twelveth_Mark}</td>
              <td>{d.Diploma}</td>
              <td>{d.Gender}</td>
              <td>{d.Physically_challenged}</td>
              <td>{d.Mobile_No}</td>
              <td>{d.Personal_Mail_id}</td>
              <td>{d.GCT_mail_id}</td>
              <td>{d.Address}</td>
              <td>{d.First_Graduate}</td>
              <td>{d.Scholarship_Availed}</td>
              <td>{d.Annual_Income}</td>
              <td>{d.Aadhar_no}</td>
              <td>{d.GPA1}</td>
              <td>{d.GPA2}</td>
              <td>{d.GPA3}</td>
              <td>{d.GPA4}</td>
              <td>{d.GPA5}</td>
              <td>{d.GPA6}</td>
              <td>{d.GPA7}</td>
              <td>{d.GPA8}</td>
              <td>{d.Cgpa}</td>
              <td>{d.Attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a href="#" className="page-link" onClick={previousPage}>
              Prev
            </a>
          </li>
          {pageNumbers.map((num) => (
            <li
              key={num}
              className={`page-item ${currentPage === num ? "active" : ""}`}
            >
              <a href="#" className="page-link" onClick={() => changePage(num)}>
                {num}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );

  function previousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(num) {
    setCurrentPage(num);
  }

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default Table;
