import React, { useState, useEffect } from "react";
import FundModal from "./FundModal";
import { AlFundList, RetirementResponse } from "../../constants/constants";

const useDebouncedValue = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer); // Clear on new keystroke
  }, [value, delay]);

  return debouncedValue;
};

export default function AddFundModal({ setIsAddFundModalOpen }) {
  const [isFundOpen, setIsFundOpen] = useState(false);
  const [fundToBeAdded, setIsFundToBeAdded] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 500);
  const [filteredFunds, setFilteredFunds] = useState(AlFundList);
  const [isVisible, setIsVisible] = useState(false);

  const handleAddFund = (fund) => {
    setIsFundToBeAdded(fund);
    setIsFundOpen(true);
  };
  // Open animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Close with animation before unmount
  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsAddFundModalOpen(false);
    }, 300); // Match animation duration
  };

  const handleAddFundSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const fetchFiltered = () => {
      if (debouncedSearchTerm.trim() === "") {
        setFilteredFunds([]);
      } else {
        const matches = AlFundList.filter((fund) =>
          fund.schemeName
            .toLowerCase()
            .startsWith(debouncedSearchTerm.toLowerCase())
        );
        setFilteredFunds(matches);
      }
    };

    fetchFiltered();
  }, [debouncedSearchTerm]);
  return (
    <>
      {isFundOpen && (
        <FundModal
          fundToBeAdded={fundToBeAdded}
          setIsFundOpen={setIsFundOpen}
        />
      )}
      <div className="overlay">
        <div
          className={`add-fund-modal ${
            isVisible ? "modal-enter" : "modal-exit"
          }`}
        >
          <span className="close-btn" onClick={closeModal}>
            X
          </span>
          <div className="search-box">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              onChange={(e) => handleAddFundSearch(e)}
            />
          </div>
          <div className="trending-funds-box">
            {filteredFunds.length > 0 ? "" : <h3>Trending Funds</h3>}
            <ul className="fund-list">
              {filteredFunds && filteredFunds.length > 0
                ? filteredFunds.map((fund, index) => (
                    <li className="fund-item" key={index}>
                      <div className="fund-item-top">
                        <div className="fund-properties">
                          <ul>
                            <li className="fund-property">{fund?.plan}</li>
                            <li className="fund-property">
                              {fund?.categoryName}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="fund-item-bottom">
                        <div className="fund-name">{fund?.schemeName}</div>
                        <div className="add-btn">
                          <button
                            className="add-fund-btn"
                            onClick={() => handleAddFund(fund)}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                : AlFundList.slice(0, 10).map((fund, index) => (
                    <li className="fund-item" key={index}>
                      <div className="fund-item-top">
                        <div className="fund-properties">
                          <ul>
                            <li className="fund-property">{fund?.plan}</li>
                            <li className="fund-property">
                              {fund?.categoryName}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="fund-item-bottom">
                        <div className="fund-name">{fund?.schemeName}</div>
                        <div className="add-btn">
                          <button
                            className="add-fund-btn"
                            onClick={() => handleAddFund(fund)}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
            </ul>
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
            z-index: 1000;
          }
          .add-fund-modal {
            background: #0e1524;
            padding: 20px;
            border-radius: 10px;
            width: 375px;
            height: 480px;
            position: absolute;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            top: 50%;
            transform: translateY(-50%);
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .close-btn {
            cursor: pointer;
            position: absolute;
            right: 15px;
            color: #fff;
            top: 5px;
            font-weight: bold;
          }
          .modal-enter {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
            transition: all 300ms ease-in-out;
          }

          .modal-exit {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
            transition: all 300ms ease-in-out;
          }
          .search-box {
            margin-block: 20px;
          }
          .search-box input[type="search"] {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: none;
            outline: none;

            color: #fff;
            background: #242834;
          }
          .trending-funds-box {
            border-radius: 8px;
            width: 332px;
            height: 356px;
            overflow-y: auto;
          }
          .trending-funds-box h3 {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #fff;
          }

          .fund-list {
            list-style-type: none;
            padding: 0;
          }
          .fund-item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            margin-bottom: 10px;
            background-color: #0f1320;
          }
          .fund-properties ul {
            display: flex;
            gap: 10px;
            list-style: none;
            padding: 0;
          }
          .fund-property {
            background-color: #e0e0e0;
            padding: 2px;
            border-radius: 5px;
            font-size: 10px;
          }
          .fund-item-top {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          .fund-item-bottom {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .fund-name {
            width: 70%;
            font-weight: bold;
            font-size: 16px;
            color: #fff;
          }
          .add-btn {
            margin-left: auto;
          }
          .add-fund-btn {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
          }
            @media (max-width: 768px) {
            .add-fund-modal {
            width: 100%;
            padding: 10px;
            }
            .trending-funds-box {
            width: 100%;
            }
            }
        `}</style>
      </div>
    </>
  );
}
