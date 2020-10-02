import React, { useContext } from 'react';
import './Sing.css'
import * as firebase from "firebase/app"
import "firebase/auth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import firebaseConfig from './FirebaseConfig';
import { GlobalData } from '../Main/Main';

firebase.initializeApp(firebaseConfig);
const Firebase = () => {
    const setLoginInfo = useContext(GlobalData).login[1]
    const collectLoginInfo = (displayName, email, photoURL) => {
        setLoginInfo({
            displayName: displayName,
            email: email,
            photoURL: photoURL
        })
    }
    const providerFunction = provider => {
        firebase.auth().signInWithPopup(provider).then(result => {
            const { displayName, email, photoURL } = result.user
            collectLoginInfo(displayName, email, photoURL)
        }).catch(error => {
            const { code, message, email, credential } = error
            console.log(code, "| |", message, "| |", email, "| |", credential)
        });
    }

    /*---------start---------google signIn area---------start---------*/
    const googleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        providerFunction(provider)
    }
    /*---------end---------google signIn area---------end---------*/

    /*---------start---------facebook signIn area---------start---------*/
    const facebookSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider()
        providerFunction(provider)
    }
    /*---------end---------facebook signIn area---------end---------*/

    /*---------start---------twitter signIn area---------start---------*/
    const twitterSignIn = () => {
        const provider = new firebase.auth.TwitterAuthProvider()
        providerFunction(provider)
    }
    /*---------end---------twitter signIn area---------end---------*/
    return (
        <section className="firebase-auth mt-4">
            <h4 className="mx-auto">Or continue with</h4>
            <div className="brand-icons d-flex justify-content-center">
                <span className="google-icon"><FontAwesomeIcon icon={faGoogle} onClick={googleSignIn} /></span>
                <span className="facebook-icon"><FontAwesomeIcon icon={faFacebook} onClick={facebookSignIn} /></span>
                <span className="twitter-icon"><FontAwesomeIcon icon={faTwitter} onClick={twitterSignIn} /></span>
            </div>
        </section>
    );
};

export default Firebase;