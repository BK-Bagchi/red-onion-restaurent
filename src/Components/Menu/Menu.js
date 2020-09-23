import React, { useState } from 'react';
import './Menu.css';
import Item from '../Database/Items';
import { useHistory } from "react-router-dom";

const Menu = () => {
    const history = useHistory();

    const [category, setCategory] = useState('Breakfast');
    const menuItem = Item.filter((item) => {
        return item.category === category;
    });
    const [menuStyle, setMenuStyle] = useState([
        { color: 'red', textDecoration: 'underline' },
        { color: 'black', textDecoration: 'none' },
        { color: 'black', textDecoration: 'none' }
    ])
    const menuSelector = (mealTime, index) => {
        setCategory(mealTime)
        for (let i = 0; i < 4; i++) {
            (i === index) ?
                setMenuStyle([...menuStyle], menuStyle[i] = { color: 'red', textDecoration: 'underline' }) :
                setMenuStyle([...menuStyle], menuStyle[i] = { color: 'black', textDecoration: 'none' })
        }
    }
    const decideCartPath = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart'))
        if (cartItems)
            history.push('/cart')
    }

    return (
        <section className="menu d-flex flex-column justify-content-center py-5">
            <ul className="menu-list d-flex justify-content-center">
                <li style={menuStyle[0]} onClick={() => menuSelector('Breakfast', 0)}>Breakfast</li>
                <li style={menuStyle[1]} onClick={() => menuSelector('Lunch', 1)}>Lunch</li>
                <li style={menuStyle[2]} onClick={() => menuSelector('Dinner', 2)}>Dinner</li>
            </ul>
            <div className="items mx-auto">
                {
                    menuItem.map((menu) => {
                        return (
                            <div key={menu.id} className="item" onClick={() => history.push(`/item/${menu.id}`)}>
                                <img src={require(`../../Resources/${menu.image}`)} alt="Item Img" />
                                <p className="m-0">{menu.name}</p>
                                <span>{menu.shortDescription}</span>
                                <h5>${menu.price}</h5>
                            </div>
                        )
                    })
                }
            </div>
            <button className="checkout mx-auto" onClick={decideCartPath}>Checkout Your Food</button>
        </section>
    );
};

export default Menu;