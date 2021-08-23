import React, {useEffect, useState} from 'react'
import firebase from 'firebase'
import  StyledFirebaseAuth  from 'react-firebaseui/FirebaseAuth'
import { Redirect, useHistory } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import axios from 'axios';


var uiconfig = {
    signInFlow: 'popup',
    signInSuccessUrl:'/',
    signInOptions : [
        firebase.auth.EmailAuthProvider.PROVIDER_ID],
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {

            return true;
          }
    }
};

const signOut = () => {
    firebase.auth().signOut().then(function(){
        console.log("succesful signOut");
    }).catch(() => {
        console.error("error signout");
    })
}



const Signup = () => {
    const {history} = useHistory()
    useEffect(() => {
        const authOberver = firebase.auth().onAuthStateChanged((user) => {
            setUser(user)
            
        });
        return authOberver
    })
    const [user, setUser] = useState(null)
    // if(user){
    //     console.log(user);
    //     axios.post('http://localhost:4000/register', {email:user.email})
    // }    
    return (
        <>
            <div>Signin / Register</div>
            <StyledFirebaseAuth uiConfig={uiconfig} firebaseAuth={firebase.auth()}></StyledFirebaseAuth>
        </>
    )
}

export {signOut}
export default Signup; 
