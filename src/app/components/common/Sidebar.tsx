import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const getActiveTabFromPath = (path: string) => {
    if (path.startsWith("/products/finance")) return "finance";
    if (path.startsWith("/products/fitness")) return "fitness";
    if (path.startsWith("/products/fashion")) return "fashion";
    return "dashboard";
  };

  const [activeTab, setActiveTab] = useState(() =>
    getActiveTabFromPath(pathName)
  );

  const handleActiveTab = (tab: any) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className="dashboard-container">
        <div className="dashboard-left">
          <div className="img-div">
            <a href="/">
              <img src={"/images/infinity_logo_w.png"} alt="Dashboard Logo" />
            </a>
          </div>
          <div className="dashboard-menu">
            <ul className="menu-list">
              <li
                className={`menu-item 
                  ${activeTab === "dashboard" ? "active" : ""
                }`}
                onClick={() => handleActiveTab("dashboard")}
              >
                <a className="menu-link" href="/products/">
                  <img
                    src={"/images/dashboard_icon_w.png"}
                    alt=""
                    className="menu-icon"
                  />
                  Dashboard
                </a>
              </li>
              <li
                className={`menu-item ${activeTab === "fashion" ? "open active" : ""
                }`}
                onClick={() => handleActiveTab("fashion")}
              >
                <a className="menu-link">
                  <img
                    src={"/images/fashion_icon_w.png"}
                    alt=""
                    className="menu-icon"
                  />
                  Future Fit
                </a>
                <ul className="sub-menu-dropdown">
                  <li className="sub-menu-item">
                    <a className="sub-menu-link" href="#">
                      Future Fit 1
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a className="sub-menu-link" href="#">
                      Future Fit 2
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a className="sub-menu-link" href="#">
                      Future Fit 3
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className={`menu-item ${activeTab === "fitness" ? "open active" : ""
                }`}
                onClick={() => handleActiveTab("fitness")}
              >
                <a className="menu-link">
                  
                  <img
                    src={"/images/fitness_icon_w.png"}
                    alt=""
                    className="menu-icon"
                  />
                  Fitness
                  <span className="arr-ind">&lt;</span>
                </a>
                <ul className="sub-menu-dropdown">
                  <li className="sub-menu-item">
                    <a className="sub-menu-link" href="#">
                      Future Fit 1
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a className="sub-menu-link" href="#">
                      Future Fit 2
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a className="sub-menu-link" href="#">
                      Future Fit 3
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className={`menu-item ${activeTab === "finance" ? "open active" : ""
                }`}
                onClick={() => handleActiveTab("finance")}
              >
                <a className="menu-link">
                 
                  <img
                    src={"/images/rupee_icon_w.png"}
                    alt=""
                    className="menu-icon"
                  />
                  Finance
                  <span className="arr-ind">&lt;</span>
                </a>
                <ul className="sub-menu-dropdown">
                  <li className="sub-menu-item">
                    <a
                      className={
                        pathName == "/products/finance/specific-goals"
                          ? "sub-menu-link active"
                          : "sub-menu-link"
                      }
                      href="/products/finance/specific-goals/"
                    >
                      Specific Goals
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a
                      className={
                        pathName == "/products/finance"
                          ? "sub-menu-link active"
                          : "sub-menu-link"
                      }
                      href="/products/finance/"
                    >
                      Retirement Planning
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a
                      className={
                        pathName == "/products/finance/my-investment"
                          ? "sub-menu-link active"
                          : "sub-menu-link"
                      }
                      href="/products/finance/my-investment/"
                    >
                      My Investment
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="manage-profile">
            <div className="profile-avatar">
              <img src={"/images/authorImage.png"} alt="Profile Avatar" />
            </div>
            <div className="profile-details">
              <h3 className="profile-name">John Doe</h3>
              <a href="/user-profile" className="profile-link">
                Manage Profile
              </a>
            </div>
          </div>
        </div>
        {children}
      </section>
      <style jsx>{`
        .dashboard-container {
          display: flex;
          flex-direction: row;
          background-color: #0e1524;
          width: 100%;
          height: auto;
        }
        .dashboard-left {
          width: 20%;
          height: 100vh;
          background-color: #0e1524;
          padding: 20px;
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
          position: relative;
          text-align: center;
          border-radius: 8px;
          cursor: pointer
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
          padding: 10px;
          border-radius: 8px;
          position: relative;

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
          border-radius: 8px;
          padding: 5px;
        }
        .sub-menu-link.active {
          background-color: #f6f6f6;
          color: #000;
        }
         
        .menu-icon {
          width: 24px;
          height: 24px;
          margin: 5px;
        }
          .arr-ind {position: absolute;
    right: 0;
    margin-right: 18px;
    transform: rotate(90deg);}
          .menu-item.active .menu-icon {
          filter: invert(1);
          }
          .menu-item.active .arr-ind {transform: rotate(-90deg);}

        .sub-menu-dropdown {
          display: none;
          list-style: none;
          position: relative;
          background-color: transparent;

          padding: 10px;
          margin-left: 20px;
        }
        .menu-item.active .menu-link {
          background-color: #f6f6f6;
          color: #000;
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
          background: transparent;
          border-radius: 8px;
          // flex: 1;
        }
        .profile-avatar img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .profile-name {
        color: #fff;
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
