import React, { useRef } from "react";
import './Login.css';


function Login(){
    const usernameRef = useRef('null');
    const passwordRef = useRef('null');
    async function handleLoginAccount(){
        const username = usernameRef.value
        const password = passwordRef.value
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const data = await response.json()
        if(data.error){
            alert(data.error)
        }else{
            window.location.href = "./index.html"
        }
        
    }
    return(
        // create a form for the user to login
        <div>
            <div>Login</div>
            <form id="loginForm">
                <label for="username">Username</label>
                <input type="text" name="username" id="loginUsername" ref={usernameRef} placeholder="Username" required></input>
                <label for="password">Password</label>
                <input type="password" name="password" id="loginPassword" ref={passwordRef} placeholder="Enter Password Here" required></input>
                <button id="loginBtn" type="button" onClick = {handleLoginAccount}>Log in</button>
            </form>
            <a href="./SignUp.html">Don't have an account? Sign up here.</a>
            <div id="copyrightDate">2023</div>
        </div>
    )
}

export default Login
