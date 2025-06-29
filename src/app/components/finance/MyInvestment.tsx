import React, { useState } from "react";
import DoughnutChart from "./DoughnutChart";
import AddFundModal from "./AddFundModal";
import { RetirementResponse } from "../../../../constants"

export default function MyInvestment() {

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
            {isAddFundModalOpen && <AddFundModal setIsAddFundModalOpen={setIsAddFundModalOpen} />}
            <div className="dashboard-right">
                <div className="breadcrumb">
                    <a href="/products/finance" className="mob-nav-icon">&lt;</a>
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="/products/finance">Finance</a></li>
                        <li className="breadcrumb-item bc-active"><a href="#">My Investment</a></li>
                    </ul>
                </div>
                <div className="investment-container">
                    <div className="investment-left">
                        <div className="total-amnt-div">
                            <p className="total-amnt-text">Total Amount</p>
                            <h4 className="total-amnt-val">₹{RetirementResponse?.corpusAmount}</h4>
                        </div>
                         <div className="investment-chart">
                            {/* chart */}
                            <div style={{ width: '221px', height: '221px', margin: '30px auto' }}>
                                <DoughnutChart chartData={RetirementResponse?.recommendedAllocation}/>
                            </div>
                            <ul className="funds-list">
                                {RetirementResponse?.recommendedAllocation.map((fund, index) => (
                                    <li className="funds-items" key={index}>
                                     <span className="funds-color" style={{borderLeft: `8px solid ${colors[index % colors.length]}`}}/>
                                    <p className="fund-name">{fund?.assetType}</p>
                                    <p className="fund-share">{fund?.allocationPercentage}</p>
                                </li>
                                ))}
                                {/* <li className="funds-items">
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

                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="investment-right">
                        <div className="investment-tp">
                            <h4 className="fund-allocation-ttl">Fund Allocation</h4>
                            <button className="add-more-btn" onClick={() => setIsAddFundModalOpen(true)}><span className="plus-ic">+</span>Add More</button>
                        </div>
                        <ul className="fund-allocation-list">
                            
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-Direct Plan -Growth</p>
                                    
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-Direct Plan -Growth</p>
                                    
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-Direct Plan -Growth</p>
                                    
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-Direct Plan -Growth</p>
                                    
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-Direct Plan -Growth</p>
                                    
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-Direct Plan -Growth</p>
                                    
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-Direct Plan -Growth</p>
                                    
                                </div>
                                <div className="fund-allo-amnt-share">
                                    <p className="fund-amnt">₹31,245</p>
                                    <p className="fund-roi">ROI <span>30%</span></p>
                                </div>
                            </li>
                            <li className="fund-allocation-item">
                                <div className="fund-allocation-name">
                                    <p className="fund-all-name">Motilal Oswal Midcap Fund-Direct Plan -Growth</p>
                                    
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
        .investment-container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            margin-inline: 50px;
            padding: 20px;
            gap: 50px;
            }
            .investment-left {
            width: 369px;
            display: flex;
            flex-direction: column;
            
           
            }
        .total-amnt-div {
            width: 100%;
            padding: 12px;
            background-color: #010612;
            border-radius: 8px;
            }
        .total-amnt-text {font-size: 16px; margin: 0; color: #fff;}
        .total-amnt-val {font-size: 42px; font-weight: bold;margin: 0; color: #fff;}

        .investment-chart {display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; width: 100%; 
  height: 221px;
  padding: 12px;}
        .funds-list {width: 100%; text-align:center; list-style-type: none; display: inline-block; position: relative; padding: 0; margin: 0;}
        .funds-items {width: auto;position: relative; display: inline-block; padding-inline: 12px; margin: 10px;  }
    // .funds-items::before{content: " ";
    // border-left: 11px solid var(--fund-color, red);;
    // position: absolute;
    // top: 8px;
    // left: -8px;
    // border-radius: 8px;display: block;
    // height: 28px;}
     .funds-color {
  position: absolute;
  left: 0;
  top: 5px;
  height: 35px;
  border-radius: 8px;
}
        .fund-name {font-size: 14px;color: #fff;}
        .fund-share {font-size: 14px; font-weight: bold; color: #fff;}
        `}</style>
        <style jsx>{`
        .investment-right {
        flex: 1;
            
            background-color: #010612;
            border-radius: 14px;
            border: 1px solid #ddd;
            }
        .investment-tp {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            border-radius: 14px 14px 0px 0px; 
            
            background: #171C28;
        }
        .fund-allocation-ttl {font-size: 18px; padding: 10px 0; margin: 0; color: #fff;}
        .add-more-btn {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px 10px 40px;
            border-radius: 24px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            transition: background-color 0.3s ease;
            position: relative;
            }
            .plus-ic {
                content: " ";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: inline-block;
                padding: 2px;
                transition: transform 0.3s ease;
                 color: #000;
                font-size: 14px;
                font-weight: bold;
                border-radius: 100%;
                background: #fff;
                width: 24px;
                content: " ";
                position: absolute;
                top: 21px;
                left: 20px;
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
    .fund-allocation-name {width: 45%;}
        .fund-all-name, .fund-all-plan, .fund-roi {font-size: 16px;font-weight: 500;color: #fff;}
        .fund-amnt{font-size: 16px; font-weight: bold;color: #fff;}
        .fund-roi span {font-weight: bold;color: #fff;}
        `}</style>

        <style jsx>{`
      @media (max-width:769px){
      .dashboard-right {width: 100%; padding: 20px;}
      .breadcrumb {display: flex; align-items: center;}
      .breadcrumb-item {display: none;}
      .breadcrumb-item.bc-active {display: block;}
      .mob-nav-icon {display: block;font-size: 32px; color: #fff; margin: 36px 80px 0 0;}
      .investment-container {flex-direction: column;}
      .investment-chart {height: auto;}
      .investment-container {margin: 0; padding: 0;}
      .total-amnt-div {text-align: center;}
      .fund-allocation-list {padding: 14px;}
      .fund-allocation-name {width: 70%;}
      .investment-left {width: 100%;}
      .funds-items {margin: 0 12px 12px 0;}
     
      `}</style>
            
       
        </>
    );
}