// Initialize Firebase
var config = {
	apiKey: "AIzaSyBQyaM5Bz692gXFmvlVHYs37jjshoVaExw",
    authDomain: "testq-e5302.firebaseapp.com",
    databaseURL: "https://testq-e5302.firebaseio.com",
    projectId: "testq-e5302",
    storageBucket: "testq-e5302.appspot.com",
    messagingSenderId: "511351722874"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();
