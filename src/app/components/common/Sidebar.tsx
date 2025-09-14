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
                   <span className="arr-ind">&lt;</span>
                </a>
                <ul className="sub-menu-dropdown">
                  <li className="sub-menu-item">
                    <a className="sub-menu-link" href="#">
                      Future Fit 1
                      <span className="line-left"></span>
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a className="sub-menu-link" href="#">
                      Future Fit 2
                      <span className="line-left"></span>
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a className="sub-menu-link" href="#">
                      Future Fit 3
                      <span className="line-left"></span>
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
                      <span className="line-left"></span>
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a className="sub-menu-link" href="#">
                      Future Fit 2
                      <span className="line-left"></span>
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a className="sub-menu-link" href="#">
                      Future Fit 3
                      <span className="line-left"></span>
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
                      <span className="line-left"></span>
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
                      <span className="line-left"></span>
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
                      <span className="line-left"></span>
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
  );
}
