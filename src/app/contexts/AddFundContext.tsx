import { createContext, useContext, ReactNode } from "react";

// Define the shape of your fund object
// type Fund = {
//   id: number;
//   schemeName: string;
//   plan: string;
//   categoryName: string;
//   [key: string]: any;
// };

// type AddFundContextType = {
//   fundList: Fund[];
//   addFund: (fund: Fund) => void;
//   deleteFund: (id: number) => void;
//   updateFund: (id: number, fund: Fund) => void;
// };

const defaultContext = {
  fundList: [],
  addFund: (fund:any) => {},
  deleteFund: (id: number) => {},
  updateFund: (fund:any, id: number) => {},
};

export const AddFundContext = createContext(defaultContext);

export const useAddFundContext = () => {
  const context = useContext(AddFundContext);
  if (!context) {
    throw new Error("useAddFundContext must be used within AddFundContextProvider");
  }
  return context;
};

// ✅ FIXED: Define a real Provider component
export const AddFundContextProvider = ({
  children,
  value,
}) => {
  return <AddFundContext.Provider value={value}>{children}</AddFundContext.Provider>;
};