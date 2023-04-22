import React from 'react'
// import css, login.css
import "./SignUp.css"

function SignUp(){
    return(
        // create a form for the user to login
        <div>
            <div class="header">Create Account</div>
            <form id="signupForm">
                <label for="username">Username</label>
                <input type="text" name="username" id="signupUsername" placeholder="Username"></input>
                <label for="password">Password</label>
                <input type="password" name="password" id="signupPassword" placeholder="Enter Password Here"></input>
                <button type="button">Sign up</button>
            </form>
            <a href="./index.html">Login</a>
            <div id="copyrightDate">2023</div>
        </div>
    )
}
export default SignUp