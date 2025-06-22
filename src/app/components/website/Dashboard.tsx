import FitnessGoalForm from "./FitnessGoalForm";

export default function Dashboard({ setIsWorkoutPlan, setIsPersonalizedDietPlan, }) {

    return (
        <>
            <div className="dashboard-right">
                <div className="breadcrumb">
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="#">Fitness</a></li>
                        <li className="breadcrumb-item active"><a href="#">Diet Plan</a></li>
                    </ul>
                </div>
                <FitnessGoalForm setIsWorkoutPlan={setIsWorkoutPlan} setIsPersonalizedDietPlan={setIsPersonalizedDietPlan} />
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
        </>
    );
}