import React, { useState } from 'react';
import './Menu.css';
import Image from '../../Resources/lunch/lunch1.png';
import Item from '../Database/Items';

const Menu = () => {
    const [category, setCategory] = useState('Breakfast');
    const menuItem = Item.filter((item) => {
        return item.category === category;
    });
    // console.log(menuItem);

    return (
        <section className="menu d-flex flex-column justify-content-center py-5">
            <ul className="menu-list d-flex justify-content-center">
                <li onClick={() => setCategory('Breakfast')}>Breakfast</li>
                <li onClick={() => setCategory('Lunch')}>Lunch</li>
                <li onClick={() => setCategory('Dinner')}>Dinner</li>
            </ul>
            <div className="items mx-auto">
                {
                    menuItem.map((menu) => {
                        {/* console.log(menu.image); */ }
                        return (
                            <div key={menu.id} className="item">
                                <img src={menu.image} alt="Item Img" />
                                <p className="m-0">{menu.name}</p>
                                <span>{menu.shortDescription}</span>
                                <h5>${menu.price}</h5>
                            </div>
                        )
                    })
                }
            </div>
            <button className="checkout mx-auto" disabled>Checkout Your Food</button>
        </section>
    );
};

export default Menu;