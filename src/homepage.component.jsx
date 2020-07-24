import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <h1>Welcome to my Homepage</h1>
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <div className="title">Hats</div>
                    <span className="subtitle">ShopNow</span>

                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className="title">Jackets</div>
                    <span className="subtitle">ShopNow</span>

                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className="title">Sneckers</div>
                    <span className="subtitle">ShopNow</span>

                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className="title">Womens</div>
                    <span className="subtitle">ShopNow</span>

                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className="title">Mens</div>
                    <span className="subtitle">ShopNow</span>

                </div>
            </div>
        </div>

    </div>
);

export default HomePage;