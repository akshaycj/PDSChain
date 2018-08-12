import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyA8Co1eho_YiS2FX3Ctlv_VHiMWmei5gBU",
  authDomain: "hack-724f2.firebaseapp.com",
  databaseURL: "https://hack-724f2.firebaseio.com",
  projectId: "hack-724f2",
  storageBucket: "",
  messagingSenderId: "781493695947"
};
firebase.initializeApp(config);

export const db  = firebase.database();
