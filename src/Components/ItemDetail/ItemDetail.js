import React, { useEffect, useState } from 'react';
import './ItemDetail.css';
import About from '../About/About';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useHistory, useParams } from 'react-router-dom';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    root2: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    }
}));


let cart = []
const ItemDetail = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const [itemAmount, setItemAmount] = useState(1);

    let { id } = useParams();
    const history = useHistory();
    id = Number(id)

    const [Item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://calm-tor-38553.herokuapp.com/menuItems')
            .then(res => res.json())
            .then(data => {
                setItem(data)
                setLoading(false)
            })
    }, [])
    const thisItem = Item.filter(item => item.id === id)

    let itemPrice = 10
    if (thisItem.length) {
        itemPrice = thisItem[0].price * itemAmount;
        itemPrice = Number(itemPrice.toFixed(2));
    }

    const addToCart = (item) => {
        handleClick()
        const { id, name } = item
        const order = {
            id: id,
            name: name,
            rate: thisItem[0].price,
            price: itemPrice,
            amount: itemAmount
        }
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        }

        const itemExists = cart.find(item => item.id === order.id)
        if (itemExists) {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === itemExists.id) {
                    cart[i].price += order.price
                    cart[i].amount += order.amount
                    break
                }
            }
        }
        else {
            cart.push(order)
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        localStorage.setItem('cartTotalItems', (JSON.parse(localStorage.getItem('cartTotalItems')) + order.amount))
    }
    return (
        <>
            <Header />
            {
                loading ?
                    <div className={classes.root2}>
                        <CircularProgress />
                    </div>
                    :
                    <>
                        {
                            thisItem.map((item) => {
                                return (
                                    <section key={item.id} className={`item-detail mx-auto py-4${classes.root}`}>
                                        <div className="row">
                                            <div className="col-md-6 order-md-last d-flex justify-content-center">
                                                <img className="item-img" src={require(`../../Resources/${item.image}`)} alt="Item Img" />
                                            </div>
                                            <div className="col-md-6 order-md-first d-flex flex-column justify-content-center">
                                                <h1>{item.name}</h1>
                                                <p className="m-0">{item.fullDescription}</p>
                                                <div className="d-flex my-3">
                                                    <h3>${itemPrice}</h3>
                                                    <div className="plus-minus ml-4">
                                                        <button className="minus" onClick={() => setItemAmount(itemAmount - 1)}><RemoveIcon /></button>
                                                        <span className="amount">{itemAmount}</span>
                                                        <button className="plus" onClick={() => setItemAmount(itemAmount + 1)}><AddIcon /></button>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <button className="back mr-4" onClick={() => history.push("/")}>Back</button>
                                                    <Button variant="outlined" className="add d-flex justify-content-center align-items-center" onClick={() => addToCart(item)}><ShoppingCartIcon />&nbsp; Add</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                            <Alert onClose={handleClose} severity="success">
                                                Item added to cart successfully
                        </Alert>
                                        </Snackbar>
                                    </section>
                                )
                            })
                        }
                    </>
            }
            <ChooseUs />
            <About />
        </>
    );
};

export default ItemDetail;
