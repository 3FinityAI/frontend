"use client";
import React from "react";

export default function UserProfile() {
    return (
        <section className="user-profile-container">
            <div className="user-profile-header">
                <h1>Profile</h1>
                <div className="change-logout">
                    <button className="change-password">Change Password</button>
                    <button className="logout">Logout Account</button>
                </div>
            </div>
            <div className="user-profile-content">
                <div className="profile-top">
                    <img src={"/images/authorImage.png"} alt="" />
                    <div className="name-dt">
                        <h2 className="user-name">John Doe</h2>
                        <p className="joined-date">Joined on: <span>1 January 2023</span></p>
                    </div>
                </div>
                <div className="user-email-phone">
                    <div className="user-email">
                        <h3>Email:</h3>
                        <p><span>johndoe@example.com</span></p>
                    </div>
                    <div className="user-phone">
                        <h3>Phone Number</h3>
                        <p><span>+1234567890</span></p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .user-profile-container {
                    width: 80%;
                padding: 20px;
                background-color: #fff;
                   
                }
                .user-profile-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 54px;
                }
                .change-logout button {
                    margin-left: 10px;
                }
                    .change-password, .logout {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                }
                    .logout {
                    color: red;}
                .user-profile-content {
                    display: flex;
                    flex-direction: column;
                }
                    .profile-top {
                    display: flex;
                    
                    align-items: center;
                    justify-content: flex-start;
                    margin-bottom: 20px;
                }
                .user-profile-content img {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    margin: 0 20px 20px 0;
                }
                .name-dt {
                    
                }
                .user-name {
                    font-size: 24px;
                    margin: 0;
                }
                .joined-date {

                    font-size: 16px;
                    color: #666;
                    margin: 0;
                }
                .user-email-phone {
                    display: flex;
                    justify-content: flex-start;
                    width: 100%;
                    gap: 20px;
                }
                    .user-email p, .user-phone p{
                    width: 380px;
                    flex: 1;
                    background-color: #f4f4f4;
                    padding: 15px;
                    border-radius: 8px;
                }
            `}</style>
        </section>
    );
}