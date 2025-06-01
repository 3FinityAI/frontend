import React from 'react';
import fashionlogo from '../../public/images/fashion-logo.png';
import fitnesslogo from '../../public/images/fitness-logo.png';
import financelogo from '../../public/images/finance-logo.png';


export default function ProductsLandingPage() {
    return (
        <>
        <div className="products-landing-page">
            <h1>Hey <strong>Salim</strong></h1>
            <p>What do you feel like doing today ?</p>
            {/* Add more content or components as needed */}
            <div className="products-lists">
                <div className="product-item">
                    <img className="product-img" src={fitnesslogo?.src} alt="" />
                    <h4 className="product-title">Future <span>Fit</span></h4>
                    <p className="product-desc">Discover our Future Fit products designed to enhance your fitness journey.</p>
                    <button className="product-button">Explore</button>
                </div>
                <div className="product-item">
                    <img className="product-img" src={fashionlogo?.src} alt="" />
                    <h4 className="product-title">Future <span>Fit</span></h4>
                    <p className="product-desc">Discover our Future Fit products designed to enhance your fitness journey.</p>
                    <button className="product-button">Explore</button>
                </div>
                <div className="product-item">
                    <img className="product-img" src={financelogo?.src} alt="" />
                    <h4 className="product-title">Future <span>Fit</span></h4>
                    <p className="product-desc">Discover our Future Fit products designed to enhance your fitness journey.</p>
                    <button className="product-button">Explore</button>
                </div>
            </div>
        </div>
        <style jsx>{`
            .products-landing-page {
                text-align: center;
                padding: 20px;
                background-color: transparent;
                color: #fff;
            }
            .products-lists {
                display: flex;
                justify-content: center;
                gap: 20px;
            }
            .product-item {
                background-color: #ccc;
                border-radius: 8px;
                padding: 15px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                width: 313px;
            }
            .product-img {
                width: 100%;
                height: auto;
            }
            .product-title {
                text-align: left;
                color: #0D0D0D;
                font-size: 1.2em;
                font-weight: bold;
                margin-top: 10px;
            }
                .product-title span {
                font-weight: normal;
                }
            .product-desc {
                text-align: left;
                font-size: 0.9em;
                color: #0D0D0D;
            }
            .product-button {
                width: 100%;
                margin-top: 10px;
                padding: 10px 15px;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
                .product-button:hover {
                background-color: #0056b3;
                }
            @media (max-width: 768px) {
                .products-lists {
                    flex-direction: column;
                    align-items: center;
                    }
                .product-item {
                    width: 100%;
                    max-width: 300px;
                    }
                .product-title {
                    font-size: 1.1em;
                    }
                .product-desc {
                    font-size: 0.85em;
                    }
                .product-button {
                    width: 100%;
                    }
            }
        `}</style>
        </>
    );
}