import React from 'react';
import './ItemDetail.css';
import Image from '../../Resources/lunch/lunch1.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ItemDetail = () => {
    return (
        <section className="item-detail mx-auto py-4">
            <div className="row">
                <div className="col-md-6 order-md-last d-flex justify-content-center">
                    <img className="item-img" src={Image} alt="Item Img" />
                </div>
                <div className="col-md-6 order-md-first d-flex flex-column justify-content-center">
                    <h1>Light Break first</h1>
                    <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officiis quidem quas ducimus ut veritatis labore autem saepe animi sit?</p>
                    <div className="d-flex my-3">
                        <h3>$55</h3>
                        <div className="plus-minus ml-4">
                            <button className="minus"><RemoveIcon /></button>
                            <span className="amount">1</span>
                            <button className="plus"><AddIcon /></button>
                        </div>
                    </div>
                    <button className="add d-flex justify-content-center align-items-center"><ShoppingCartIcon />&nbsp; Add</button>
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;