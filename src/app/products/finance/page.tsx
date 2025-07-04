"use client";
import React, { useState, useEffect } from "react";
import RetirementPlanning from "@/app/components/finance/RetirementPlanning";
import RetirementPlanningResults from "@/app/components/finance/RetirementPlanningResults";
import MyInvestment from "@/app/components/finance/MyInvestment";
// import { AddFundContextProvider } from "@/app/contexts/AddFundContext";

function FinancePage() {
  const [isCalculated, setIsCalculated] = useState(false);
  const [myInvestment, setMyInvestment] = useState(false);
  // const [fundList, setFundList] = useState([]);



//   const addFund = (fund:any) => {
//     console.log(fund, "add is called");
//     setFundList((prev) => [{...fund }, ...prev]);
//   };

//   const updateFund = (id:any, fund:any) => {
//     setFundList((prev) =>
//       prev.map((prevFund) => (prevFund.id === id ? fund : prevFund))
//     );
//   };

//   const deleteFund = (id:any) => {
//     setFundList((prev) => prev.filter((fund) => fund.id !== id));
//   };

//  useEffect(() => {
//     try {
//       const storedFundList = JSON.parse(localStorage.getItem("fundList"));
//       if (Array.isArray(storedFundList) && storedFundList.length > 0) {
//         setFundList(storedFundList);
//       }
//     } catch (error) {
//       console.error("Error parsing fundList from localStorage:", error);
//     }
//   }, []);


//   useEffect(() => {
//     localStorage.setItem("fundList", JSON.stringify(fundList));
//       console.log(fundList, "fundlist")
//   }, [fundList])

  return (
    <>
      {isCalculated ? (
        <RetirementPlanningResults />
      ) : myInvestment ? (
        <MyInvestment />
      ) : (
        <RetirementPlanning setIsCalculated={setIsCalculated} />
      )}
    </>
  );
}

export default FinancePage;
