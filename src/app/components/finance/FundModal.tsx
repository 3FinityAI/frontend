export default function FundModal({setIsFundOpen}) {

    const closeModal = ()=> {
        setIsFundOpen(false);
    }
    return (
        <div className="overlay">
            <div className="fund-modal">
                <div className="fund-name">
                    <p>Fund Name </p>
                    <span className="close-btn" onClick={closeModal}>X</span>
                </div>
                <div className="fund-form">
                    <div className="form-group">
                        <label htmlFor ="investment-amount">Investment Amount</label>
                        <input type="number" id="investment-amount" placeholder="Enter amount" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="investment-duration">Years</label>
                        <input type="range" name="investment-duration" id="investment-duration" />
                        <span className="duration-value">5 yrs</span>
                    </div >
                    <button className="add-fund">Add</button>
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
                z-index: 1001;
            }
            .fund-modal {
                background: #F2F2F7;
                padding: 20px;
                border-radius: 10px;
                width: 375px;
                height: 386px;
            }
            .fund-name {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }
            .close-btn {
                cursor: pointer;
            }
            .fund-form {
                display: flex;
                flex-direction: column;
            }
            .form-group {
            width: 100%;
                margin-bottom: 15px;
            }
                .form-group label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                }
            .form-group input[type="number"] {
                width: 348px;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
                .form-group input[type="range"] {
                width: 75%;
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
                .duration-value {
                    margin-left: 8px;
                    font-size: 14px;
                    color: #000;
    padding: 10px 15px;
    font-weight: bold;
    background: #fff;
    border-radius: 12px;
    position: relative;
    bottom: 25px;
                }
            .add-fund {
                background-color: #007BFF;
                color: white;
                padding: 10px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
            }
                .add-fund:hover {
                    background-color: #0056b3;
                }
            @media (max-width: 768px) {
                .fund-modal {
                    width: 90%;
                    height: auto;
                }
                    .overlay {
                    padding: 20px;
                }
            }

            `}</style>
        </div>
    );
}