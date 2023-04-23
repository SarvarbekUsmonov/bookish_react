import React, { useState, useRef, useEffect } from 'react';

function Settings() {
  const refoldPassword = useRef(null);
  const refnewPassword = useRef(null);
  const formForPassword = useRef(null);
  
  const handleNewPassword = async () => {
    const response = await fetch('http://localhost:4000/update/password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ oldPassword: refoldPassword.current.value, newPassword: refnewPassword.current.value })
    });
    
    console.log(response.status)
    if (response.status === 200) {
      window.location.href = '/index';
    } else {
      console.log("The old password is incorrect")
    }
  }

  useEffect(async () => {
    // your code here
  }, []);

  return (
    <div>
      <form ref={formForPassword}>
        <label htmlFor="oldPassword">Old Password</label>
        <input type="password" name="oldPassword" ref={refoldPassword} />
        <label htmlFor="newPassword">New Password</label>
        <input type="password" name="newPassword" ref={refnewPassword} />
        <button type="button" onClick={handleNewPassword}>Update Password</button>
      </form>
      <form action="/update/avatar" method="post" enctype="multipart/form-data">
        <label htmlFor="newAvatar">Change my avatar</label>
        <input type="file" name="newAvatar" accept="image/*" required />
        <button>Update Profile Picture</button>
      </form>
    </div>
  );
}

export default Settings;
