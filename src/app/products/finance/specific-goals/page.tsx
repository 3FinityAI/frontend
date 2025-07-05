"use client";
import React, { useState } from "react";
import SpecificGoals from "@/app/components/finance/SpecificGoals";
import RetirementPlanningResults from "@/app/components/finance/RetirementPlanningResults";

function SpecificGoalsPage() {
  const [isCalculated, setIsCalculated] = useState(false);
  return isCalculated ? (
    <RetirementPlanningResults />
  ) : (
    <SpecificGoals setIsCalculated={setIsCalculated} />
  );
}

export default SpecificGoalsPage;
