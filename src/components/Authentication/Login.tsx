import React, { useState } from "react";
import {navigate} from "gatsby";
const firebase = require("firebase");

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error: { code: any; message: any; }) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });
          navigate("app/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        
    )
}

export default Login;