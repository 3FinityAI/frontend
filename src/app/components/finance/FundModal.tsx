import React, { useState } from "react";
import { useAddFundContext } from "@/app/contexts/AddFundContext";

export default function FundModal({ fundToBeAdded, setIsFundOpen }) {
  const { fundList, addFund } = useAddFundContext();
  
  const [fundData, setFundData] = useState({
    investmentAmount: "0",
    investmentDuration: "10",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFundData({
      ...fundData,
      [name]: value,
    });
  };


  const add = (e) => {
    e.preventDefault();
    if (!fundData) return;
    addFund(fundToBeAdded);
    setFundData({ investmentAmount: "0", investmentDuration: "0" });
  };

  const closeModal = () => {
    setIsFundOpen(false);
  };
  return (
    <div className="overlay">
      <div className="fund-modal">
        <div className="fund-name">
          <p>{fundToBeAdded?.schemeName} </p>
          <span className="close-btn" onClick={closeModal}>
            X
          </span>
        </div>
        <div className="fund-form">
          <div className="form-group">
            <label htmlFor="investment-amount">Investment Amount</label>
            <input
              name="investmentAmount"
              type="text"
              id="investment-amount"
              placeholder="Enter amount"
              value={fundData?.investmentAmount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="investment-duration">Years</label>
            <input
              type="range"
              min={1}
              max={70}
              name="investmentDuration"
              id="investment-duration"
              value={fundData?.investmentDuration}
              onChange={handleChange}
            />
            <span className="duration-value">
              {fundData?.investmentDuration} yrs
            </span>
          </div>
          <button className="add-fund" onClick={add}>
            Add
          </button>
        </div>
      </div>
      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1001;
        }
        .fund-modal {
          background: #0e1524;
          padding: 20px;
          border-radius: 10px;
          width: 375px;
          height: 480px;
        }
        .fund-name {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          color: #fff;
          position: relative;
        }
        .fund-name p {
          width: 90%;
        }
        .close-btn {
          cursor: pointer;
          color: #fff;
          font-weight: bold;
          margin-left: 10px;
          position: absolute;
          right: 0;
          top: -10px;
        }
        .fund-form {
          display: flex;
          flex-direction: column;
        }
        .form-group {
          width: 100%;
          margin-bottom: 15px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
          color: #fff;
        }
        .form-group input[type="text"] {
          width: 348px;
          color: #fff;
          padding: 12px;
          border: none;
          outline: none;
          border-radius: 4px;
          background: rgb(23, 29, 43);
          appearance: none;
        }
        .form-group input[type="range"] {
          width: 75%;
          padding: 8px 0;
          //   border: 1px solid #ccc;
          border-radius: 4px;
        }
        .duration-value {
          margin-left: 8px;
          font-size: 14px;
          color: #000;
          padding: 10px 15px;
          font-weight: bold;
          background: #fff;
          border-radius: 12px;
          position: relative;
          bottom: 25px;
        }
        .add-fund {
          background-color: #007bff;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        .add-fund:hover {
          background-color: #0056b3;
        }
        @media (max-width: 768px) {
          .fund-modal {
            width: 90%;
            height: auto;
          }
          .overlay {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
