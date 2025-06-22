"use client";
import React, { useState } from "react";
import RetirementPlanning from "../../components/finance/RetirementPlanning";
import RetirementPlanningResults from "../../components/finance/RetirementPlanningResults";
import MyInvestment from "../../components/finance/MyInvestment";


function FinancePage() {

    const [isCalculated, setIsCalculated] = useState(false);
    const [myInvestment, setMyInvestment] = useState(false);


    return (
        <>
            {isCalculated ? <RetirementPlanningResults />
                : myInvestment ? <MyInvestment /> : <RetirementPlanning setIsCalculated={setIsCalculated} />
            }
           

        </>
    );
}

export default FinancePage;

