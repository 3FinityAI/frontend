"use client";
import React, { useState } from "react";
import RetirementPlanning from "@/app/components/finance/RetirementPlanning";
import RetirementPlanningResults from "@/app/components/finance/RetirementPlanningResults";


function FinancePage() {
  const [isCalculated, setIsCalculated] = useState(false);
  
  return (
    <>
      {isCalculated ? (
        <RetirementPlanningResults />
      ) : (
        <RetirementPlanning setIsCalculated={setIsCalculated} />
      )}
    </>
  );
}

export default FinancePage;
