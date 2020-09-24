import React, { useState } from 'react';
import './Confirm.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Items from '../Database/Items';
import NavBar from '../Header/NavBar';

const Confirm = () => {
    const addedToCart = JSON.parse(localStorage.getItem('cart'))
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
    localStorage.setItem('cart', JSON.stringify(itemAmount))

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
                                                <div className="col-md-4">
                                                    <img className="w-100" src={require(`../../Resources/${Items[item.id].image}`)} alt="Item Img" />
                                                </div>
                                                <div className="col-md-4">
                                                    <p className="m-0 font-italic">{item.name}</p>
                                                    <span className="font-weight-bold text-dark">${(item.price).toFixed(2)}</span>
                                                </div>
                                                <div className="col-md-4">
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
                            <input className="w-100" type="submit" value="Place Order" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Confirm;