

export default function Sidebar({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <>
        <section className="dashboard-container">
              <div className="dashboard-left">
                <div className="img-div">
                  <img src={"/public/images/authorImage.png"} alt="Dashboard Logo" />
                </div>
                <div className="dashboard-menu">
                  <ul className="menu-list">
                    <li className="menu-item"><a className="sub-menu-link" href="#"><img src="" alt="" /> Dashboard</a></li>
                    <li className="menu-item"><a className="sub-menu-link" href="#"><img src="" alt="" /> Future Fit</a>
                      <ul className="sub-menu-dropdown">
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 1</a></li>
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 2</a></li>
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 3</a></li>
                      </ul>
                    </li>
                    <li className="menu-item"><a className="sub-menu-link" href="#"> <img src="" alt="" /> Future Fit</a>
                      <ul className="sub-menu-dropdown">
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 1</a></li>
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 2</a></li>
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 3</a></li>
                      </ul>
                    </li>
                    <li className="menu-item"><a className="sub-menu-link" href="#"> <img src="" alt="" />Future Fit</a>
                      <ul className="sub-menu-dropdown">
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 1</a></li>
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 2</a></li>
                        <li className="sub-menu-item"><a className="sub-menu-link" href="#">Future Fit 3</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="manage-profile">
                  <div className="profile-avatar">
                    <img src={"/public/images/authorImage.png"} alt="Profile Avatar" />
                  </div>
                  <div className="profile-details">
                    <h3>John Doe</h3>
                    <a href="#" className="profile-link">Manage Profile</a>
                  </div>
                </div>
              </div>
              {children}
            </section>
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
        `}</style>
        </>
    );
}