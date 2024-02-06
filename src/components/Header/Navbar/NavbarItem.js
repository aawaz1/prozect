import React , {useState} from 'react';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import navbarData from "../../../data/Navbar/navbar.json";
import './Header.css'

function NavbarItem(props) {
    const [open, setOpen] = useState(false);

    return (
     <>
     {
           navbarData.map(item => (
            <li key={item.id}
                className={item.subMenu || item.megaMenu ? 'has-submenu' : ''}
            >
                <Link to={`${process.env.PUBLIC_URL + item.link}`}>{item.title}</Link>
                {(() => {
                    if (item.subMenu) {
                        return (
                            <ul className="submenu-nav">
                                {
                                    item.subMenu.map((subItem, index) => {
                                        return <li key={index}><Link to={`${process.env.PUBLIC_URL + subItem.link}`}>{subItem.title}</Link></li>
                                    })
                                }
                            </ul>
                        )
                    }

                    if (item.megaMenu) {
                        return (
                            <ul className="submenu-nav submenu-nav-mega">
                                {
                                    item.megaMenu.map((megaItem, indx) => (
                                        <li key={indx} className="mega-menu-item"><Link to={megaItem.link}>{megaItem.title}</Link>
                                            <ul>
                                                {
                                                    megaItem.lists.map((listItem, idx) => {
                                                        return <li key={idx}><Link to={`${process.env.PUBLIC_URL + listItem.link}`}>{listItem.title}</Link></li>
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                })()}
            </li>



        ))

     }
     
      {/* nav menu for mobile view
      
      <div className="ham-icon" onClick={() => setOpen(!open)}>
          {open ? <ImCross size={"20px"} /> : <GiHamburgerMenu size={"25px"} />}
        </div>
    

      {open && (
        <nav className="mobile-nav-menu">
              {
           navbarData.map(item => (
            <li key={item.id}
                className={item.subMenu || item.megaMenu ? 'has-submenu' : ''}
            >
                <Link to={`${process.env.PUBLIC_URL + item.link}`}>{item.title}</Link>
                {(() => {
                    if (item.subMenu) {
                        return (
                            <ul className="submenu-nav">
                                {
                                    item.subMenu.map((subItem, index) => {
                                        return <li key={index}><Link to={`${process.env.PUBLIC_URL + subItem.link}`}>{subItem.title}</Link></li>
                                    })
                                }
                            </ul>
                        )
                    }

                    if (item.megaMenu) {
                        return (
                            <ul className="submenu-nav submenu-nav-mega">
                                {
                                    item.megaMenu.map((megaItem, indx) => (
                                        <li key={indx} className="mega-menu-item"><Link to={megaItem.link}>{megaItem.title}</Link>
                                            <ul>
                                                {
                                                    megaItem.lists.map((listItem, idx) => {
                                                        return <li key={idx}><Link to={`${process.env.PUBLIC_URL + listItem.link}`}>{listItem.title}</Link></li>
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                })()}
            </li>



        ))

     }
        
          
        </nav>
      )} */}
     
     </>











    )
}

export default NavbarItem