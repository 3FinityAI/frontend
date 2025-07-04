import { useState } from "react";
import DoughnutChart from "./DoughnutChart";
import LineChartModal from "./LineChartModal";
import { RetirementResponse } from "../../constants/constants";
import AddFundModal from "./AddFundModal";
import FundModal from "./FundModal";

export default function RetirementPlanningResults({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFundOpen, setIsFundOpen] = useState(false);

  const OpenLineChart = () => {
    setIsOpen(true);
  };
  const closeLineChart = () => {
    setIsOpen(false);
  };

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
      {isOpen && <LineChartModal closeLineChart={closeLineChart} />}
      {isFundOpen && <FundModal setIsFundOpen={setIsFundOpen} />}
      <div className="dashboard-right">
        <div className="breadcrumb">
          <a href="/products" className="mob-nav-icon">
            &lt;
          </a>
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <a href="#">Finance</a>
            </li>
            <li className="breadcrumb-item ">
              <a href="/products/finance">Retirement Planning</a>
            </li>
            <li className="breadcrumb-item bc-active">
              <a href="#">Results</a>
            </li>
          </ul>
        </div>

        <div className="results-container">
          <div className="results-top">
            <div className="results-top-left">
              <div className="corpus-req">
                <p className="corpus-ttl">Corpus Required</p>
                <h4 className="corpus-amount">
                  ₹{RetirementResponse?.corpusAmount}
                </h4>
              </div>
              <div className="future-goal">
                <div className="fut-inc">
                  <p className="fut-inc-ttl">Future Income</p>
                  <h4 className="fut-inc-amount">
                    ₹{RetirementResponse?.futureMonthlyIncome}
                  </h4>
                </div>
                <div className="time-goal">
                  <p className="time-goal-ttl">Time to goal</p>
                  <h4 className="ime-goal-val">
                    {RetirementResponse?.timeInYear}yrs
                  </h4>
                </div>
              </div>
            </div>

            <div className="results-top-right">
              {/* chart */}
              <div className="chart-wrapper">
                <DoughnutChart
                  chartData={RetirementResponse.recommendedAllocation}
                />
              </div>
              <ul className="funds-list">
                {RetirementResponse &&
                  RetirementResponse.recommendedAllocation &&
                  RetirementResponse.recommendedAllocation.map(
                    (fund, index) => (
                      <li className="funds-items" key={index}>
                        <span
                          className="funds-color"
                          style={{
                            borderLeft: `8px solid ${
                              colors[index % colors.length]
                            }`,
                          }}
                        />
                        <p className="fund-name">{fund?.assetType}</p>
                        <p className="fund-share">
                          {fund?.allocationPercentage}
                        </p>
                      </li>
                    )
                  )}

                {/* <li className="funds-items">
                                    <p className="fund-name">Future Income</p>
                                    <p className="fund-share">30%</p>
                                </li>
                                <li className="funds-items">
                                    <p className="fund-name">Future Income</p>
                                    <p className="fund-share">30%</p>
                                </li>
                                <li className="funds-items">
                                    <p className="fund-name">Future Income</p>
                                    <p className="fund-share">30%</p>
                                </li>
                                <li className="funds-items">
                                    <p className="fund-name">Future Income</p>
                                    <p className="fund-share">30%</p>
                                </li> */}
              </ul>
            </div>
          </div>

          <div className="results-bottom">
            <div className="fund-allocation-ttl">Fund Allocation</div>
            {/* <h4 className="fund-allocation-ttl">Fund Allocation</h4> */}
            <ul className="fund-allocation-list">
              <li className="fund-allocation-item">
                <input
                  type="radio"
                  name="fund-accordion"
                  id="fund-accordion1"
                />
                <label
                  htmlFor="fund-accordion1"
                  className="fund-accordion-label"
                >
                  <div className="fund-allocation-name">
                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                    <p className="fund-all-plan">
                      Direct Plan -Growth
                      <span className="fund-all-info" onClick={OpenLineChart}>
                        i
                      </span>
                    </p>
                  </div>
                  <div className="fund-allo-amnt-share">
                    <div className="fund-all-amnt-l">
                      <p className="fund-amnt">₹31,245</p>
                      <p className="fund-roi">
                        ROI <span>30%</span>
                      </p>
                    </div>
                    <div className="fund-all-amnt-r">
                      <button className="add-fund-btn" onClick={() => setIsFundOpen(true)}>+</button>
                    </div>
                  </div>
                </label>
                <div className="fund-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae nam veniam animi dolore dolorum ipsam aperiam
                    nobis voluptatum repellat consequatur.
                  </p>
                </div>
              </li>
              <li className="fund-allocation-item">
                <input
                  type="radio"
                  name="fund-accordion"
                  id="fund-accordion2"
                />
                <label
                  htmlFor="fund-accordion2"
                  className="fund-accordion-label"
                >
                  <div className="fund-allocation-name">
                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                    <p className="fund-all-plan">
                      Direct Plan -Growth
                      <span className="fund-all-info" onClick={OpenLineChart}>
                        i
                      </span>
                    </p>
                  </div>
                  <div className="fund-allo-amnt-share">
                    <div className="fund-all-amnt-l">
                      <p className="fund-amnt">₹31,245</p>
                      <p className="fund-roi">
                        ROI <span>30%</span>
                      </p>
                    </div>
                    <div className="fund-all-amnt-r">
                      <button className="add-fund-btn" onClick={() => setIsFundOpen(true)}>+</button>
                    </div>
                  </div>
                </label>
                <div className="fund-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae nam veniam animi dolore dolorum ipsam aperiam
                    nobis voluptatum repellat consequatur.
                  </p>
                </div>
              </li>
              <li className="fund-allocation-item">
                <input
                  type="radio"
                  name="fund-accordion"
                  id="fund-accordion3"
                />
                <label
                  htmlFor="fund-accordion3"
                  className="fund-accordion-label"
                >
                  <div className="fund-allocation-name">
                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                    <p className="fund-all-plan">
                      Direct Plan -Growth
                      <span className="fund-all-info" onClick={OpenLineChart}>
                        i
                      </span>
                    </p>
                  </div>
                  <div className="fund-allo-amnt-share">
                    <div className="fund-all-amnt-l">
                      <p className="fund-amnt">₹31,245</p>
                      <p className="fund-roi">
                        ROI <span>30%</span>
                      </p>
                    </div>
                    <div className="fund-all-amnt-r">
                      <button className="add-fund-btn" onClick={() => setIsFundOpen(true)}>+</button>
                    </div>
                  </div>
                </label>
                <div className="fund-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae nam veniam animi dolore dolorum ipsam aperiam
                    nobis voluptatum repellat consequatur.
                  </p>
                </div>
              </li>
              <li className="fund-allocation-item">
                <input
                  type="radio"
                  name="fund-accordion"
                  id="fund-accordion4"
                />
                <label
                  htmlFor="fund-accordion4"
                  className="fund-accordion-label"
                >
                  <div className="fund-allocation-name">
                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                    <p className="fund-all-plan">
                      Direct Plan -Growth
                      <span className="fund-all-info" onClick={OpenLineChart}>
                        i
                      </span>
                    </p>
                  </div>
                  <div className="fund-allo-amnt-share">
                    <div className="fund-all-amnt-l">
                      <p className="fund-amnt">₹31,245</p>
                      <p className="fund-roi">
                        ROI <span>30%</span>
                      </p>
                    </div>
                    <div className="fund-all-amnt-r">
                      <button className="add-fund-btn" onClick={() => setIsFundOpen(true)}>+</button>
                    </div>
                  </div>
                </label>
                <div className="fund-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae nam veniam animi dolore dolorum ipsam aperiam
                    nobis voluptatum repellat consequatur.
                  </p>
                </div>
              </li>
              <li className="fund-allocation-item">
                <input
                  type="radio"
                  name="fund-accordion"
                  id="fund-accordion5"
                />
                <label
                  htmlFor="fund-accordion5"
                  className="fund-accordion-label"
                >
                  <div className="fund-allocation-name">
                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                    <p className="fund-all-plan">
                      Direct Plan -Growth
                      <span className="fund-all-info" onClick={OpenLineChart}>
                        i
                      </span>
                    </p>
                  </div>
                  <div className="fund-allo-amnt-share">
                    <div className="fund-all-amnt-l">
                      <p className="fund-amnt">₹31,245</p>
                      <p className="fund-roi">
                        ROI <span>30%</span>
                      </p>
                    </div>
                    <div className="fund-all-amnt-r">
                      <button className="add-fund-btn" onClick={() => setIsFundOpen(true)}>+</button>
                    </div>
                  </div>
                </label>
                <div className="fund-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae nam veniam animi dolore dolorum ipsam aperiam
                    nobis voluptatum repellat consequatur.
                  </p>
                </div>
              </li>
              <li className="fund-allocation-item">
                <input
                  type="radio"
                  name="fund-accordion"
                  id="fund-accordion6"
                />
                <label
                  htmlFor="fund-accordion6"
                  className="fund-accordion-label"
                >
                  <div className="fund-allocation-name">
                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                    <p className="fund-all-plan">
                      Direct Plan -Growth
                      <span className="fund-all-info" onClick={OpenLineChart}>
                        i
                      </span>
                    </p>
                  </div>
                  <div className="fund-allo-amnt-share">
                    <div className="fund-all-amnt-l">
                      <p className="fund-amnt">₹31,245</p>
                      <p className="fund-roi">
                        ROI <span>30%</span>
                      </p>
                    </div>
                    <div className="fund-all-amnt-r">
                      <button className="add-fund-btn" onClick={() => setIsFundOpen(true)}>+</button>
                    </div>
                  </div>
                </label>
                <div className="fund-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae nam veniam animi dolore dolorum ipsam aperiam
                    nobis voluptatum repellat consequatur.
                  </p>
                </div>
              </li>
              <li className="fund-allocation-item">
                <input
                  type="radio"
                  name="fund-accordion"
                  id="fund-accordion7"
                />
                <label
                  htmlFor="fund-accordion7"
                  className="fund-accordion-label"
                >
                  <div className="fund-allocation-name">
                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                    <p className="fund-all-plan">
                      Direct Plan -Growth
                      <span className="fund-all-info" onClick={OpenLineChart}>
                        i
                      </span>
                    </p>
                  </div>
                  <div className="fund-allo-amnt-share">
                    <div className="fund-all-amnt-l">
                      <p className="fund-amnt">₹31,245</p>
                      <p className="fund-roi">
                        ROI <span>30%</span>
                      </p>
                    </div>
                    <div className="fund-all-amnt-r">
                      <button className="add-fund-btn" onClick={() => setIsFundOpen(true)}>+</button>
                    </div>
                  </div>
                </label>
                <div className="fund-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae nam veniam animi dolore dolorum ipsam aperiam
                    nobis voluptatum repellat consequatur.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }

        .dashboard-right {
          width: 80%;
          height: 100vh;
          background-color: #010612;
          overflow-y: auto;
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
      `}</style>
      <style jsx>{`
        .results-container {
          margin: 20px auto;
          padding: 20px;
        }
        .results-top {
          display: flex;
          justify-content: space-between;
          margin: 20px 20px 40px;
          padding: 20px;
          border: 1px solid rgb(255 255 255 / 25%);
          border-radius: 8px;
        }
        .results-top-left {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        .corpus-req {
          background-color: rgb(255 255 255 / 5%);
          border-radius: 16px;
          padding: 20px;
        }
        .corpus-ttl {
          font-size: 16px;
          color: #fff;
        }
        .corpus-amount {
          font-size: 42px;
          font-weight: bold;
          color: #fff;
        }
        .future-goal {
          display: flex;
          justify-content: flex-start;
          gap: 60px;
          padding: 20px;
        }
        .fut-inc-ttl,
        .time-goal-ttl {
          margin-block: 14px;
          color: #fff;
        }
        .fut-inc-amount,
        .ime-goal-val {
          font-size: 26px;
          font-weight: bold;
          color: #fff;
        }
        .results-top-right {
          display: flex;
          flex: 1;
          justify-content: space-around;
        }
          .chart-wrapper {width: 221px, height: 221px}
        .funds-list {
          list-style-type: none;
          display: block;
          position: relative;
          overflow: auto;
          height: 258px;
        }
        .funds-items {
          position: relative;
          margin-bottom: 12px;
          padding-left: 16px
        }
        //   .funds-items::before{content: " ";
        //     position: absolute;
        //     top: 10px;
        //     left: -19px;
        //     border-radius: 8px;display: block;
        //     height: 30px;}

            .funds-color {
  position: absolute;
  left: 0;
  top: 10px;
  height: 30px;
  border-radius: 8px;
}

        .fund-name {
          font-size: 16px;
          color: rgb(255 255 255 / 80%);
        }
        .fund-share {
          font-size: 16px;
          font-weight: bold;
          color: #fff;
        }

        .results-bottom {
          margin: 20px;
          border: 1px solid rgb(255 255 255 / 25%);
          border-radius: 8px;
        }
        .fund-allocation-ttl {
          font-size: 18px;
          padding: 20px;
          background: #171c28;
          color: #fff;
          border-radius: 8px 8px 0 0;
        }
        .fund-allocation-list {
          list-style-type: none;
          padding: 20px 35px;
          height: 420px;
          overflow: auto;
        }
        .fund-allocation-item {
          margin: 20px 0;
          position: relative;
        }
        .fund-allocation-item::before {
          content: "";
          position: absolute;
          top: 10px;
          left: -30px;
          border-radius: 100%;
          display: block;
          width: 20px;
          height: 20px;
          background: #e1be55;
        }
        .fund-all-name,
        .fund-all-plan,
        .fund-roi {
          font-size: 16px;
          font-weight: 500;
          color: #fff;
        }
        .fund-all-info {
          font-size: 18px;
          font-weight: bold;
          font-family: auto;
          margin-left: 8px;
          font-style: italic;
          padding: 0 5px;
          background: #010612;
          border-radius: 8px;
          cursor: pointer;
        }
          .fund-allo-amnt-share {display: flex; align-items: center; gap: 15px}
        .fund-amnt {
          font-size: 16px;
          font-weight: bold;
          color: #fff;
        }
        .fund-roi span {
          font-weight: bold;
        }
           .add-fund-btn {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 5px 12px;
                    border-radius: 100%;
                    cursor: pointer;
                }

        input[type="radio"] {
          display: none;
        }

        .fund-accordion-label {
          display: flex;
          justify-content: space-between;
          margin: 20px 0;
          position: relative;
          width: 100%;
          // position: absolute;
          // top: 0;
          // left: 0;
          // right: 0;
          // bottom: 0;
          // background: rgba(255, 255, 255, 0.1);
          // border-radius: 8px;
          cursor: pointer;
        }
        // .fund-accordion-label:after {
        //     content: "+";
        //     position: absolute;
        //     top: 50%;
        //     left: 50%;
        //     transform: translate(-50%, -50%);
        //     width: 20px;
        //     height: 20px;
        //     background: #E1BE55;
        //     border-radius: 50%;
        //     transition: background 0.3s ease;
        // }
        .fund-accordion-label:hover {
          // background: rgba(255, 255, 255, 0.2);
        }
        .fund-content {
          width: 96%;
          padding: 15px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 8px;
        }
        .fund-content::before {
          content: "";
          position: absolute;
          top: 51px;
          left: 16px;

          display: block;
          width: 20px;
          height: 20px;
          z-index: 1;
          border-bottom: 20px solid rgba(255, 255, 255, 0.2);
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
        }
        .fund-content p {
          color: #fff;
          font-size: 14px;
          line-height: 1.5;
        }
        //      .fund-allocation-item::before + input[type="radio"]:checked {
        //     content: "-";
        //     background: #E1BE55;

        // }
        .fund-content {
          display: none;
        }
        input[type="radio"]:checked + .fund-accordion-label + .fund-content {
          display: block;
        }
      `}</style>
      <style jsx>{`
      @media (max-width:769px){
      .dashboard-right {width: 100%; padding: 20px;}
      .breadcrumb {display: flex; align-items: center;}
      .breadcrumb-item {display: none;}
      .breadcrumb-item.bc-active {display: block;}
      .mob-nav-icon {display: block;font-size: 32px; color: #fff; margin: 36px 120px 0 0;}
      .results-bottom {margin: 0}
      .fund-allocation-list {padding: 0 10px 0 35px;}
      .results-container {padding: 0;}
      .results-top {flex-direction: column; margin: 20px 0 20px 0; padding: 0; border: none;}
      .results-top-right {flex-direction: column;}
      .funds-list {overflow: scroll;display: flex;flex-wrap: nowrap;gap: 8px;margin: 18px;height: auto;}
      .fund-name{text-wrap: nowrap;}
      .chart-wrapper {margin: 36px; auto;}
      .future-goal {justify-content: space-around;-webkit-overflow-scrolling: touch;scrollbar-width: none; }
      .corpus-req {display: flex;justify-content: space-between;padding: 20px;align-items: center;}
      .corpus-ttl {font-size: 14px;}
      .corpus-amount {font-size: 22px;}
     
      `}</style>
    </>
  );
}
