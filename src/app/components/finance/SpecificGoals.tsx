import React, { useState } from "react";
import classNames from "classnames";
import styles from "./specificgoals.module.css"

export default function SpecificGoals({ setIsCalculated }) {
  const [specificGoalsData, setSpecificGoalsData] = useState({
    targetAmount: "0",
    timeFrame: "60",
    expectedSaving: "",
    riskAppetite: "moderate",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSpecificGoalsData({
      ...specificGoalsData,
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
              <a>Specific Goals</a>
            </li>
          </ul>
        </div>
        <div className={styles?.formContainer}>
          <div className={styles?.formbtm}>
            {/* Target Amount */}
            <div className={styles?.section}>
              <label className={styles?.label}>Target Amount</label>
              <input
                className={styles?.inputText}
                type="text"
                name="targetAmount"
                value={specificGoalsData?.targetAmount}
                placeholder="₹"
                onChange={handleChange}
              />
            </div>

            {/* Time frame in Years */}
            <div className={styles?.section}>
              <label className={styles?.label}>Time frame in Years</label>
              <input
                className={styles?.inputText}
                type="text"
                name="timeFrame"
                value={specificGoalsData?.timeFrame}
                placeholder=""
                onChange={handleChange}
              />
            </div>

            {/* Monthly Expected Savings */}
            <div className={styles?.section}>
              <label className={styles?.label}>Monthly Expected Savings</label>
              <input
                className={styles?.inputText}
                type="text"
                name="expectedSaving"
                value={specificGoalsData?.expectedSaving}
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
                    specificGoalsData?.riskAppetite === "high",
                })}
                  onClick={handleChange}
                  name="riskAppetite"
                  value="high"
                >
                  High
                </button>
                <button
                  className={classNames(styles.fd, {
                  [styles.active]:
                    specificGoalsData?.riskAppetite === "moderate",
                })}
                  onClick={handleChange}
                  name="riskAppetite"
                  value="moderate"
                >
                  Moderate
                </button>
                <button
                 className={classNames(styles.fd, {
                  [styles.active]:
                    specificGoalsData?.riskAppetite === "low",
                })}
                  onClick={handleChange}
                  name="riskAppetite"
                  value="low"
                >
                  Low
                </button>
              </div>
            </div>
            {/* Submit Button */}
            <button className={styles?.calculate} onClick={() => setIsCalculated(true)}>
              Calculate
            </button>
          </div>
        </div>
      </div>
  );
}
