import dash_logo from "../../public/images/dash_logo.png";
import authorImage from "../../public/images/authorImage.png";
import nutrition_logo from "../../public/images/nutrition_logo.png";
import suggestion_spark from "../../public/images/suggestion_spark.png";

export default function PersonalizedDietPlanResults({ isPersonalizedDietPlan = false, setIsPersonalizedDietPlan }) {
    return (
        <>

            <div className="dashboard-right">
                <div className="breadcrumb">
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="#">Fitness</a></li>
                        <li className="breadcrumb-item"><a href="#">Diet Plan</a></li>
                        <li className="breadcrumb-item active"><a href="#">Results</a></li>
                    </ul>
                </div>
                {/* diet-metrics */}
                <div className="diet-metrics">
                    <div className="metrics-left">
                        <div className="daily-nutrition-sum">
                            <p className="nutrition-desc">Daily Nutrition Summary</p>
                            <h3 className="nutrition-data">
                                <img src={nutrition_logo?.src} alt="" className="nutrition-logo" />
                                1890 Kcal
                            </h3>
                        </div>
                        <div className="daily-nutrition-types">
                            <div className="nutrition-type">
                                <p className="nutrition-name">Protien</p>
                                <p className="nutriton-wt">145g</p>
                            </div>
                            <div className="nutrition-type">
                                <p className="nutrition-name">Protien</p>
                                <p className="nutriton-wt">145g</p>
                            </div>
                            <div className="nutrition-type">
                                <p className="nutrition-name">Protien</p>
                                <p className="nutriton-wt">145g</p>
                            </div>


                        </div>
                    </div>
                    <div className="metrics-right">
                        <p className="cal-desc">Calories Distribution</p>
                        <div className="cal-distribution">
                            <div className="cal-item">
                                <p className="cal-value">~500 Kcal</p>
                                <div className="cal-name-data">
                                    <p className="cal-name">Breakfast</p>
                                    <p className="cal-per">14%</p>
                                </div>
                            </div>
                            <div className="cal-item">
                                <p className="cal-value">~500 Kcal</p>
                                <div className="cal-name-data">
                                    <p className="cal-name">Breakfast</p>
                                    <p className="cal-per">14%</p>
                                </div>
                            </div>
                            <div className="cal-item">
                                <p className="cal-value">~500 Kcal</p>
                                <div className="cal-name-data">
                                    <p className="cal-name">Breakfast</p>
                                    <p className="cal-per">14%</p>
                                </div>
                            </div>
                            <div className="cal-item">
                                <p className="cal-value">~500 Kcal</p>
                                <div className="cal-name-data">
                                    <p className="cal-name">Breakfast</p>
                                    <p className="cal-per">14%</p>
                                </div>
                            </div>
                            <div className="cal-item">
                                <p className="cal-value">~500 Kcal</p>
                                <div className="cal-name-data">
                                    <p className="cal-name">Breakfast</p>
                                    <p className="cal-per">14%</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* personalized-diet plan */}
                <div className="personalized-diet">
                    <h4>Personalized Diet Plan</h4>
                    <ul className="diet-timing-list">
                        <li className="diet-time">Breakfast <span>8AM</span></li>
                        <li className="diet-time">Lunch <span>1PM</span></li>
                        <li className="diet-time">Dinner <span>9PM</span></li>
                        <li className="diet-time">Snacks</li>
                    </ul>
                    <div className="diet-details">

                        <ul className="diet-items-list">
                            <li className="diet-item diet-sch bf-h-green">
                                <h4>Breakfast</h4>
                                <p>7:00 - 8:00 AM</p>
                            </li>
                            <li className="diet-item bf-green">
                                <div className="diet-name">
                                    <h4>Oatmeal with berries</h4>
                                    <p>1 cup of oats, mixed berries</p>
                                </div>
                                <div className="diet-energy">
                                    <p>320 Kcal</p>
                                    <p>Protein:30g</p>
                                </div>
                            </li>
                            <li className="diet-item bf-green">
                                <div className="diet-name">
                                    <h4>Oatmeal with berries</h4>
                                    <p>1 cup of oats, mixed berries</p>
                                </div>
                                <div className="diet-energy">
                                    <p>320 Kcal</p>
                                    <p>Protein:30g</p>
                                </div>
                            </li>
                            <li className="diet-item bf-green">
                                <div className="diet-name">
                                    <h4>Oatmeal with berries</h4>
                                    <p>1 cup of oats, mixed berries</p>
                                </div>
                                <div className="diet-energy">
                                    <p>320 Kcal</p>
                                    <p>Protein:30g</p>
                                </div>
                            </li>

                        </ul>
                        <ul className="diet-items-list">
                            <li className="diet-item diet-sch l-h-red">
                                <h4>Lunch</h4>
                                <p>7:00 - 8:00 AM</p>
                            </li>
                            <li className="diet-item l-red">
                                <div className="diet-name ">
                                    <h4>Oatmeal with berries</h4>
                                    <p>1 cup of oats, mixed berries</p>
                                </div>
                                <div className="diet-energy">
                                    <p>320 Kcal</p>
                                    <p>Protein:30g</p>
                                </div>
                            </li>
                            <li className="diet-item l-red">
                                <div className="diet-name">
                                    <h4>Oatmeal with berries</h4>
                                    <p>1 cup of oats, mixed berries</p>
                                </div>
                                <div className="diet-energy">
                                    <p>320 Kcal</p>
                                    <p>Protein:30g</p>
                                </div>
                            </li>
                            <li className="diet-item l-red">
                                <div className="diet-name">
                                    <h4>Oatmeal with berries</h4>
                                    <p>1 cup of oats, mixed berries</p>
                                </div>
                                <div className="diet-energy">
                                    <p>320 Kcal</p>
                                    <p>Protein:30g</p>
                                </div>
                            </li>

                        </ul>
                        <ul className="diet-items-list">
                            <li className="diet-item diet-sch d-h-blue">
                                <h4>Dinner</h4>
                                <p>7:00 - 8:00 AM</p>
                            </li>
                            <li className="diet-item d-blue">
                                <div className="diet-name">
                                    <h4>Oatmeal with berries</h4>
                                    <p>1 cup of oats, mixed berries</p>
                                </div>
                                <div className="diet-energy">
                                    <p>320 Kcal</p>
                                    <p>Protein:30g</p>
                                </div>
                            </li>
                            <li className="diet-item d-blue">
                                <div className="diet-name">
                                    <h4>Oatmeal with berries</h4>
                                    <p>1 cup of oats, mixed berries</p>
                                </div>
                                <div className="diet-energy">
                                    <p>320 Kcal</p>
                                    <p>Protein:30g</p>
                                </div>
                            </li>
                            <li className="diet-item d-blue">
                                <div className="diet-name">
                                    <h4>Oatmeal with berries</h4>
                                    <p>1 cup of oats, mixed berries</p>
                                </div>
                                <div className="diet-energy">
                                    <p>320 Kcal</p>
                                    <p>Protein:30g</p>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
                <div className="suggestion-container">
                    <div className="sugg-top">
                        <img src={suggestion_spark?.src} alt="" className="sugg-log" />
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
                border-right: 1px solid #ddd;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 40px;
                text-align: left;

            }
                .dashboard-right {
                width: 80%;
                padding: 20px;
                background-color: #fff;
                
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
        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            }
                .diet-metrics {
                display: flex;
                justify-content: space-between;
                gap: 20px;
                padding: 20px;
                background-color: #ccc;
                border-radius: 8px;
                
            }
                .metrics-left {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 20px;
                background-color: #fff;
                width: 40%;
                border-radius: 8px;
                } 
                .metrics-right {
                width: 60%;
                padding: 20px;
                background-color: #fff;
                border-radius: 8px;

            }
                .daily-nutrition-sum {
                background-color: #f0f0f0;
                padding: 10px;
                border-radius: 8px;
            }
                .nutrition-desc {
                font-size: 16px;
                color: #555;
            }
                .nutrition-data {
                font-size: 24px;
                font-weight: bold;
            }
                .nutrition-data h3 {
                margin: 0;
                }
                .nutrition-logo {
                    margin-right: 8px;
                    position: relative;
                    left: 0;
                    top: 5px;
                }
                .daily-nutrition-types {
                display: flex;

                justify-content: space-between;
                margin-top: 20px;
                padding: 10px 20px;
                background-color: #f0f0f0;
                border-radius: 8px;
            }
                .nutrition-type {
                text-align: center;
            }
                .nutrition-name, .nutriton-wt {
                margin: 5px 0;
            }
                .cal-distribution {
                display: flex;
                justify-content: flex-start;
                padding: 20px;
                background-color: #f0f0f0;

                flex-wrap: wrap;
                gap: 10px;
                border-radius: 8px;

            }
                .cal-item {
                width: 137px;
                padding: 10px;
                background-color: #f0f0f0;
                border-radius: 8px;
                margin-bottom: 10px;

                
            }
                .cal-value {
                font-size: 16px;
                font-weight: bold;
                margin: 0;
            }
                .cal-name-data {
                display: flex;
                justify-content: space-between;
            }
                .cal-name, .cal-per {
                margin: 5px 0;
            }
                .personalized-diet {
                margin-top: 20px;
                padding: 20px;
                background-color: #f0f0f0;
                border-radius: 8px;
                
            }
                .diet-timing-list {
                list-style: none;
                padding: 0;
                display: flex;
                gap: 10px;
                
            }
                .diet-time {
                font-size: 14px;
                font-weight: bold;
                border-radius: 24px;
                border: 1px solid #ddd;
                padding: 5px 10px;
                background-color: #f0f0f0;

                }
                .diet-time span {
                font-weight: normal;
                color: #666;
            }

                .diet-details {
                margin-top: 20px;
                height: 500px;
                 overflow-y: auto;
            }
                .diet-items-list {
                list-style: none;
                padding: 0;
            }
                .diet-item {
                display: flex;
                justify-content: space-between;
                padding: 10px;
            }
                .bf-green::before {
                content: "";
                display: block;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #008225;
                margin-bottom: 10px;
                position: relative;
                left: -8px;
                top: 16px;
                }
                .l-red::before {
                content: "";
                display: block;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #DA7699;
                margin-bottom: 10px;
                position: relative;
                left: -8px;
                top: 16px;
                }
                .d-blue::before {
                content: "";
                display: block;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #0080E8;
                margin-bottom: 10px;
                position: relative;
                left: -8px;
                top: 16px;
                }
                .bf-h-green h4 {
                font-weight: bold;
                color: #008225;
            }
                .l-h-red h4 {
                font-weight: bold;
                color: #DA7699;
            }
                .d-h-blue h4 {
                font-weight: bold;
                color: #0080E8;
            }
                .diet-sch p {
                font-size: 14px;
                color: #666;
                }
                .diet-name {
                flex: 1;
            }
                .diet-energy {
                text-align: right;
            }
                .diet-energy p {
                margin: 0;
            }
                .diet-name h4, .diet-name p {
                margin: 0;
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
            }
                .sugg-log {
                width: 18px;
                height: 27px;
            }
                .suggestion-list {
                margin-top: 20px;
                background-color: #f0f0f0;
            }
                .suggestion-items {
                list-style: none;
                padding: 0;
                display: flex;
                justify-content: space-between;
            }
                .suggestion-item {
                margin-bottom: 15px;
                padding: 15px;
                width: 275px;
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
        </>
    );
}