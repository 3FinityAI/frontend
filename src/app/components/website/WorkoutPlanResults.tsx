import React, { useState } from "react";
import VideoModal from "./VideoModal";

export default function WorkoutPlanResults({isWorkoutPlan=false, setIsWorkoutPlan}) {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    }
    return (
        <>
            {isOpen && <VideoModal handleClose={handleClose} />}

            <div className="dashboard-right">
                <div className="breadcrumb">
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="#">Fitness</a></li>
                        <li className="breadcrumb-item"><a href="#">Diet Plan</a></li>
                        <li className="breadcrumb-item active"><a href="#">Results</a></li>
                    </ul>
                </div>
                {/* result comp start */}

                <div className="results-container">
                    <div className="days-container">
                        <ul className="days-list">
                            <li className="days-item">
                                <h3><strong>DAY 1</strong><span>Legs</span></h3>
                            </li>
                            <li className="days-item">
                                <h3><strong>DAY 1</strong><span>Legs</span></h3>
                            </li>
                            <li className="days-item">
                                <h3><strong>DAY 1</strong><span>Legs</span></h3>
                            </li>
                            <li className="days-item active">
                                <h3><strong>DAY 1</strong><span>Legs</span></h3>
                            </li>
                        </ul>
                    </div>
                    <div className="days-schedule-container">
                        <div className="day-sch-top">
                            <p className="day-sch">Day 2 Schedule</p>
                            <p className="ex-names">Chest, Shoulders, Triceps</p>
                        </div>
                        <div className="machine-sets">
                            <ul className="sets-list">
                                <li className="sets-item">
                                    <div className="sets-wp">
                                        <div className="set-name-vid">
                                            <p className="set-name">Barbell Bench Press</p>
                                            <p className="set-vid" onClick={handleOpen}><img src={"/images/pl-icon.png"} alt="" className="pl-icon" />Play video</p>
                                        </div>
                                        <div className="set-cnt-rep">
                                            <p className="set-cnt"><strong>3 sets</strong></p>
                                            <p className="set-rep">Reps: <strong>10-12</strong></p>
                                        </div>
                                    </div>
                                    <div className="rest-time">
                                        Rest: <strong>60-90secs</strong>
                                    </div>
                                </li>
                                <li className="sets-item">
                                    <div className="sets-wp">
                                        <div className="set-name-vid">
                                            <p className="set-name">Barbell Bench Press</p>
                                            <p className="set-vid" onClick={handleOpen}><img src={"/images/pl-icon.png"} alt="" className="pl-icon" />Play video</p>
                                        </div>
                                        <div className="set-cnt-rep">
                                            <p className="set-cnt"><strong>3 sets</strong></p>
                                            <p className="set-rep">Reps: <strong>10-12</strong></p>
                                        </div>
                                    </div>
                                    <div className="rest-time">
                                        Rest: <strong>60-90secs</strong>
                                    </div>
                                </li>
                                <li className="sets-item">
                                    <div className="sets-wp">
                                        <div className="set-name-vid">
                                            <p className="set-name">Barbell Bench Press</p>
                                            <p className="set-vid" onClick={handleOpen}><img src={"/images/pl-icon.png"} alt="" className="pl-icon" />Play video</p>
                                        </div>
                                        <div className="set-cnt-rep">
                                            <p className="set-cnt"><strong>3 sets</strong></p>
                                            <p className="set-rep">Reps: <strong>10-12</strong></p>
                                        </div>
                                    </div>
                                    <div className="rest-time">
                                        Rest: <strong>60-90secs</strong>
                                    </div>
                                </li>
                                <li className="sets-item">
                                    <div className="sets-wp">
                                        <div className="set-name-vid">
                                            <p className="set-name">Barbell Bench Press</p>
                                            <p className="set-vid" onClick={handleOpen}><img src={"/images/pl-icon.png"} alt="" className="pl-icon" />Play video</p>
                                        </div>
                                        <div className="set-cnt-rep">
                                            <p className="set-cnt"><strong>3 sets</strong></p>
                                            <p className="set-rep">Reps: <strong>10-12</strong></p>
                                        </div>
                                    </div>
                                    <div className="rest-time">
                                        Rest: <strong>60-90secs</strong>
                                    </div>
                                </li>
                                <li className="sets-item">
                                    <div className="sets-wp">
                                        <div className="set-name-vid">
                                            <p className="set-name">Barbell Bench Press</p>
                                            <p className="set-vid" onClick={handleOpen}><img src={"/images/pl-icon.png"} alt="" className="pl-icon" />Play video</p>
                                        </div>
                                        <div className="set-cnt-rep">
                                            <p className="set-cnt"><strong>3 sets</strong></p>
                                            <p className="set-rep">Reps: <strong>10-12</strong></p>
                                        </div>
                                    </div>
                                    <div className="rest-time">
                                        Rest: <strong>60-90secs</strong>
                                    </div>
                                </li>
                                <li className="sets-item">
                                    <div className="sets-wp">
                                        <div className="set-name-vid">
                                            <p className="set-name">Barbell Bench Press</p>
                                            <p className="set-vid" onClick={handleOpen}><img src={"/images/pl-icon.png"} alt="" className="pl-icon" />Play video</p>
                                        </div>
                                        <div className="set-cnt-rep">
                                            <p className="set-cnt"><strong>3 sets</strong></p>
                                            <p className="set-rep">Reps: <strong>10-12</strong></p>
                                        </div>
                                    </div>
                                    <div className="rest-time">
                                        Rest: <strong>60-90secs</strong>
                                    </div>
                                </li>
                                <li className="sets-item">
                                    <div className="sets-wp">
                                        <div className="set-name-vid">
                                            <p className="set-name">Barbell Bench Press</p>
                                            <p className="set-vid" onClick={handleOpen}><img src={"/images/pl-icon.png"} alt="" className="pl-icon" />Play video</p>
                                        </div>
                                        <div className="set-cnt-rep">
                                            <p className="set-cnt"><strong>3 sets</strong></p>
                                            <p className="set-rep">Reps: <strong>10-12</strong></p>
                                        </div>
                                    </div>
                                    <div className="rest-time">
                                        Rest: <strong>60-90secs</strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* result comp end */}
                <div className="suggestion-container">
                    <div className="sugg-top">
                        <img src={"/images/suggestion_spark.png"} alt="" className="sugg-log" />
                        <h3>Suggestions</h3>
                    </div>

                    <div className="suggestion-list">
                        <ul className="suggestion-items">
                            <li className="suggestion-item">
                                <h3>Protien Sources</h3>
                                <p>Increase your protein intake by adding more lean meats and legumes.</p>
                            </li>
                            <li className="suggestion-item">
                                <h3>Protien Sources</h3>
                                <p>Increase your protein intake by adding more lean meats and legumes.</p>
                            </li>
                            <li className="suggestion-item">
                                <h3>Protien Sources</h3>
                                <p>Increase your protein intake by adding more lean meats and legumes.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>{`
            * {margin: 0;
            padding: 0;}
            `}</style>
            <style jsx>{`
            .dashboard-container {
                display: flex;
                flex-direction: row;
                background-color: #f4f4f4;
                width: 100%;
                height: 100%;
            }
                .dashboard-left {
                width: 20%;
                background-color: #ccc;
                height: 100vh;
                padding: 20px;
                // border-right: 1px solid #ddd;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 40px;
                text-align: left;

            }
                .dashboard-right {
                width: 80%;
                height: 100vh;
                padding: 20px;
                background-color: #fff;
                overflow: auto;
                
            }
                .img-div img {
                width: 100%;
                height: auto;
            }
                .dashboard-menu {
                margin-top: 20px;
            }
                .menu-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }
                .menu-item {
                margin-bottom: 10px;
            }
                .sub-menu-link {
                text-decoration: none;
                color: #333;
                display: flex;
                align-items: center;
            }
                .sub-menu-dropdown {
                display: none;
                position: absolute;
                background-color: #fff;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                padding: 10px;
            }
                .menu-item:hover .sub-menu-dropdown {
                display: block;
            }
                .sub-menu-item {
                margin-bottom: 5px;
            }
                .sub-menu-link:hover {
                color: #0070f3;
            }
                .manage-profile {
                display: flex;
                align-items: center;
                margin-top: 20px;
            }
                .profile-avatar img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
                .profile-details {
                margin-left: 10px;
            }
                .profile-link {
                text-decoration: none;
                color: #0070f3;
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
            .breadcrumb-item.active a {
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
            .suggestion-container {
                
                padding: 20px;
                border-radius: 8px;
                margin-top: 20px;
            }
            .sugg-top {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 20px;
                position: relative;
            }
            .sugg-top::before {
            content: "";
            position: absolute;
            bottom: -20px;
            left: 20px;
            right: 0;
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 16px solid #f0f0f0;

            }
                .sugg-log {
                width: 18px;
                height: 27px;
            }
                .suggestion-list {
                margin-top: 20px;
                background-color: #f0f0f0;
                border-radius: 8px;
            }
                .suggestion-items {
                list-style: none;
                padding: 0;
                display: flex;
                justify-content: space-between;
                
            }
                .suggestion-item {
                margin: 15px 0;
                padding: 15px;
                width: 275px;
                border-right: 1px solid #ccc;
            }
                .suggestion-item:last-child {
                border: none;
                }
                .suggestion-item h3 {
                font-size: 18px;
                color: #333;
            }
                .suggestion-item p {
                font-size: 14px;
                color: #666;
            }
        `}</style>
            <style jsx>{`
        .results-container {
        margin: 20px;
        padding: 20px;
        height: 600px;
        border: 1px solid #ccc;
        border-radius: 16px;
        overflow: auto;
        display: flex;
        gap: 5px;

        }
        .days-container {width: 40%;}
        .days-list {
        list-style-type: none;
        padding: 0;
        }
        .days-item {
        padding: 20px;
        margin: 20px;
        border-bottom: 1px solid #ccc;
        position: relative;
        border-radius: 32px;

        }
        .days-item.active::after {
            content: "";
    position: absolute;
    right: -25px;
    top: 0;
    height: 100%;
    border-right: 16px solid#0070f3;
    z-index: 9;
    border-radius: 8px;

        }
        .days-item span {margin-left: 10px; font-weight: normal;}
        .days-item.active, .days-item:hover{color: #0070f3; background: #ccebff;}

        .days-schedule-container {flex: 1;border: 1px solid #ccc; border-radius: 16px; padding: 20px;overflow: auto;}
        .day-sch-top {display: flex; justify-content: space-between; margin: 0 20px;}
        .day-sch {color: #000; font-weight: bold; font-size: 18px;}
        .ex-names{font-size: 14px;font-weight: normal;}


        .sets-list {list-style-type: none; display: block; }
        .sets-wp {display: flex; gap: 20px; justify-content: space-between; background: #f0f0f5; margin: 20px; padding: 10px; border-radius: 8px;}
        .rest-time {margin: 0 auto; text-align: center; }
        .set-cnt {text-align: right;}
        .set-vid {color: #0080E8; cursor: pointer;}
        .pl-icon {width: 18px; height: 18px;position: relative;
    top: 3px;
    margin-right: 5px;}

        `}</style>
        </>
    );
}