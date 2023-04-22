import React from 'react'

function Login(){
    return(
        // create a form for the user to login
        <div>
            <div>Login</div>
            <form id="loginForm">
                <label for="username">Username</label>
                <input type="text" name="username" id="loginUsername" placeholder="Username" required></input>
                <label for="password">Password</label>
                <input type="password" name="password" id="loginPassword" placeholder="Enter Password Here" required></input>
                <button id="loginBtn" type="button" onclick="handleLoginAccount()">Log in</button>
            </form>
            <a href="./signUp.html">Don't have an account? Sign up here.</a>
            <div id="copyrightDate">2023</div>
        </div>
    )
}
export default Login
