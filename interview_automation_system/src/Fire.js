import * as firebase from 'firebase';
// npm install firebase --save
var config = {
  apiKey: "AIzaSyBZspSFG73WIoOuaagMO_pzUtNNISLCGlw",
  authDomain: "reactproject-21a52.firebaseapp.com",
  databaseURL: "https://reactproject-21a52.firebaseio.com",
  projectId: "reactproject-21a52",
  storageBucket: "reactproject-21a52.appspot.com",
  messagingSenderId: "687797122389"
}
const fire = firebase.initializeApp(config);
export default fire;

