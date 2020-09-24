import React, { useEffect, useState } from 'react';
import './Confirm.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CancelIcon from '@material-ui/icons/Cancel';
import Items from '../Database/Items';
import NavBar from '../Header/NavBar';

const Confirm = () => {
    const [reload, setReload] = useState(false)
    const [addedToCart, setToCart] = useState(JSON.parse(localStorage.getItem('cart')))
    const [billingState, setBillingState] = useState({ tax: 5, deliveryFee: 0, totalItem: 0, subTotalPrice: 0 })
    const { tax, totalItem, deliveryFee, subTotalPrice } = billingState
    const totalPrice = ((subTotalPrice * tax) / 100 + deliveryFee) + subTotalPrice

    const [itemAmount, setItemAmount] = useState(addedToCart)
    const handelItemAmount = (e, i, rate, amount) => {
        e.preventDefault()
        if (itemAmount[i].amount > 0) {
            setItemAmount(
                [...itemAmount],
                itemAmount[i].price += itemAmount[i].rate * amount,
                itemAmount[i].amount += amount)
        }
    }
    const deleteItem = (itemId) => {
        setReload(true)
        setItemAmount(itemAmount.filter(item => item.id !== itemId))
    }
    useEffect(() => {
        setToCart(itemAmount)
        setBillingState({
            ...billingState,
            deliveryFee: 10,
            totalItem: addedToCart.reduce((sum, i) => { return sum + i.amount }, 0),
            subTotalPrice: addedToCart.reduce((sum, i) => { return sum + i.price }, 0)
        })
    }, [itemAmount, setReload])
    localStorage.setItem('cart', JSON.stringify(itemAmount))
    localStorage.setItem('cartTotalItems', totalItem)

    return (
        <>
            <NavBar />
            <section className="confirm mt-2">
                <div className="row w-75 w-md-100 mx-auto">
                    <div className="col-lg-6 d-flex flex-column">
                        <p className="delivery-detail">Edit Delivery Details</p>
                        <form className="d-flex flex-column">
                            <input type="text" placeholder="Enter Delivery Address" />
                            <input type="number" placeholder="Enter Mobile Number" />
                            <input type="text" placeholder="Enter Delivery Instructions" />
                            <input type="submit" value="Save & Continue" />
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <h6>From <strong>Gulistan Plaza Restaurant GPR</strong></h6>
                        <p className="m-0">Arriving in 20-30 min</p>
                        <p className="m-0">107 Rd No 8</p>
                        <form className="cart-form">
                            <div className="cart-item">
                                {
                                    itemAmount.map((item, index) => {
                                        return (
                                            <div key={item.id} className="row m-0 my-2 d-flex align-items-center">
                                                <div className="col-1" onClick={() => deleteItem(item.id)}>
                                                    <CancelIcon />
                                                </div>
                                                <div className="col-4">
                                                    <img className="w-100" src={require(`../../Resources/${Items[item.id - 1].image}`)} alt="Item Img" />
                                                </div>
                                                <div className="col-3">
                                                    <p className="m-0 font-italic">{item.name}</p>
                                                    <span className="font-weight-bold text-dark">${(item.price).toFixed(2)}</span>
                                                </div>
                                                <div className="col-4">
                                                    <div className="plus-minus">
                                                        <button className="minus" onClick={(e) => handelItemAmount(e, index, Items[item.id].price, -1)}><RemoveIcon /></button>
                                                        <span className="amount bg">{item.amount}</span>
                                                        <button className="plus" onClick={(e) => handelItemAmount(e, index, Items[item.id].price, 1)}><AddIcon /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="cart-calculation d-flex justify-content-center">
                                <div className="row">
                                    <div className="w-100 d-flex justify-content-between">
                                        <h5>Subtotal ({totalItem})items</h5><h6>${(subTotalPrice).toFixed(2)}</h6>
                                    </div>
                                    <div className="w-100 d-flex justify-content-between">
                                        <h5>Tax</h5><h6>{tax}%</h6>
                                    </div>
                                    <div className="w-100 d-flex justify-content-between">
                                        <h5>Delivery Fee</h5><h6>${deliveryFee}</h6>
                                    </div>
                                    <div className="w-100 d-flex justify-content-between">
                                        <h5>Total</h5><h6>${(totalPrice).toFixed(2)}</h6>
                                    </div>
                                </div>
                            </div>
                            <input className="w-100" type="submit" value="Place Order" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Confirm;