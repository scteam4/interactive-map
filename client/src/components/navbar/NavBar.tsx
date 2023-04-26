import React, {useState} from 'react'
import "./NavBar.css"
import NavItem from "./NavItem"

function NavBar(){
    const [isOpen,setIsOpen] = useState(false)

    return(
        <div className={`navBar ${isOpen && "open"}`}>
            <div className='nav_logo'>
                SC TEAM
            </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <NavItem nombre={"Mapa"} link={"/mapa"}></NavItem>
                <NavItem nombre={"Personajes"} link={"/personajes"}></NavItem>
                <NavItem nombre={"Sobre Nosotros"} link={"/sobreNosotros"}></NavItem>
                <NavItem nombre={"Gomiartistas"} link={"/gomiArtistas"}></NavItem>
            </div>

            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default NavBar