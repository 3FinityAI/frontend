import React, { useState } from "react";
import classNames from "classnames";
import styles from "./retirementplanning.module.css";

export default function RetirementPlanning({ setIsCalculated }) {
  const [retirementPlanningData, setRetirementPlanningData] = useState({
    currentAge: "25",
    retirementAge: "60",
    postRetirementReturns: "14",
    inflationRate: "4",
    expectedSaving: "",
    riskAppetite: "moderate",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRetirementPlanningData({
      ...retirementPlanningData,
      [name]: value,
    });
  };

  return (
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
      <div className={styles?.formContainer}>
        <div className={styles?.formbtm}>
          {/* Current Age */}
          <div className={styles?.section}>
            <label className={styles?.label}>Current Age </label>
            <input
              className={styles?.range}
              type="range"
              min="0"
              max="100"
              name="currentAge"
              value={retirementPlanningData?.currentAge}
              onChange={handleChange}
            />
            <span className={styles?.inpres}>
              {retirementPlanningData?.currentAge} yrs
            </span>
          </div>

          {/* Retirement Age */}
          <div className={styles?.section}>
            <label className={styles?.label}>Retirement Age </label>
            <input
              className={styles?.range}
              type="range"
              min="20"
              max="100"
              name="retirementAge"
              value={retirementPlanningData?.retirementAge}
              onChange={handleChange}
            />
            <span className={styles?.inpres}>
              {retirementPlanningData?.retirementAge} yrs
            </span>
          </div>

          {/* Post Retirement Returns */}
          <div className={styles?.section}>
            <label className={styles?.label}>Post Retirement Returns</label>
            <input
              className={styles?.range}
              type="range"
              min="5"
              max="150"
              name="postRetirementReturns"
              value={retirementPlanningData?.postRetirementReturns}
              onChange={handleChange}
            />
            <span className={styles?.inpres}>
              {retirementPlanningData?.postRetirementReturns} %
            </span>
          </div>

          {/* Inflation Rate */}
          <div className={styles?.section}>
            <label className={styles?.label}>Inflation Rate</label>
            <input
              className={styles?.range}
              type="range"
              min="0"
              max="30"
              name="inflationRate"
              value={retirementPlanningData?.inflationRate}
              onChange={handleChange}
            />
            <span className={styles?.inpres}>
              {retirementPlanningData?.inflationRate} %
            </span>
          </div>

          {/* Monthly Expected Savings */}
          <div className={styles?.section}>
            <label className={styles?.label}>Monthly Expected Savings</label>
            <input
              className={styles?.inputText}
              type="text"
              name="expectedSaving"
              value={retirementPlanningData?.expectedSaving}
              placeholder="₹"
              onChange={handleChange}
            />
          </div>

          <div className={styles?.section}>
            <label className={styles?.label}>Risk Appetite</label>
            <div className={styles?.buttonGroup}>
              <button
                className={classNames(styles.fd, {
                  [styles.active]:
                    retirementPlanningData?.riskAppetite === "high",
                })}
                onClick={handleChange}
                value="high"
                name="riskAppetite"
              >
                High
              </button>
              <button
                className={classNames(styles.fd, {
                  [styles.active]:
                    retirementPlanningData?.riskAppetite === "moderate",
                })}
                onClick={handleChange}
                value="moderate"
                name="riskAppetite"
              >
                Moderate
              </button>
              <button
                className={classNames(styles.fd, {
                  [styles.active]:
                    retirementPlanningData?.riskAppetite === "low",
                })}
                onClick={handleChange}
                value="low"
                name="riskAppetite"
              >
                Low
              </button>
            </div>
          </div>
          {/* Submit Button */}
          <button
            className={styles?.calculate}
            onClick={() => setIsCalculated(true)}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}
