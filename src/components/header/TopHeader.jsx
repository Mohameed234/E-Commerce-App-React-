import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png'
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import './header.css'

function TopHeader() {
  return (
    <div className='top-header'>
        <div className="container">
            <Link className='logo' to='/'> <img src={Logo} alt="Logo" /> </Link>

            <form action="" className="search-box">
                <input type="text" placeholder="Search..." name='search' id='search' />
                <button type='submit'> <FaSearch /> </button>
            </form>

            <div className="header-icons">
                <div className="icon">
                    <CiHeart />
                    <span className='count'>0</span>
                </div>
                
                <div className="icon">
                    <TiShoppingCart />
                    <span className='count'>0</span>
                </div>
            </div>

        </div>

    </div>
  )
}

export default TopHeader