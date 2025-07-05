import React, { useState } from "react";
import DoughnutChart from "./DoughnutChart";
import AddFundModal from "./AddFundModal";
import { RetirementResponse, AlFundList } from "@/app/constants/constants";
import { useAddFundContext } from "@/app/contexts/AddFundContext";
import styles from "./myinvestment.module.css";

export default function MyInvestment() {
  const { fundList } = useAddFundContext();

  const [isAddFundModalOpen, setIsAddFundModalOpen] = useState(false);
  const colors = [
    "#E57373", // red
    "#64B5F6", // blue
    "#81C784", // green
    "#FFD54F", // yellow
    "#BA68C8", // purple
    "#4DB6AC", // teal
    "#A1887F", // brown
  ];

  return (
    <>
      {isAddFundModalOpen && (
        <AddFundModal setIsAddFundModalOpen={setIsAddFundModalOpen} />
      )}
      <div className="dashboard-right">
        <div className="breadcrumb">
          <a href="/products/finance" className="mob-nav-icon">
            &lt;
          </a>
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <a href="/products/finance">Finance</a>
            </li>
            <li className="breadcrumb-item bc-active">
              <a href="#">My Investment</a>
            </li>
          </ul>
        </div>
        <div className={styles.investmentContainer}>
          <div className={styles.investmentLeft}>
            <div className={styles.totalAmntDiv}>
              <p className={styles.totalAmntText}>Total Amount</p>
              <h4 className={styles.totalAmntVal}>
                ₹
                {RetirementResponse?.corpusAmount
                  ? RetirementResponse?.corpusAmount
                  : "----"}
              </h4>
            </div>

            <div className={styles.investmentChart}>
              {/* chart */}
              <div
                style={{ width: "221px", height: "221px", margin: "30px auto" }}
              >
                {fundList && fundList.length > 0 ? (
                  <DoughnutChart chartData={RetirementResponse?.recommendedAllocation} />
                ) : (
                  <DoughnutChart chartData={""} />
                )}
              </div>

              <ul className={styles.fundsList}>
                {RetirementResponse?.recommendedAllocation?.length > 0 ? (
                  RetirementResponse.recommendedAllocation.map(
                    (fund, index) => (
                      <li className={styles.fundsItems} key={index}>
                        <span
                          className={styles.fundsColor}
                          style={{
                            borderLeft: `8px solid ${
                              colors[index % colors.length]
                            }`,
                          }}
                        />
                        <p className={styles.fundName}>{fund?.assetType}</p>
                        <p className={styles.fundShare}>
                          {fund?.allocationPercentage}%
                        </p>
                      </li>
                    )
                  )
                ) : (
                  <div className={styles.fundItemsEmp}>
                    Looks like you haven't added anything here yet <br />
                    <a onClick={() => setIsAddFundModalOpen(true)}>
                      Add Investments
                    </a>
                  </div>
                )}
              </ul>
            </div>
          </div>

          <div className={styles.investmentRight}>
            <div className={styles.investmentTp}>
              <h4 className={styles.fundAllocationTtl}>Fund Allocation</h4>
              {fundList.length > 0 && (
                <button
                  className={styles.addMoreBtn}
                  onClick={() => setIsAddFundModalOpen(true)}
                >
                  <span className={styles.plusIc}>+</span>Add More
                </button>
              )}
            </div>

            <ul className={styles.fundAllocationList}>
              {fundList && fundList.length > 0 ? (
                RetirementResponse?.recommendedPortfolio.map((item, index) => (
                  <li className={styles.fundAllocationItem} key={index}>
                    <div className={styles.fundAllocationName}>
                      <p className={styles.fundAllName}>
                        {item?.schemeName || item?.fundName}
                      </p>
                    </div>
                    <div>
                      <p className={styles.fundAmnt}>
                        ₹{item?.aum || item?.allocationAmount}
                      </p>
                      <p className={styles.fundRoi}>
                        ROI <span>{item?.["Average Return"]}%</span>
                      </p>
                    </div>
                  </li>
                ))
              ) : (
                <div className={styles.investmentEmp}>
                  <img src={"/images/money_bag_mob.svg"} alt="no data" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, culpa enim? Quo sapiente sunt veritatis quidem
                    porro saepe, a nam.
                  </p>
                  <button
                    className={styles.addMoreBtn}
                    onClick={() => setIsAddFundModalOpen(true)}
                  >
                    <span className={styles.plusIc}>+</span>Add More
                  </button>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
