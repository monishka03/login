import React, { useState} from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here, e.g., make an API request
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields
    setEmail('');
    setPassword('');
    localStorage.setItem('signin',true)
    history.push('/home');
  };

  // useEffect(()=> {
  //  let signin = localStorage.getItem('signin');
  //  if(signin){
  //     history.push('/home');
  //   }
  // );
  return (
    <div className='sign-in'>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input required type="email" id="email" value={email} onChange={handleEmailChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" required id="password" value={password} onChange={handlePasswordChange} />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
