

export default function ProductsLandingPageMweb() {
    return (
        <>
        <div className="products-lnading-mweb-container">
            <div className="products-top">
                <h4 className="greeting-txt">Good Morning,</h4>
                <h1 className="user-nme">Salim!</h1>
            </div>

            <div className="products-grid">
                <div className="grid-item grid-item-first">
                    <img src={"/images/fitness_icon_w.png"} alt="" className="product-icon" />
                    <div className="grid-btm">
                        <p className="product-nme"><strong>Finance</strong> Finity</p>
                        <img src={"/images/right-arr.png"} alt="" className="right-arr" />
                    </div>
                </div>
                <div className="grid-item">
                    <img src={"/images/fitness_icon_w.png"} alt="" className="product-icon" />
                    <div className="grid-btm">
                        <p className="product-nme"><strong>Finance</strong> Finity</p>
                        <img src={"/images/right-arr.png"} alt="" className="right-arr" />
                    </div>
                </div>
                <div className="grid-item">
                    <img src={"/images/fitness_icon_w.png"} alt="" className="product-icon" />
                    <div className="grid-btm">
                        <p className="product-nme"><strong>Finance</strong> Finity</p>
                        <img src={"/images/right-arr.png"} alt="" className="right-arr" />
                    </div>
                </div>
            </div>

            <ul className="menus-list">
                <li className="menu-item">
                    <img src="/images/dashboard_icon_w.png" alt="" className="menu-ic" />
                    Home
                </li>
                <li className="menu-item">
                    <img src="/images/fitness_icon_w.png" alt="" className="menu-ic" />
                    Fitness
                </li>
                <li className="menu-item">
                    <img src="/images/fitness_icon_w.png" alt="" className="menu-ic" />
                    Home
                </li>
                <li className="menu-item">
                    <img src="/images/fitness_icon_w.png" alt="" className="menu-ic" />
                    Home
                </li>
                <li className="menu-item">
                    <img src="/images/fitness_icon_w.png" alt="" className="menu-ic" />
                    Home
                </li>
                <li className="menu-item">
                    <img src="/images/fitness_icon_w.png" alt="" className="menu-ic" />
                    Home
                </li>
                <li className="menu-item">
                    <img src="/images/fitness_icon_w.png" alt="" className="menu-ic" />
                    Home
                </li>
            </ul>

            <div className="top-perfoming-funds-container">
                <h4 className="top-performing-ttl">Top Performing Funds</h4>

                <ul className="funds-list">
                    <li className="fund-item">
                        <div className="fund-name">
                            Motilal Oswal MidCap Fund- Direct Plan- Growth
                        </div>
                        <div className="amnt-roi">
                            <p className="amnt">31,245</p>
                            <p className="roi">ROI <strong>30%</strong></p>
                        </div>
                    </li>
                    <li className="fund-item">
                        <div className="fund-name">
                            Motilal Oswal MidCap Fund- Direct Plan- Growth
                        </div>
                        <div className="amnt-roi">
                            <p className="amnt">31,245</p>
                            <p className="roi">ROI <strong>30%</strong></p>
                        </div>
                    </li>
                    <li className="fund-item">
                        <div className="fund-name">
                            Motilal Oswal MidCap Fund- Direct Plan- Growth
                        </div>
                        <div className="amnt-roi">
                            <p className="amnt">31,245</p>
                            <p className="roi">ROI <strong>30%</strong></p>
                        </div>
                    </li>
                    <li className="fund-item">
                        <div className="fund-name">
                            Motilal Oswal MidCap Fund- Direct Plan- Growth
                        </div>
                        <div className="amnt-roi">
                            <p className="amnt">31,245</p>
                            <p className="roi">ROI <strong>30%</strong></p>
                        </div>
                    </li>
                    <li className="fund-item">
                        <div className="fund-name">
                            Motilal Oswal MidCap Fund- Direct Plan- Growth
                        </div>
                        <div className="amnt-roi">
                            <p className="amnt">31,245</p>
                            <p className="roi">ROI <strong>30%</strong></p>
                        </div>
                    </li>
                    <li className="fund-item">
                        <div className="fund-name">
                            Motilal Oswal MidCap Fund- Direct Plan- Growth
                        </div>
                        <div className="amnt-roi">
                            <p className="amnt">31,245</p>
                            <p className="roi">ROI <strong>30%</strong></p>
                        </div>
                    </li>
                </ul>

            </div>

           

        </div>
         <style jsx> {`
            .products-lnading-mweb-container {
                padding: 16px;
                background-color: #010612;
                font-family: Arial, sans-serif;
            }
                .products-top {
                display: flex;
                flex-direction: column;

                align-items: flex-start;}
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
                background: #001C3D;
                border: 1px solid #eee;
                border-radius: 8px;
                padding: 12px;
                text-align: center;
            }
                .grid-item-first {
                grid-column: span 2;
                }
            .grid-btm {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 8px;
            }
                .product-nme {
                font-size: 16px;
                color: #fff;
            }
                .right-arr {
                width: 16px;
                height: 16px;
            }
               
                
                .product-icon {
                width: 48px;
                height: 48px;
                margin-bottom: 8px;
                background: #001C3D;
                border-radius: 5%;
            }
               
           

            .menus-list {
                list-style: none;
                padding: 0;
                background: #171C28;
                overflow: scroll;
                display: flex;
                flex-wrap: nowrap;
                gap: 8px;
                margin: 16px 0;

            }

            .menu-item {
                display: inline-block;
                align-items: center;
                padding: 12px 16px;
                color: #fff;
                // border-bottom: 1px solid #eee;
            }

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
            `}</style>
        </>
    );
}