import React, { useEffect, useState } from 'react';
import './Menu.css';
import About from '../About/About';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const Menu = () => {
    const classes = useStyles();
    const history = useHistory();

    const [category, setCategory] = useState('Breakfast');
    const [loading, setLoading] = useState(true);
    const [Item, setItem] = useState([]);
    useEffect(() => {
        fetch('https://calm-tor-38553.herokuapp.com/menuItems')
            .then(res => res.json())
            .then(data => {
                setItem(data)
                setLoading(false)
            })
    }, [])
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
        if (cartItems.length)
            history.push('/cart')
    }

    return (
        <>
            <Header />
            <section className="menu d-flex flex-column justify-content-center py-5">
                <ul className="menu-list d-flex justify-content-center">
                    <li style={menuStyle[0]} onClick={() => menuSelector('Breakfast', 0)}>Breakfast</li>
                    <li style={menuStyle[1]} onClick={() => menuSelector('Lunch', 1)}>Lunch</li>
                    <li style={menuStyle[2]} onClick={() => menuSelector('Dinner', 2)}>Dinner</li>
                </ul>
                <div className="items mx-auto">
                    {
                        loading ?
                            <div className={classes.root}>
                                <CircularProgress />
                            </div>
                            :
                            <>
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
                            </>
                    }
                </div>
                <button className="checkout mx-auto" onClick={decideCartPath}>Checkout Your Food</button>
            </section>
            <ChooseUs />
            <About />
        </>
    );
};

export default Menu;