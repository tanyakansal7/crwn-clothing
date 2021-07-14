import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
 const config={
    apiKey: "AIzaSyC94slHbhzeGxhZQ4DiLxjYgZZpfG767-w",
    authDomain: "crwn-db-6ccb1.firebaseapp.com",
    projectId: "crwn-db-6ccb1",
    storageBucket: "crwn-db-6ccb1.appspot.com",
    messagingSenderId: "833508368604",
    appId: "1:833508368604:web:d57506a2f4ec2bfa951419",
    measurementId: "G-G9GYKYPNCZ"
 };
 export const createUserProfileDocument= async(userAuth, additionalData)=>{
    if(!userAuth) return;
    
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
    
    if(!snapShot.exists){
       const {displayName,email}=userAuth;
       const createdAt=new Date();

       try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData

          })
       }catch(error){
            console.log('error creating user',error.message);
       }
    }
    return userRef;
  };
firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;