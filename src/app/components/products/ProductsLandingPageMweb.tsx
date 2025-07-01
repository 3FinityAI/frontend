"use client";
import React from "react";
import Slider from "react-slick";
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
      <div className="products-lnading-mweb-container">
        <div className="user-notify-container">
          <img src={"/images/user_icon_mob.svg"} alt="" className="user-icon-logo" />
          <img src={"/images/notification-bell.png"} alt="" className="notify-logo" />
        </div>
        <div className="products-top">
          <h4 className="greeting-txt">Good Morning,</h4>
          <h1 className="user-nme">Salim!</h1>
        </div>

        <div className="products-grid">
          <div className="grid-item grid-item-first">
             <a href="/products/finance/">
            <img
              src={"/images/rupee_icon_mob.svg"}
              alt=""
              className="product-icon"
            />
            <div className="grid-btm">
             

              <p className="product-nme">
                <strong>Finance</strong> Finity
              </p>
              <img src={"/images/right-arr.png"} alt="" className="right-arr" />
              
            </div>
            </a>
          </div>
          <div className="grid-item">
            <a href="/products/fashion/">
            <img
              src={"/images/fashion_icon_mob.svg"}
              alt=""
              className="product-icon"
            />
            <div className="grid-btm">
              
              <p className="product-nme">
                <strong>Fashion</strong> Finity
              </p>
              <img src={"/images/right-arr.png"} alt="" className="right-arr" />
              
            </div>
            </a>
          </div>
          <div className="grid-item">
            <a href="/products/fitness/">
            <img
              src={"/images/fitness_icon_mob.svg"}
              alt=""
              className="product-icon"
            />
            <div className="grid-btm">
              
              <p className="product-nme">
                <strong>Fitness</strong> Finity
              </p>
              <img src={"/images/right-arr.png"} alt="" className="right-arr" />
             
            </div>
             </a>
          </div>
        </div>
        <div className="fashion-img-container">
          <h4 className="fashion-ttl">Similar Tryons</h4>
          <div className="img-grid">
            <div className="img-item">
              <img src="/images/img1.png" alt="" />
            </div>
            <div className="img-item">
              <img src="/images/img2.png" alt="" />
            </div>
            <div className="img-item">
              <img src="/images/img3.png" alt="" />
            </div>
            <div className="img-item">
              <img src="/images/img4.png" alt="" />
            </div>
          </div>
        </div>

        <div className="top-perfoming-funds-container">
          <h4 className="top-performing-ttl">Top Performing Funds</h4>

          <ul className="funds-list">
            <li className="fund-item">
              <div className="fund-name">
                Motilal Oswal MidCap Fund- Direct Plan- Growth
              </div>
              <div className="amnt-roi">
                <p className="amnt">31,245</p>
                <p className="roi">
                  ROI <strong>30%</strong>
                </p>
              </div>
            </li>
            <li className="fund-item">
              <div className="fund-name">
                Motilal Oswal MidCap Fund- Direct Plan- Growth
              </div>
              <div className="amnt-roi">
                <p className="amnt">31,245</p>
                <p className="roi">
                  ROI <strong>30%</strong>
                </p>
              </div>
            </li>
            <li className="fund-item">
              <div className="fund-name">
                Motilal Oswal MidCap Fund- Direct Plan- Growth
              </div>
              <div className="amnt-roi">
                <p className="amnt">31,245</p>
                <p className="roi">
                  ROI <strong>30%</strong>
                </p>
              </div>
            </li>
            <li className="fund-item">
              <div className="fund-name">
                Motilal Oswal MidCap Fund- Direct Plan- Growth
              </div>
              <div className="amnt-roi">
                <p className="amnt">31,245</p>
                <p className="roi">
                  ROI <strong>30%</strong>
                </p>
              </div>
            </li>
            <li className="fund-item">
              <div className="fund-name">
                Motilal Oswal MidCap Fund- Direct Plan- Growth
              </div>
              <div className="amnt-roi">
                <p className="amnt">31,245</p>
                <p className="roi">
                  ROI <strong>30%</strong>
                </p>
              </div>
            </li>
            <li className="fund-item">
              <div className="fund-name">
                Motilal Oswal MidCap Fund- Direct Plan- Growth
              </div>
              <div className="amnt-roi">
                <p className="amnt">31,245</p>
                <p className="roi">
                  ROI <strong>30%</strong>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="try-fitness-container">
          <h4 className="try-fitness-ttl">Try Fitness Module</h4>
          <div className="fitness-slider-wrapper">
          <Slider {...settings} className="fitness-slider">
            <div className="fitness-item">
              <div className="new-feature">
                <img
                  src="/images/notification-bell.png"
                  alt=""
                  className="bell-icon"
                />
                <p className="feature-txt">New Feature</p>
              </div>
              <div className="feature-desc">How to get Custom Diet Plan ?</div>
              <a href="/custom-diet-plan" className="customize-link">
                Customize
              </a>
            </div>
            <div className="fitness-item">
              <div className="new-feature">
                <img
                  src="/images/notification-bell.png"
                  alt=""
                  className="bell-icon"
                />
                <p className="feature-txt">New Feature</p>
              </div>
              <div className="feature-desc">How to get Custom Diet Plan ?</div>
              <a href="/custom-diet-plan" className="customize-link">
                Customize
              </a>
            </div>
            <div className="fitness-item">
              <div className="new-feature">
                <img
                  src="/images/notification-bell.png"
                  alt=""
                  className="bell-icon"
                />
                <p className="feature-txt">New Feature</p>
              </div>
              <div className="feature-desc">How to get Custom Diet Plan ?</div>
              <a href="/custom-diet-plan" className="customize-link">
                Customize
              </a>
            </div>
            <div className="fitness-item">
              <div className="new-feature">
                <img
                  src="/images/notification-bell.png"
                  alt=""
                  className="bell-icon"
                />
                <p className="feature-txt">New Feature</p>
              </div>
              <div className="feature-desc">How to get Custom Diet Plan ?</div>
              <a href="/custom-diet-plan" className="customize-link">
                Customize
              </a>
            </div>
          </Slider>
          </div>
          {/* </div> */}
        </div>
      </div>
      <ul className="menus-list">
        <li className="menu-item">
          <a href="/products/"><img src="/images/dashboard_icon_w.png" alt="" className="menu-ic" />
          Home</a>
        </li>
        <li className="menu-item">
          <a href="/products/fashion/"><img src="/images/fashion_icon_w.png" alt="" className="menu-ic" />
          Fashion</a>
        </li>
        <li className="menu-item">
          <a href="/products/finance/"><img src="/images/rupee_icon_w.png" alt="" className="menu-ic" />
          Finance</a>
        </li>
        <li className="menu-item">
          <a href="/products/fitness/"><img src="/images/fitness_icon_w.png" alt="" className="menu-ic" />
          Fitness</a>
        </li>
        <li className="menu-item">
          <a href="/products/finance/my-investment/"><img src="/images/fitness_icon_w.png" alt="" className="menu-ic" />
          Investment</a>
        </li>
      </ul>
      <style jsx>
        {`
            .products-lnading-mweb-container {
                padding: 16px;
                background-color: #010612;
                font-family: Arial, sans-serif;
            }
                .user-notify-container {
                display: flex;
                justify-content: space-between;
                margin: 40px 0;
              
                align-items: center;
                }
        
    .user-icon-logo,  .notify-logo{width: 50px; height: 50px;
    padding: 5px;
    background: #001C3D;
    border-radius: 16px;}
    .notify-logo {padding: 12px;}

                .products-top {
                display: flex;
                flex-direction: column;

                align-items: flex-start;
                margin: 20px 10px;}

            .greeting-txt {
                font-size: 16px;
                color: #fff;
            }
                .user-nme {
                font-size: 36px;
                font-weight: bold;
                color: #fff;
            }
                
            .products-grid {
                display: grid;
                grid-template-columns: auto auto;
                gap: 5px;
            }

            .grid-item {
                background: #07101a;
                border: 1px solid #eee;
                border-radius: 36px;
                padding: 24px;
                text-align: center;
                margin: 5px;
            }
                .grid-item-first {
                grid-column: span 2;
                }
            .grid-btm{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 8px;
            }
                .product-nme {
                font-size: 16px;
                color: #fff;
                text-align: left;
            }
                .right-arr {
                width: 16px;
                height: 16px;
            }
               
                
                .product-icon {
                width: 48px;
                height: 48px;
                margin-bottom: 16px;
                padding: 10px;
                background: #001C3D;
                border-radius: 8px;
            }
               
           

            .menus-list {
  list-style: none;
  padding: 0;
  margin: 0;
  background: #171c28;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 8px;
  -webkit-overflow-scrolling: touch; /* smooth scroll on iOS */
  scrollbar-width: none; /* hide scrollbar on Firefox */
}

.menus-list::-webkit-scrollbar {
  display: none; /* hide scrollbar on Chrome/Safari */
}

            .menu-item {
                display: inline-block;
                align-items: center;
                padding: 10px;
                color: #fff;
                // border-bottom: 1px solid #eee;
            }
                .menu-item a {text-decoration: none; color: #fff;}

            .menu-ic {
            width: 22px;
            height: 22px;
                margin: 0 auto;
            }

            .top-perfoming-funds-container {
                background: transparent;
                padding: 16px;
                border-radius: 16px;
                border: 1px solid #eee;
                margin-top: 16px;
            }
                .top-performing-funds-container h4 {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 16px;
                color: #fff;
                background: #171C28;
            }
               


            .top-performing-ttl {
                margin-bottom: 12px;
                color: #fff;
            }

            .funds-list {
                list-style: none;
                padding: 0;
                height: 270px;
                overflow-y: auto;
            }

            .fund-item {
                display: flex;
                justify-content: space-between;
                padding: 12px;
                // border-bottom: 1px solid #eee;
                color: #fff;
            }

            // .amnt-roi {
            //     text-align: right;
            // }
                 .fund-name {
                 width: 58%;
                font-size: 14px;
                color: #fff;
            }
                .amnt {
                font-size: 14px;
                color: #fff;
                font-weight: bold;
            }
                .roi {
                font-size: 14px;
                color: #34A853;
            }
                .fashion-img-container {
                margin-top: 16px;
                
                padding: 16px;
                border-radius: 16px;
            }
                .fashion-ttl {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 16px;
                color: #fff;
            }
                .img-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
            }
                .img-item {
                width: 158px
                height: 158px
                overflow: hidden;
                border-radius: 8px;
            }
                .img-item img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
                .try-fitness-container {
                margin-block: 70px;
                padding: 16px;
                border-radius: 16px;
               

            }
                .try-fitness-ttl {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 16px;
                color: #fff;
            }
                .fitness-slider-wrapper {
                    overflow: hidden;
                    width: 100%;
                }

               .fitness-slider .slick-slide {
                    padding: 0 12px !important;
                    box-sizing: border-box;
                }

            .fitness-item {
                background: #92CCFF;
                padding: 16px;
                border-radius: 8px;
                width: 100%;
                height: 100%;
                // display: flex;
                // flex-direction: column;
                // align-items: center;
            }
                
               
                .new-feature {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                
            }
                .bell-icon {
                width: 13px;
                height: 13px;
            }
                .feature-txt {
                font-weight: bold;
                color: #fff;
                font-size: 10px;
                margin-left: 8px;
            }
                .feature-desc {
                // width: 180px;
                font-size: 16px;
                font-weight: bold;
                color: #fff;
                margin-block: 18px;
            }
                .customize-link {
                
                width: 110px;
                text-align: center;
                margin-top: 8px;
                padding: 8px 16px;
                color: #0080E8;
                background: #fff;
                border-radius: 8px;
                text-decoration: none;
                font-weight: bold;
            }
`}
      </style>
    </>
  );
}
