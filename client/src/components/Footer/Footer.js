import React from 'react'
import "./Footer.css"
import linkdinImg from "./../../assets/linkedin.png";
import githubImg from "./../../assets/github.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='footer-container'>
      <h2 className='text-center p-5'>Money Mate</h2>
      <div className='container'>
        <div>
          <p className='About-content'>
            ..Money Mate.. helps to maintain the record of daily expenses.
             The Expense Tracker app tracks all the
              expenses and helps the user to manage his/her
              expenses</p>
        </div>
        <div>
          <h3>Click Me👇</h3>
          <p> <Link to="/" className='text-decoration'>home</Link></p>
          <p><Link to="/my-transactions" className='text-decoration'> transaction</Link></p>
          <p><Link to="/add-transactions" className='text-decoration'>add transaction</Link></p>

        </div>
    
        <div>
          <h3>Starts Here😊</h3>
          <p><Link to="/login" className='text-decoration'><i class="bi bi-box-arrow-in-right"></i> Login</Link> </p>
          <p> <Link to="/signup" className='text-decoration'><i class="bi bi-unlock"></i> register</Link></p>
         
          <div className='d-flex '>
          
            <div className='contact-icon margin-left' >
              <Link to='https://www.linkedin.com/in/kartik-kotkar/'><img src={linkdinImg} className='contact-img'/></Link>
          
            </div>
            <div className='contact-icon margin-left' >
             <Link to="https://github.com/kartikkotkar"> <img src={githubImg} className='contact-img'/></Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer