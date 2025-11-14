import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="home-page">
            <section className="hero">
                <div className="content">
                    <h1>
                        Welcome to <span className="brand">ShopSphere</span>
                    </h1>
                    <p>
                        Your one-stop destination for products, deals, and a seamless
                        shopping experience — powered by Micro Frontends.
                    </p>

                    <div className="actions">
                        <Link to="/products" className="btn primary">
                            Explore Products
                        </Link>
                        <Link to="/cart" className="btn secondary">
                            View Cart
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
