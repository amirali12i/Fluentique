import React, { useState } from 'react';
import './SignUpForm.css'; // Make sure to create and import the CSS for styling

const SignUpForm = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({...userDetails, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here, like sending data to your backend server
    console.log(userDetails);
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={userDetails.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={userDetails.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={userDetails.password} onChange={handleChange} />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
