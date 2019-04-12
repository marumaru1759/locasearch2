import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import dotenv from 'dotenv';

const config = {
	apiKey: process.env.FB_apiKey,
    authDomain: process.env.FB_authDomain,
    databaseURL: process.env.FB_databaseURL,
    projectId: process.env.FB_projectId,
    storageBucket: process.env.FB_storageBucket,
    messagingSenderId: process.env.FB_messagingSenderId
};

export const firebaseapp = firebase.initializeApp(config);



