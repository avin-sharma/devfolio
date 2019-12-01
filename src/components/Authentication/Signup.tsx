import React, { useState } from "react";
const firebase = require("firebase")

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password != rePassword){
            alert("Passwords did not match!")
            return
        }
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(error: { code: any; message: any; }) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <label>
                Confirm Password:
                <input type="password" value={rePassword} onChange={e => setRePassword(e.target.value)}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Signup;