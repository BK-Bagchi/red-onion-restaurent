import React from 'react';
import './Sing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Firebase = () => {
    return (
        <section className="firebase-auth mt-4">
            <h4 className="mx-auto">Or continue with</h4>
            <div className="brand-icons d-flex justify-content-center">
                <span className="google-icon"><FontAwesomeIcon icon={faGoogle} /></span>
                <span className="facebook-icon"><FontAwesomeIcon icon={faFacebook} /></span>
                <span className="twitter-icon"><FontAwesomeIcon icon={faTwitter} /></span>
            </div>
        </section>
    );
};

export default Firebase;