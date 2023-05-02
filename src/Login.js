import React from 'react'
import { useRef } from 'react';

function Login(){
    const usernameRef = useRef('null');
    const passwordRef = useRef('null');
    async function handleLogIn(){
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameRef,
                password: passwordRef
            })
        })
        const data = await response.json()
        console.log(data)
        if(data.error){
            alert(data.error)
        }else{
            window.location.href = "/home"
        }
    }
    return(
        // create a form for the user to login
        <div id='loginPage'>
            <div id='loginText'>Login</div>
            <form id="loginForm">
                <label for="username">Username</label>
                <input type="text" name="username" id="loginUsername" placeholder="Username" required ref={usernameRef}></input>
                <label for="password">Password</label>
                <input type="password" name="password" id="loginPassword" placeholder="Enter Password Here" required ref={passwordRef}></input>
                <button id="loginBtn" type="button" onClick={handleLogIn}>Log in</button>
                <a href="./signUp" id='signupLink'>Don't have an account? Sign up here.</a>
            </form>
            <div id="copyrightDate">2023</div>
        </div>
    )
}

export default Login