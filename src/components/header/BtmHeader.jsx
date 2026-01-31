import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";

const navLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Services", link: "/services" },
  { id: 4, title: "Blog", link: "/blog" },
  { id: 5, title: "Contact", link: "/contact" },
];

function BtmHeader() {


  const location = useLocation();
  const [categories, setCategories] = useState([]);

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);


  console.log(isCategoriesOpen);
  
 
  
  
  

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);

  return (
    <div className="btm-header">
      <div className="container">

        <nav className="nav">
          <div className="category-nav">
            <div className="category-btn" onClick={() => setIsCategoriesOpen(!isCategoriesOpen) }>
              <IoMdMenu />
              <p>Brows Category</p>
              <MdOutlineArrowDropDown />
            </div>

            <div className={`category-nav-list ${isCategoriesOpen ? 'active' : ''}`}>
              {categories.map((category, index) => (
                <Link to={category.slug} key={index}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-links">
            {navLinks.map((navlink) => (
             <li className={location.pathname === navlink.link ? 'active' : ''}>
                <Link to={navlink.link} key={navlink.id}>
                  {navlink.title}
                </Link>
              </li>
            ))}
          </div>
        </nav>

        <div className="sign-regs-icon">
          <Link to="/">
            <PiSignInBold />
          </Link>
          <Link to="/">
            <FaUserPlus />
          </Link>
        </div>


      </div>
    </div>
  );
}

export default BtmHeader;
