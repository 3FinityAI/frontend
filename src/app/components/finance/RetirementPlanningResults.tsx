import { useState } from "react";
import DoughnutChart from "./DoughnutChart";
import LineChartModal from "./LineChartModal";

export default function RetirementPlanningResults({ }) {

    const [isOpen, setIsOpen] = useState(false);

    const OpenLineChart = ()=> {
        setIsOpen(true);
    }
    const closeLineChart = ()=> {
        setIsOpen(false);
    }

    return (
        <>
        {isOpen && <LineChartModal closeLineChart={closeLineChart}/>}
            <div className="dashboard-right">
                <div className="breadcrumb">
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="#">Finance</a></li>
                        <li className="breadcrumb-item "><a href="/products/finance">Retirement Planning</a></li>
                        <li className="breadcrumb-item bc-active"><a href="#">Results</a></li>
                    </ul>
                </div>

                <div className="results-container">
                    <div className="results-top">
                        <div className="results-top-left">
                            <div className="corpus-req">
                                <p className="corpus-ttl">Corpus Required</p>
                                <h4 className="corpus-amount">₹21,34,40,000</h4>
                            </div>
                            <div className="future-goal">
                                <div className="fut-inc">
                                    <p className="fut-inc-ttl">Future Income</p>
                                    <h4 className="fut-inc-amount">₹34,40,000</h4>
                                </div>
                                <div className="time-goal">
                                    <p className="time-goal-ttl">Time to goal</p>
                                    <h4 className="ime-goal-val">29yrs</h4>
                                </div>
                            </div>
                        </div>
                        
                        <div className="results-top-right">
                            {/* chart */}
                            <DoughnutChart />
                            <ul className="funds-list">
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
                                </li>
                                <li className="funds-items">
                                    <p className="fund-name">Future Income</p>
                                    <p className="fund-share">30%</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="results-bottom">
                        <div className="fund-allocation-ttl">
                            Fund Allocation
                        </div>
                        {/* <h4 className="fund-allocation-ttl">Fund Allocation</h4> */}
                        <ul className="fund-allocation-list">
                            
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth<span className="fund-all-info" onClick={OpenLineChart}>i</span></p>    
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth<span className="fund-all-info">i</span></p>
                                   
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth<span className="fund-all-info">i</span></p>
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth<span className="fund-all-info">i</span></p>
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth<span className="fund-all-info">i</span></p>
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth<span className="fund-all-info">i</span></p>
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth<span className="fund-all-info">i</span></p>
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth<span className="fund-all-info">i</span></p>
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
        </div >
            <style jsx>{`
            * {margin: 0; padding: 0;}
            
                .dashboard-right {
                width: 80%;
                height: 100vh;
                padding: 20px;
                background-color: #010612;
                overflow-y: auto;
                
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
        .results-container {margin: 20px auto; padding: 20px;}
        .results-top {display: flex; justify-content: space-between; margin: 20px 20px 40px; padding: 20px; border: 1px solid rgb(255 255 255 / 25%); border-radius: 8px;}
        .results-top-left {display: flex; flex-direction: column; justify-content: space-around;}
        .corpus-req {background-color: rgb(255 255 255 / 5%); border-radius: 16px; padding: 20px;}
        .corpus-ttl {font-size: 16px; color: #fff;}
        .corpus-amount {font-size: 42px; font-weight: bold; color: #fff;}
        .future-goal {display: flex; justify-content: flex-start; gap: 60px; padding: 20px;}
        .fut-inc-ttl, .time-goal-ttl {margin-block: 14px; color: #fff;}
        .fut-inc-amount, .ime-goal-val {font-size: 26px; font-weight: bold;color: #fff;}
        .results-top-right {display: flex; flex:1;
  justify-content: space-around;
  height: 221px;}
        .funds-list {list-style-type: none; display: block; position: relative;}
        .funds-items {width: 138px;position: relative;    margin-bottom: 12px;}
        .funds-items::before{content: " ";
    border-left: 8px solid red;
    position: absolute;
    top: 10px;
    left: -19px;
    border-radius: 8px;display: block;
    height: 30px;}
        .fund-name {font-size: 16px; color: rgb(255 255 255 / 80%);}
        .fund-share {font-size: 16px; font-weight: bold;color: #fff;}

        .results-bottom {margin: 20px;  border: 1px solid rgb(255 255 255 / 25%); border-radius: 8px;}
        .fund-allocation-ttl {font-size: 18px; padding: 20px;background: #171C28; color: #fff; border-radius: 8px 8px 0 0;}
        .fund-allocation-list {list-style-type: none;padding: 20px 35px; height: 420px; overflow: auto;}
        .fund-allocation-item {display: flex;justify-content: space-between; margin: 20px 0; position: relative;}
        .fund-allocation-item::before{content: " ";
    position: absolute;
    top: 10px;
    left: -30px;
    border-radius: 100%;
    display: block;
    width: 20px;
    height: 20px;
    background: #E1BE55;
    }
        .fund-all-name, .fund-all-plan, .fund-roi {font-size: 16px;font-weight: 500; color: #fff;}
        .fund-all-info {
        font-size: 18px;
    font-weight: bold;
    font-family: auto;
    margin-left: 8px;
    font-style: italic;
    padding: 0 5px;
    background: #010612;
    border-radius: 8px;
    cursor: pointer;}
        .fund-amnt{font-size: 16px; font-weight: bold; color: #fff;}
        .fund-roi span {font-weight: bold;}

        `}</style>
        </>
    );
}