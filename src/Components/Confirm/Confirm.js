import React, { useContext, useEffect, useState } from 'react';
import './Confirm.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CancelIcon from '@material-ui/icons/Cancel';
// import Items from '../Database/Items';
import NavBar from '../Header/NavBar';
import { useHistory } from 'react-router-dom';
import { GlobalData } from '../Main/Main';

const Confirm = () => {
    const history = useHistory()
    const orderInfo = useContext(GlobalData).order[1];
    const [deliveryDetails, setDeliveryDetails] = useState({
        address: '', number: '', instruction: ''
    })
    const [errorMessage, setErrorMessage] = useState({
        address: '', number: '', instruction: ''
    })
    const [loading, setLoading] = useState(true)
    const [Items, setItems] = useState([])
    useEffect(() => {
        fetch('https://calm-tor-38553.herokuapp.com/menuItems')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            })
    }, [])


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
        setItemAmount(itemAmount.filter(item => item.id !== itemId))
    }
    const handelDeliveryForm = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name === 'address') {
            (/[a-zA-Z]{6,}/.test(value) || value.length >= 8) ?
                crossCheck('address', value, 'address', '') :
                crossCheck('address', '', 'address', 'Enter Address in Detail')
        }
        else if (name === 'mobile') {
            (value.length === 11) ?
                crossCheck('number', value, 'number', '') :
                crossCheck('number', '', 'number', 'Enter Valid Phone Number')
        }
        else if (name === 'instruction') {
            setDeliveryDetails({ ...deliveryDetails, instruction: value })
        }
    }
    const crossCheck = (detailKey, detailMessage, errKey, errMessage) => {
        setDeliveryDetails({ ...deliveryDetails, [detailKey]: detailMessage })
        setErrorMessage({ ...errorMessage, [errKey]: errMessage })
    }
    const submitDeliveryForm = (e) => {
        e.preventDefault()
        const { address, number } = deliveryDetails
        if (address && number) {
            history.push('/finished')
            orderInfo(deliveryDetails)
        }
        else
            setErrorMessage({ ...errorMessage, instruction: 'Please fill the delivery details' })
    }


    useEffect(() => {
        setToCart(itemAmount)
        setBillingState({
            ...billingState,
            deliveryFee: 10,
            totalItem: addedToCart.reduce((sum, i) => { return sum + i.amount }, 0),
            subTotalPrice: addedToCart.reduce((sum, i) => { return sum + i.price }, 0)
        })
    }, [itemAmount])
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
                            <input name="address" type="text" placeholder="Enter Delivery Address" onBlur={handelDeliveryForm} />
                            <span className="error">{errorMessage.address}</span>

                            <input name="mobile" type="number" placeholder="Enter Mobile Number" onBlur={handelDeliveryForm} />
                            <span className="error">{errorMessage.number}</span>

                            <textarea name="instruction" rows="10" cols="50" placeholder="Enter delivery instruction" onBlur={handelDeliveryForm}  ></textarea>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <h6>From <strong>Gulistan Plaza Restaurant GPR</strong></h6>
                        <p className="m-0">Arriving in 20-30 min</p>
                        <p className="m-0">107 Rd No 8</p>
                        <form className="cart-form" onSubmit={submitDeliveryForm}>
                            <div className="cart-item">
                                {
                                    loading ?
                                        <h6>Loading...</h6> :
                                        <>
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
                                                                    <button className="minus" onClick={(e) => handelItemAmount(e, index, Items[item.id - 1].price, -1)}><RemoveIcon /></button>
                                                                    <span className="amount bg">{item.amount}</span>
                                                                    <button className="plus" onClick={(e) => handelItemAmount(e, index, Items[item.id - 1].price, 1)}><AddIcon /></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </>
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
                            <span className="error">{errorMessage.instruction}</span>
                            <input className="w-100" type="submit" value="Place Order" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Confirm;