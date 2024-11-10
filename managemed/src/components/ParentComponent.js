import React, { useState } from "react";
import SearchPatient from "./SearchPatient";

function ParentComponent() {
  const [currentPage, setCurrentPage] = useState("search");

  // Define the navigateToPatient function within ParentComponent
  const navigateToPatient = (hospitalID, levelID, roomID, patientID) => {
    setCurrentPage("patient");
    console.log("Navigating to patient", patientID);
  };

  return (
    <div>
      {/* Conditionally render SearchPatient and pass navigateToPatient as a prop */}
      {currentPage === "search" && (
        <SearchPatient navigateToPatient={navigateToPatient} />
      )}
      {currentPage === "patient" && <div>Patient Details Page</div>}
    </div>
  );
}

export default ParentComponent;
