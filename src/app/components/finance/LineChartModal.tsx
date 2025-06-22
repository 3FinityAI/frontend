import React, { useState } from "react";
import LineChart from "./LineChart";

export default function LineChartModal({closeLineChart }) {

    const handleClose = ()=> {
        closeLineChart();
    }

    return (
        <>
            <div className="overlay">
                    <span className="close-btn" onClick={handleClose}>X</span>
                    <div className="line-chart-modal">
                        <LineChart />
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
                    .line-chart-modal {
                    background: #F2F2F7;
                    padding: 20px;
                    border-radius: 10px;
                    width: 375px;
                    height: 500px;
                    position: absolute;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    top: 50%;
                    transform: translateY(-50%);
                    left: 50%;
                    transform: translate(-50%, -50%);
                    }
                     .close-btn {
                    position: relative;
                    top: -230px;
                    left: 190px;
                    font-weight: bold;
                    font-size: 20px;
                    z-index: 1;
                    cursor: pointer;
                }
                
            `}</style>
            </div>
        </>
    );
}