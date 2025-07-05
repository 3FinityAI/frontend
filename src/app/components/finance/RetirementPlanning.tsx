import React, { useState } from "react";
export default function RetirementPlanning({ setIsCalculated }) {
  const [retirementPlanningData, setRetirementPlanningData] = useState({
    currentAge: "25",
    retirementAge: "60",
    postRetirementReturns: "14",
    inflationRate: "4",
    expectedSaving: "",
    riskAppetite: "moderate",
  })

  const handleChange = (e)=> {
    const {name, value} = e.target;
    setRetirementPlanningData({
      ...retirementPlanningData,
      [name]: value
    })
  }

  return (
    <>
      <div className="dashboard-right">
        <div className="breadcrumb">
          <a href="/products" className="mob-nav-icon">
            &lt;
          </a>

          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <a href="/products/finance">Finance</a>
            </li>
            <li className="breadcrumb-item bc-active">
              <a>Retirement Planning</a>
            </li>
          </ul>
        </div>
        <div className="form-container">
          <div className="form-btm">
            {/* Current Age */}
            <div className="section">
              <label>Current Age </label>
              <input
                type="range"
                min="0"
                max="100"
                name="currentAge"
                value={retirementPlanningData?.currentAge}
                onChange={handleChange}
              />
              <span className="inp-res">{retirementPlanningData?.currentAge} yrs</span>
            </div>

            {/* Retirement Age */}
            <div className="section">
              <label>Retirement Age </label>
              <input
                type="range"
                min="20"
                max="100"
                name="retirementAge"
                value={retirementPlanningData?.retirementAge}
                onChange={handleChange}
              />
              <span className="inp-res">{retirementPlanningData?.retirementAge} yrs</span>
            </div>

            {/* Post Retirement Returns */}
            <div className="section">
              <label>Post Retirement Returns</label>
              <input
                type="range"
                min="5"
                max="150"
                name="postRetirementReturns"
                value={retirementPlanningData?.postRetirementReturns}
                onChange={handleChange}
              />
              <span className="inp-res">{retirementPlanningData?.postRetirementReturns} %</span>
            </div>

            {/* Inflation Rate */}
            <div className="section">
              <label>Inflation Rate</label>
              <input
                type="range"
                min="0"
                max="30"
                name="inflationRate"
                value={retirementPlanningData?.inflationRate}
                onChange={handleChange}
              />
              <span className="inp-res">{retirementPlanningData?.inflationRate} %</span>
            </div>

            {/* Monthly Expected Savings */}
            <div className="section">
              <label>Monthly Expected Savings</label>
              <input
                type="text"
                name="expectedSaving"
                value={retirementPlanningData?.expectedSaving}
                placeholder="₹"
                onChange={handleChange}
              />
            </div>

            <div className="section">
              <label>Risk Appetite</label>
              <div className="button-group">
                <button
                  className={`fd ${retirementPlanningData?.riskAppetite === "high" ? "active" : ""}`}
                  onClick={handleChange}
                  value="high"
                  name="riskAppetite"
                >
                  High
                </button>
                <button
                  className={`fd ${
                    retirementPlanningData?.riskAppetite === "moderate" ? "active" : ""
                  }`}
                  onClick={handleChange}
                  value="moderate"
                  name="riskAppetite"
                >
                  Moderate
                </button>
                <button
                  className={`fd ${retirementPlanningData?.riskAppetite === "low" ? "active" : ""}`}
                  onClick={handleChange}
                  value="low"
                  name="riskAppetite"
                >
                  Low
                </button>
              </div>
            </div>
            {/* Submit Button */}
            <button className="calculate" onClick={() => setIsCalculated(true)}>
              Calculate
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .dashboard-right {
          width: 80%;
          height: 100vh;
          padding: 20px;
          background-color: #010612;
          overflow: auto;
        }
        .mob-nav-icon {
          display: none;
        }

        .breadcrumb {
          margin-bottom: 20px;
          text-align: center;
        }
        .breadcrumb-list {
          list-style: none;
          padding: 0;
          margin-top: 36px;
        }
        .breadcrumb-item {
          display: inline;
        }
        .breadcrumb-item a {
          text-decoration: none;
          color: #aaa;
          font-size: 28px;
          font-weight: 500;
        }
        .breadcrumb-item.bc-active a {
          color: #fff;
        }
        .breadcrumb-item:not(:last-child)::after {
          content: " > ";
          color: #666;
          font-size: 28px;
          font-weight: 500;
        }

        .form-container {
          max-width: 815px;
          margin: 40px auto;
          padding: 20px;
          border: 1px solid rgb(255 255 255 / 25%);
          border-radius: 12px;
          background: #010612;
          font-family: sans-serif;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .section {
          margin-bottom: 20px;
        }

        label {
          display: block;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 8px;
        }

        .button-group {
          display: flex;
          gap: 5px;
        }

        .fd {
          width: 105px;
          padding: 12px;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          background: rgb(255 255 255 / 5%);
          color: #fff;
          cursor: pointer;
          transition: 0.3s ease;
        }

        button:hover {
          background: #0080e8;
          color: white;
        }

        .active {
          background: #0080e8;
          color: white;
        }

        .radio-group label {
          display: inline-block;
          margin-right: 20px;
          font-weight: normal;
        }

        input[type="range"] {
          width: 72%;
        }
        input[type="text"] {
          width: 85%;
          border: none;
          border-radius: 6px;
          padding: 12px;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          background: rgb(255 255 255 / 5%);
        }
        .ag-fd {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .form-btm {
          width: 100%;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;

          gap: 20px;
        }
        .form-btm .section {
          width: 40%;
        }
        .calculate {
          width: 92%;
          padding: 12px;
          font-size: 16px;
          margin: 20px 0;
          background: #0080e8;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .calculate:hover {
          background: #005bb5;
        }

        .inp-res {
          margin-top: 10px;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          padding: 10px;
          border-radius: 6px;
          background: rgb(255 255 255 / 5%);
        }

        @media (max-width: 769px) {
          .form-container {
            padding: 0;
            border: none;
          }
          .dashboard-right {
            width: 100%;
          }
          .breadcrumb {
            display: flex;
            align-items: center;
          }
          .breadcrumb-item {
            display: none;
          }
          .breadcrumb-item.bc-active {
            display: block;
          }
          .mob-nav-icon {
            display: block;
            font-size: 32px;
            color: #fff;
            margin: 36px 36px 0 0;
          }
          .form-btm {
            width: 100%;
            flex-direction: column;
          }
          .form-btm .section {
            width: 100%;
          }
          input[type="range"] {
            width: 82%;
          }
          .button-group {
            justify-content: space-between;
          }
          .calculate {
            width: 100%;
          }
          input[type="text"] {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
