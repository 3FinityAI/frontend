import React from "react";

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <button className="closeBtn" onClick={onClose}>×</button>
        <h2>Terms & Conditions</h2>
        <div className="content">
          <p>
            Welcome to our platform. By accessing or using our services, you agree to be bound by these terms. Please read them carefully.
          </p>
          <p>
            1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, nostrum?
          </p>
          <p>
            2. You agree not to misuse our services or help anyone else do so.
          </p>
          <p>
            3. Your use of the service is at your sole risk. It is provided on an "as is" and "as available" basis.
          </p>
          <p>
            4. We may suspend or terminate your account if you violate any of these terms.
          </p>
          <p>
            For more detailed legal terms, please refer to our official policy page.
          </p>
          <p>
            2. You agree not to misuse our services or help anyone else do so.
          </p>
          <p>
            3. Your use of the service is at your sole risk. It is provided on an "as is" and "as available" basis.
          </p>
          <p>
            4. We may suspend or terminate your account if you violate any of these terms.
          </p>
          <p>
            For more detailed legal terms, please refer to our official policy page.
          </p>
        </div>
      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal {
          background: #fff;
          padding: 30px;
          border-radius: 10px;
          width: 90%;
          max-width: 600px;
          max-height: 40vh;
          overflow-y: auto;
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

        h2 {
          margin-top: 0;
        }

        .content {
          margin-top: 20px;
        }

        .content p {
          margin-bottom: 16px;
          line-height: 1.5;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}