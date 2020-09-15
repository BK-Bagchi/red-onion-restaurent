import React from 'react';
import './ItemDetail.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Item from '../Database/Items';

import { useHistory, useParams } from 'react-router-dom';

const ItemDetail = () => {
    let { id } = useParams();
    const history = useHistory();
    id = Number(id)
    const thisItem = Item.filter((item) => {
        return item.id === id;
    })

    return (
        thisItem.map((item) => {
            return (
                <section key={item.id} className="item-detail mx-auto py-4">
                    <div className="row">
                        <div className="col-md-6 order-md-last d-flex justify-content-center">
                            <img className="item-img" src={require(`../../Resources/${item.image}`)} alt="Item Img" />
                        </div>
                        <div className="col-md-6 order-md-first d-flex flex-column justify-content-center">
                            <h1>{item.name}</h1>
                            <p className="m-0">{item.fullDescription}</p>
                            <div className="d-flex my-3">
                                <h3>${item.price}</h3>
                                <div className="plus-minus ml-4">
                                    <button className="minus"><RemoveIcon /></button>
                                    <span className="amount">1</span>
                                    <button className="plus"><AddIcon /></button>
                                </div>
                            </div>
                            <div className="d-flex">
                                <button className="back mr-4" onClick={() => history.push("/")}>Back</button>
                                <button className="add d-flex justify-content-center align-items-center"><ShoppingCartIcon />&nbsp; Add</button>
                            </div>
                        </div>
                    </div>
                </section>
            )
        })
    );
};

export default ItemDetail;
