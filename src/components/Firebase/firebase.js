import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDTaSKi-xYRPF3z0giXd3t1tPFpwwdDjHg",
  authDomain: "neappoli-technical-test.firebaseapp.com",
  databaseURL: "https://neappoli-technical-test.firebaseio.com",
  projectId: "neappoli-technical-test",
  storageBucket: "neappoli-technical-test.appspot.com",
  messagingSenderId: "929799559966",
  appId: "1:929799559966:web:509f3d77d6dcbafcea870f",
  measurementId: "G-70N77LKD8M",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
