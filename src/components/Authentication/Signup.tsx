import React, { useState } from "react";
import {navigate} from "gatsby";

import {getFirebase} from '../../utility'
const firebase = getFirebase()

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("")

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        if (password != rePassword){
            alert("Passwords did not match!")
            return
        }
        await firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(error: { code: any; message: any; }) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });
          navigate("/app/login")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            <br/>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <br/>
            <label>
                Confirm Password:
                <input type="password" value={rePassword} onChange={e => setRePassword(e.target.value)}/>
            </label>
            <br/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Signup;