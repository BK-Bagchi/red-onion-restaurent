import React from 'react';
import './Confirm.css';

const Confirm = () => {
    return (
        <section className="confirm">
            <div className="row w-75 w-md-100 mx-auto">
                <div className="col-lg-6 d-flex flex-column">
                    <p className="delivery-detail">Edit Delivery Details</p>
                    <form className="d-flex flex-column">
                        <input type="text" placeholder="Enter" />
                        <input type="text" placeholder="Enter" />
                        <input type="text" placeholder="Enter" />
                        <input type="text" placeholder="Enter" />
                        <input type="text" placeholder="Enter" />
                        <input type="submit" value="Save & Continue" />
                    </form>
                </div>
                <div className="col-lg-6">
                    <h6>From <strong>Gulistan Plaza Restaurant GPR</strong></h6>
                    <p className="m-0">Arriving in 20-30 min</p>
                    <p className="m-0">107 Rd No 8</p>
                    <input type="submit" value="Save & Continue" />
                </div>
            </div>
        </section>
    );
};

export default Confirm;