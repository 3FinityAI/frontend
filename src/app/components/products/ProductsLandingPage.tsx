"use client";
import React from "react";
import styles from "./productsDesktopStyles.module.css";

export default function ProductsLandingPage() {
  return (
    <section className={styles.productsLandingPageSection}>
      <div className={styles.productsLandingPage}>
        <h1 className={styles.greetMsg}>
          Hey <strong>Salim</strong>
        </h1>
        <p className={styles.greetDesc}>What do you feel like doing today ?</p>
        <div className={styles.productsLists}>
          <div className={styles.productItem}>
            <a href="products/fashion" className={styles.productLink}>
              <img
                className={styles.productImg}
                src="/images/fashion-logo.png"
                alt="Fashion"
              />
              <h4 className={styles.productTitle}>
                Future <span>Fit</span>
              </h4>
              <p className={styles.productDesc}>
                Discover our Future Fit products designed to enhance your
                fitness journey.
              </p>
              <button className={styles.productButton}>Explore</button>
            </a>
          </div>

          <div className={styles.productItem}>
            <a href="products/fitness" className={styles.productLink}>
              <img
                className={styles.productImg}
                src="/images/fitness-logo.png"
                alt="Fitness"
              />
              <h4 className={styles.productTitle}>
                Future <span>Fit</span>
              </h4>
              <p className={styles.productDesc}>
                Discover our Future Fit products designed to enhance your
                fitness journey.
              </p>
              <button className={styles.productButton}>Explore</button>
            </a>
          </div>

          <div className={styles.productItem}>
            <a href="products/finance" className={styles.productLink}>
              <img
                className={styles.productImg}
                src="/images/finance-logo.png"
                alt="Finance"
              />
              <h4 className={styles.productTitle}>
                Future <span>Fit</span>
              </h4>
              <p className={styles.productDesc}>
                Discover our Future Fit products designed to enhance your
                fitness journey.
              </p>
              <button className={styles.productButton}>Explore</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}