
import React, { useState } from 'react'
import classes from "./signup.module.css"
// import Layout from '../../Components/Layout/Layout'
// import { DataContext } from '../../Components/DataProvider/DataProvider'
// import { Type } from '../../utility/actiontype'

function Auth() {
  const[email,setEmail]= useState("");
  const [password, setPassword] = useState("");
  const [error] = useState("");
  // const [{user},dispatch] =useContext(DataContext);

  const authHandler= async(e)=>{
    e.preventDefault();
    // Removed Firebase auth logic for frontend-only app
  }

  return (
    <section className={classes.login}>
      <a href="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAE2DsdF6RJ3eiqVxPqVmsDix7QsIkFS_sVA&s"
          alt="amazon logo"
        />
      </a>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login_siginbtn}
          >
            Sign In
          </button>
        </form>
        <p>
          By sining-in you agre to the AMAZON FAKE CLONE conditions of use &
          sale.please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login_signupbtn}
        >
          Create your Amazon Account
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth
