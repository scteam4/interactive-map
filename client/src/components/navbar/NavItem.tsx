import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import "./NavBar.css"

interface nombres{
    nombre:String
    link:String
}

function NavItem(props:nombres){
    const name = props.nombre
    const link = props.link

    return (
        <Link to={link}>
            {name}
        </Link>
    );
}

export default NavItem