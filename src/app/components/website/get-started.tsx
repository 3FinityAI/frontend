"use client";

import React from "react";
import styles from "./get-started.module.scss";
import AiThatUnderstandsYouPng from "../../public/images/ai-that-understands-you.png";

const GetStarted = () => {
  return (
    <div className={styles.card}>
      {/* Decorative elements */}
      <div className={styles.decorativeCurve}>
        {/* Small decorative elements with image */}
        <div className={`${styles.decorativeCircle} ${styles.topLeft}`}>
          <img
            src={AiThatUnderstandsYouPng.src}
            width={206}
            height={191}
            alt="AI that understands"
            className={styles.circleImage}
          />
        </div>
        <div className={`${styles.decorativeCircle} ${styles.rightBottom}`}>
          <img
            src={AiThatUnderstandsYouPng.src}
            width={42}
            height={39}
            alt="AI that understands"
            className={styles.circleImage}
          />
        </div>
        <div className={`${styles.decorativeCircle} ${styles.rightTop}`}>
          <img
            src={AiThatUnderstandsYouPng.src}
            width={42}
            height={39}
            alt="AI that understands"
            className={styles.circleImage}
          />
        </div>
        <div className={`${styles.decorativeCircle} ${styles.topLeftwide}`}>
          <img
            src={AiThatUnderstandsYouPng.src}
            width={42}
            height={39}
            alt="AI that understands"
            className={styles.circleImage}
          />
        </div>

        <div className={styles.content}>
          <h3 className={styles.heading}>
            Join 3finityAi today and make every decision
          </h3>

          <h3 className={styles.heading}>a step toward a better you.</h3>

          <button className={styles.button}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
