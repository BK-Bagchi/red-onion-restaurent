import React from 'react';
import './Menu.css';
import Image from '../../Resources/lunch/lunch1.png';

const Menu = () => {
    return (
        <section className="menu d-flex flex-column justify-content-center py-5">
            <ul className="menu-list d-flex justify-content-center">
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
            </ul>
            <div className="items mx-auto">
                <div className="item">
                    <img src={Image} alt="" />
                    <p className="m-0">Name</p>
                    <span>Description</span>
                    <h5>$Price</h5>
                </div>
                <div className="item">
                    <img src={Image} alt="" />
                    <p className="m-0">Name</p>
                    <span>Description</span>
                    <h5>$Price</h5>
                </div>
                <div className="item">
                    <img src={Image} alt="" />
                    <p className="m-0">Name</p>
                    <span>Description</span>
                    <h5>$Price</h5>
                </div>
                <div className="item">
                    <img src={Image} alt="" />
                    <p className="m-0">Name</p>
                    <span>Description</span>
                    <h5>$Price</h5>
                </div>
                <div className="item">
                    <img src={Image} alt="" />
                    <p className="m-0">Name</p>
                    <span>Description</span>
                    <h5>$Price</h5>
                </div>
            </div>
            <button className="checkout mx-auto" disabled>Checkout Your Food</button>
        </section>
    );
};

export default Menu;