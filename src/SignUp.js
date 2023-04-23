import React, { useRef, useEffect } from "react";
import './Login.css'

function SignUp(){
    const usernameRef1 = useRef('null');
    const passwordRef1 = useRef('null');
    console.log('signup')
    console.log(usernameRef1.current.value)
    console.log(passwordRef1.current.value)
    async function handleSignUpAccount(){
        console.log(usernameRef1.current.value)
        console.log(passwordRef1.current.value)
        useEffect(() => {
        fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: usernameRef1.current.value,
            password: passwordRef1.current.value
        }).then(
            response => response.json()
        )
    })
    usernameRef1.current.value = ''
    passwordRef1.current.value = ''
    const data = response.json()
    console.log(data)
    if(data.error){
        alert(data.error)
    }else{
        alert(data.message)
    }
  }, []);
        
    }

    return(
        // create a form for the user to login
        <div>
            <div class="header">Create Account</div>
            <form id="signupForm">
                <label for="username">Username</label>
                <input type="text" name="username" ref={usernameRef1} id="signupUsername" placeholder="Username"></input>
                <label for="password">Password</label>
                <input type="password" name="password" ref={passwordRef1} id="signupPassword" placeholder="Enter Password Here"></input>
                <button type="button" onClick={handleSignUpAccount}>Sign up</button>
            </form>
            <a href="./login">Login</a>
            <div id="copyrightDate">2023</div>
        </div>
    )
}
export default SignUp