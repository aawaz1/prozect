import React, { useState } from 'react';
import NavbarItem from './NavbarItem';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Navbar(props) {
    const [open, setOpen] = useState(false);
    return (<>
        <ul className="main-menu nav">
            <NavbarItem />
        </ul>




    </>

    );
}

// ,
//       {
//         "title": "Cases",
//         "link": "/blog-grid-without-sidebar"
//       }

export default Navbar;