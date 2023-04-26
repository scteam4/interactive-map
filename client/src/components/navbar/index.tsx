import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/mapa' activeStyle>
			Mapa
		</NavLink>
		<NavLink to='/personajes' activeStyle>
		Personajes
		</NavLink>
		<NavLink to='/sobreNosotros' activeStyle>
		Sobre Nosotros 
		</NavLink>
		<NavLink to='/gomiArtistas' activeStyle>
		GomiArtistas
		</NavLink>
		
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
