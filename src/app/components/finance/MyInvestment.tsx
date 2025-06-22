import React, { useState } from "react";
import DoughnutChart from "./DoughnutChart";
import AddFundModal from "./AddFundModal";
export default function MyInvestment() {

    const [isAddFundModalOpen, setIsAddFundModalOpen] = useState(false);

    return (
        <>
            {isAddFundModalOpen && <AddFundModal setIsAddFundModalOpen={setIsAddFundModalOpen} />}
            <div className="dashboard-right">
                <div className="breadcrumb">
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="/products/finance">Finance</a></li>
                        <li className="breadcrumb-item bc-active"><a href="#">My Investment</a></li>
                    </ul>
                </div>
                <div className="investment-container">
                    <div className="investment-left">
                        <div className="total-amnt-div">
                            <p className="total-amnt-text">Total Amount</p>
                            <h4 className="total-amnt-val">₹21,34,40,000</h4>
                        </div>
                         <div className="investment-chart">
                            {/* chart */}
                            <DoughnutChart />
                            <ul className="funds-list">
                                <li className="funds-items">
                                    <p className="fund-name">Future Income</p>
                                    <p className="fund-share">30%</p>
                                </li>
                                <li className="funds-items">
                                    <p className="fund-name">SmallCap</p>
                                    <p className="fund-share">30%</p>
                                </li>
                                <li className="funds-items">
                                    <p className="fund-name">MidCap</p>
                                    <p className="fund-share">30%</p>
                                </li>
                                <li className="funds-items">
                                    <p className="fund-name">MidCap</p>
                                    <p className="fund-share">30%</p>
                                </li>
                                <li className="funds-items">
                                    <p className="fund-name">Future Income</p>
                                    <p className="fund-share">30%</p>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="investment-right">
                        <div className="investment-tp">
                            <h4 className="fund-allocation-ttl">Fund Allocation</h4>
                            <button className="add-more-btn" onClick={() => setIsAddFundModalOpen(true)}>Add More</button>
                        </div>
                        <ul className="fund-allocation-list">
                            
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth</p>
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth</p>
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth</p>
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth</p>
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth</p>
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth</p>
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth</p>
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-</p>
                                    <p className="fund-all-plan">Direct Plan -Growth</p>
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx>{`
            
                .dashboard-right {
                width: 80%;
                padding: 20px;
                background-color: #fff;
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
                color: #bbb;
                font-size: 28px;
                font-weight: 500;
            }
            .breadcrumb-item.bc-active a {
                color: #000;
            }
                .breadcrumb-item:not(:last-child)::after {
                content: " > ";
                color: #666;
                font-size: 28px;
                font-weight: 500;
            }
               
                
        `}</style>
        <style jsx>{`
        .investment-container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 20px;
            gap: 100px;
            }
            .investment-left {
           
            }
        .total-amnt-div {
            width: 100%;
            padding: 12px;
            background-color: #f2f2f2;
            border-radius: 8px;
            }
        .total-amnt-text {font-size: 16px; margin: 0;}
        .total-amnt-val {font-size: 42px; font-weight: bold;margin: 0;}

        .investment-chart {display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: 100%; 
  height: 321px;
  padding: 12px;}
        .funds-list {width: 100%; text-align:center; list-style-type: none; display: inline-block; position: relative; padding: 0; margin: 0;}
        .funds-items {width: auto;position: relative; display: inline-block; padding: 10px; margin: 0 10px;  }
    //     .funds-items::before{content: " ";
    // border-left: 8px solid red;
    // position: absolute;
    // top: 10px;
    // left: -19px;
    // border-radius: 8px;display: block;
    // height: 30px;}
        .fund-name {font-size: 16px; margin: 0;}
        .fund-share {font-size: 16px; font-weight: bold; margin: 0;}
        `}</style>
        <style jsx>{`
        .investment-right {
            width: 100%;
            // padding: 20px;
            background-color: #fff;
            border-radius: 14px;
            border: 1px solid #ddd;
            }
        .investment-tp {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            border-radius: 14px 14px 0px 0px; 
            
            background: #f2f2f2;
        }
        .fund-allocation-ttl {font-size: 18px; padding: 10px 0; margin: 0;}
        .add-more-btn {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 24px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            transition: background-color 0.3s ease;
            }
        .fund-allocation-list {list-style-type: none;padding: 20px; height: 420px; overflow: auto;}
        .fund-allocation-item {display: flex;justify-content: space-between; margin: 20px 15px; position: relative;}
        .fund-allocation-item::before{content: " ";
    position: absolute;
    top: 10px;
    left: -20px;
    border-radius: 100%;
    display: block;
    width: 11px;
    height: 11px;
    background: #E1BE55;
    }
        .fund-all-name, .fund-all-plan, .fund-roi {font-size: 16px;font-weight: 500;}
        .fund-amnt{font-size: 16px; font-weight: bold;}
        .fund-roi span {font-weight: bold;}
        `}</style>
            
       
        </>
    );
}