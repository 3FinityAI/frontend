import React, { useState } from "react";
import scan_to_dwld from "../../public/images/scan_to_dwld.png";

export default function ResetPasswordModal({ isOpen, onClose, onBackToLogin }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        onClose(); // Close modal after submit (for demo)
    };

    if (!isOpen) return null;

    return (
        <div className="overlay">
            <div className="modal">

                <div className="imageContainer">
                    <img src={scan_to_dwld.src} alt="Scan to download" />
                </div>
                <div className="formContainer">
                    <button className="closeBtn" onClick={onClose}>×</button>
                    <h2 className="instruction-hd">Reset Password</h2>
                    <p className="instruction-pa">please create your credentials</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Proceeding</button>
                    </form>
                    <span className="underline"></span>
                    <button className="backtologin" onClick={onBackToLogin}>Back to login</button>
                </div>
               
            </div>

            <style jsx>{`
        .overlay {
          position: fixed;
          top: 5%; left: 0;
          width: 100vw;
          height: 100vh;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal {
         display: flex;
         justify-content: space-between;

          background:#9f9f9f;
          padding: 30px;
          border-radius: 8px;
          width: 90%;
            height: 70%;
          max-width: 1089px;
          position: relative;
        }

        .closeBtn {
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        input {
          padding: 15px;
          font-size: 16px;
          border-radius: 10px;
          border: 1px solid #ccc;
          width: 428px;
          background: #ccc
        }

        button[type="submit"] {
          padding: 15px;
          font-size: 20px;
          background-color: #1976d2;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
        }

        button[type="submit"]:hover {
        
          background-color: #145ea8;
        }
          .imageContainer {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;}
            .imageContainer img {
                width: 100%;
                height: 100%;
                }
        .formContainer {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;}
        .instruction-hd {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
            
            }
        .instruction-pa {
            font-size: 16px;
            margin-bottom: 20px;
            }
        .underline {
            width: 60%;
            height: 2px;
            background-color:#3e3d3d;
            margin: 20px 0;
            }
        .backtologin {
            padding: 15px;
          font-size: 16px;
          border-radius: 10px;
          border: 1px solid #ccc;
        width: 90%;
          background: #ccc
            text-decoration: none;
            cursor: pointer;
        }

        @media (max-width: 768px) {
        .overlay {
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    overflow-y: auto;
                    }
                .modal {
                    flex-direction: column;
                    width: 100%;
                    height: auto;
                    padding: 20px;
                    }
                .imageContainer {
                    width: 95%;
                    height: 200px;
                    }
                .imageContainer img {
                    width: 250px;
                    height: 250px;
                    object-fit: cover;
                    }
                .formContainer {
                    width: 95%;
                    }
                .formContainer input {
                    width: 90%;}

                form {
                    width: 100%;
                    }

                .backtologin {
                    width: 100%;
                    }

            }
      `}</style>
        </div>
    );
}