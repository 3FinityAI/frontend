"use client";
import React, { useState } from "react";
import SpecificGoals from "../../../components/finance/SpecificGoals";


function SpecificGoalsPage() {

     const [isCalculated, setIsCalculated] = useState(false);

    return (
        <>
            <SpecificGoals setIsCalculated={setIsCalculated}/>

        </>
    );
}

export default SpecificGoalsPage;

