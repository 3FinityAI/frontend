import React, {useState} from 'react';

export default function Sidebar({
  children,
}: {
  children: React.ReactNode;
}) {

  const [activeTab, setActiveTab] = useState('dashboard');

  const handleActiveTab = (tab: any) => {
    setActiveTab(tab);
  }
    return (
        <>
        <section className="dashboard-container">
              <div className="dashboard-left">
                <div className="img-div">
                  <a href='/'><img src={"/images/infinity_logo_w.png"} alt="Dashboard Logo" /></a>
                </div>
                <div className="dashboard-menu">
                  <ul className="menu-list">
                    <li className={`menu-item ${activeTab == "dashboard" ? "active" : ""}`} onClick={()=> handleActiveTab("dashboard")}><a className="menu-link" href="#"><img src={"/images/dashboard_icon_w.png"} alt="" className='menu-icon' /> Dashboard</a></li>
                    <li className={`menu-item ${activeTab == "fashion" ? "open active" : ""}`} onClick={()=> handleActiveTab("fashion")}><a className="menu-link" href="#"><img src={"/images/fashion_icon_w.png"} alt="" className='menu-icon' /> Future Fit</a>
                      <ul className="sub-menu-dropdown">
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 1</a></li>
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 2</a></li>
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 3</a></li>
                      </ul>
                    </li>
                    <li className={`menu-item ${activeTab == "fitness" ? "open active" : ""}`} onClick={()=> handleActiveTab("fitness")}><a className="menu-link" href="#"> <img src={"/images/fitness_icon_w.png"} alt="" className='menu-icon' /> Fitness</a>
                      <ul className="sub-menu-dropdown">
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 1</a></li>
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 2</a></li>
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 3</a></li>
                      </ul>
                    </li>
                    <li className={`menu-item ${activeTab == "finance" ? "open active" : ""}`} onClick={()=> handleActiveTab("finance")}><a className="menu-link" href="#"> <img src={"/images/rupee_icon_w.png"} alt="" className='menu-icon' />Finance</a>
                      <ul className="sub-menu-dropdown">
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Specific Goals</a></li>
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Retirement Planning</a></li>
                        <li className="sub-menu-item"><a className="sub-menu-link" href="finance/my-investment">My Investment</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="manage-profile">
                  <div className="profile-avatar">
                    <img src={"/images/authorImage.png"} alt="Profile Avatar" />
                  </div>
                  <div className="profile-details">
                    <h3 className='profile-name'>John Doe</h3>
                    <a href="/user-profile" className="profile-link">Manage Profile</a>
                  </div>
                </div>
              </div>
              {children}
            </section>
             <style jsx>{`
            .dashboard-container {
                display: flex;
                flex-direction: row;
                background-color: #0E1524;
                width: 100%;
                height: auto;
            }
                .dashboard-left {
                width: 20%;
                height: 100vh;
                margin: 0 auto;
                background-color: #0E1524;
                
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
                overflow-y: auto;
                
            }
                .img-div img {
                width: 100%;
                height: auto;
            }
                .dashboard-menu {
                margin-top: 20px;
                width: 90%;
                background-color: transparent;
                

            }
                .menu-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }
                .menu-item {
                margin-bottom: 20px;
                padding: 10px 0;
                position: relative;
                text-align: center;
                border-radius: 8px;
                
            }
                .menu-link {
                text-decoration: none;
                color: #fff;
                font-weight: 500;
                font-size: 18px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin-left: 10px;
                }
                .sub-menu-link {
                text-decoration: none;
                color: #fff;
                font-weight: 500;
                font-size: 15px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin-left: 10px;
            }
                .menu-icon {
                width: 24px;
    height: 24px;
    margin: 5px;}
                .sub-menu-dropdown {
                display: none;
                list-style: none;
                position: relative;
                background-color: transparent;
                
                padding: 10px;
                margin-left: 20px;
            }
                .menu-item.active {
                background-color: transparent;
                color: #fff;
                }
                .menu-item.open .sub-menu-dropdown {
                display: block;
                
            }
                .sub-menu-item {
                margin-bottom: 8px;
                padding: 10px 0;

            }
                .sub-menu-link:hover {
                color: #0070f3;
            }
                .manage-profile {
                width: 100%;
                display: flex;
                align-items: flex-start;
                margin-top: 36px;
                background: #fff;
                border-radius: 8px;
                // flex: 1;
            }
                .profile-avatar img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            .profile-name {
                font-size: 18px;
                font-weight: 600;
                margin: 0;
            }
                .profile-details {
                margin-left: 10px;
            }
                .profile-link {
                text-decoration: none;
                color: #0070f3;
            }       
        `}</style>
        </>
    );
}