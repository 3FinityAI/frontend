import React, {useState} from "react";
import FundModal from "./FundModal";

export default function AddFundModal({setIsAddFundModalOpen }) {
    const [isFundOpen, setIsFundOpen] = useState(false);
    const closeModal = ()=> {
        setIsAddFundModalOpen(false);
    }
    return (
        <>
            {isFundOpen && <FundModal setIsFundOpen={setIsFundOpen} />}
            <div className="overlay">
                <div className="add-fund-modal">
                     <span className="close-btn" onClick={closeModal}>X</span>
                    <div className="search-box">
                        <input type="search" name="search" id="search" placeholder="Search..." />
                    </div>
                    <div className="trending-funds-box">
                        <h3>Trending Funds</h3>
                        <ul className="fund-list">
                            <li className="fund-item">
                                <div className="fund-item-top">
                                    <div className="fund-properties">
                                        <ul>
                                            <li className="fund-property">Equity</li>
                                            <li className="fund-property">Large Cap</li>
                                            <li className="fund-property">Growth</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="fund-item-bottom">
                                    <div className="fund-name">Fund A</div>
                                    <div className="add-btn" onClick={() => setIsFundOpen(true)}>
                                        <button className="add-fund-btn">Add</button>
                                    </div>
                                </div>
                            </li>
                            <li className="fund-item">
                                <div className="fund-item-top">
                                    <div className="fund-properties">
                                        <ul>
                                            <li className="fund-property">Equity</li>
                                            <li className="fund-property">Large Cap</li>
                                            <li className="fund-property">Growth</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="fund-item-bottom">
                                    <div className="fund-name">Fund A</div>
                                    <div className="add-btn">
                                        <button className="add-fund-btn">Add</button>
                                    </div>
                                </div>
                            </li>
                            <li className="fund-item">
                                <div className="fund-item-top">
                                    <div className="fund-properties">
                                        <ul>
                                            <li className="fund-property">Equity</li>
                                            <li className="fund-property">Large Cap</li>
                                            <li className="fund-property">Growth</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="fund-item-bottom">
                                    <div className="fund-name">Fund A</div>
                                    <div className="add-btn">
                                        <button className="add-fund-btn">Add</button>
                                    </div>
                                </div>
                            </li>
                            <li className="fund-item">
                                <div className="fund-item-top">
                                    <div className="fund-properties">
                                        <ul>
                                            <li className="fund-property">Equity</li>
                                            <li className="fund-property">Large Cap</li>
                                            <li className="fund-property">Growth</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="fund-item-bottom">
                                    <div className="fund-name">Fund A</div>
                                    <div className="add-btn">
                                        <button className="add-fund-btn">Add</button>
                                    </div>
                                </div>
                            </li>
                            <li className="fund-item">
                                <div className="fund-item-top">
                                    <div className="fund-properties">
                                        <ul>
                                            <li className="fund-property">Equity</li>
                                            <li className="fund-property">Large Cap</li>
                                            <li className="fund-property">Growth</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="fund-item-bottom">
                                    <div className="fund-name">Fund A</div>
                                    <div className="add-btn">
                                        <button className="add-fund-btn">Add</button>
                                    </div>
                                </div>
                            </li>
                            <li className="fund-item">
                                <div className="fund-item-top">
                                    <div className="fund-properties">
                                        <ul>
                                            <li className="fund-property">Equity</li>
                                            <li className="fund-property">Large Cap</li>
                                            <li className="fund-property">Growth</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="fund-item-bottom">
                                    <div className="fund-name">Fund A</div>
                                    <div className="add-btn">
                                        <button className="add-fund-btn">Add</button>
                                    </div>
                                </div>
                            </li>
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
                    background: #F2F2F7;
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
                    position: relative;
                    /* display: block; */
                    /* right: 64%; */
                    top: -10px;
                    left: 365px;
                    font-weight: bold;
                }
                .search-box {
                    margin-bottom: 20px;
                    
                }
                .search-box input[type="search"] {
                    width: 100%;
                    padding: 10px;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                    background: #E7E7EB
                }
                .trending-funds-box {
                    padding: 15px;
                    border-radius: 8px;
                    width: 332px;
                    height: 356px;
                    overflow-y: auto;
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
                    color: #333;
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
            `}</style>
            </div>
        </>
    );
}