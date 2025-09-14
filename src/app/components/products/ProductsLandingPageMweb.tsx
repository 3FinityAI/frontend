"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./productsMobileStyles.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductsLandingPageMweb() {
  const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <>
      <div className={styles.productsLandingMwebContainer}>
        <div className={styles.userNotifyContainer}>
          <img src="/images/user_icon_mob.svg" alt="" className={styles.userIconLogo} />
          <img src="/images/notification-bell.png" alt="" className={styles.notifyLogo} />
        </div>

        <div className={styles.productsTop}>
          <h4 className={styles.greetingTxt}>Good Morning,</h4>
          <h1 className={styles.userNme}>Salim!</h1>
        </div>

        <div className={styles.productsGrid}>
          <div className={`${styles.gridItem} ${styles.gridItemFirst}`}>
            <a href="/products/finance/">
              <img src="/images/rupee_icon_mob.svg" alt="" className={styles.productIcon} />
              <div className={styles.gridBtm}>
                <p className={styles.productNme}><strong>Finance</strong> Finity</p>
                <img src="/images/right-arr.png" alt="" className={styles.rightArr} />
              </div>
            </a>
          </div>
          <div className={styles.gridItem}>
            <a href="/products/fashion/">
              <img src="/images/fashion_icon_mob.svg" alt="" className={styles.productIcon} />
              <div className={styles.gridBtm}>
                <p className={styles.productNme}><strong>Fashion</strong> Finity</p>
                <img src="/images/right-arr.png" alt="" className={styles.rightArr} />
              </div>
            </a>
          </div>
          <div className={styles.gridItem}>
            <a href="/products/fitness/">
              <img src="/images/fitness_icon_mob.svg" alt="" className={styles.productIcon} />
              <div className={styles.gridBtm}>
                <p className={styles.productNme}><strong>Fitness</strong> Finity</p>
                <img src="/images/right-arr.png" alt="" className={styles.rightArr} />
              </div>
            </a>
          </div>
        </div>

        <div className={styles.fashionImgContainer}>
          <h4 className={styles.fashionTtl}>Similar Tryons</h4>
          <div className={styles.imgGrid}>
            {[1, 2, 3, 4].map(i => (
              <div className={styles.imgItem} key={i}>
                <img src={`/images/img${i}.png`} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.topPerformingFundsContainer}>
          <h4 className={styles.topPerformingTtl}>Top Performing Funds</h4>
          <ul className={styles.fundsList}>
            {Array.from({ length: 6 }).map((_, idx) => (
              <li className={styles.fundItem} key={idx}>
                <div className={styles.fundName}>Motilal Oswal MidCap Fund- Direct Plan- Growth</div>
                <div className={styles.amntRoi}>
                  <p className={styles.amnt}>31,245</p>
                  <p className={styles.roi}>ROI <strong>30%</strong></p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.tryFitnessContainer}>
          <h4 className={styles.tryFitnessTtl}>Try Fitness Module</h4>
          <div className={styles.fitnessSliderWrapper}>
            <Slider {...settings} className={styles.fitnessSlider}>
              {Array.from({ length: 4 }).map((_, idx) => (
                <div className={styles.fitnessItem} key={idx}>
                  <div className={styles.newFeature}>
                    <img src="/images/notification-bell.png" alt="" className={styles.bellIcon} />
                    <p className={styles.featureTxt}>New Feature</p>
                  </div>
                  <div className={styles.featureDesc}>How to get Custom Diet Plan ?</div>
                  <a href="/custom-diet-plan" className={styles.customizeLink}>Customize</a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <ul className={styles.menusList}>
        {[
          { href: "/products/", icon: "dashboard_icon_w", label: "Home" },
          { href: "/products/fashion/", icon: "fashion_icon_w", label: "Fashion" },
          { href: "/products/finance/", icon: "rupee_icon_w", label: "Finance" },
          { href: "/products/fitness/", icon: "fitness_icon_w", label: "Fitness" },
          { href: "/products/finance/my-investment/", icon: "fitness_icon_w", label: "Investment" },
        ].map((item, index) => (
          <li className={styles.menuItem} key={index}>
            <a href={item.href}>
              <img src={`/images/${item.icon}.png`} alt="" className={styles.menuIc} />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
