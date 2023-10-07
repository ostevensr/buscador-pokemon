import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no_active");

    return (
        <Navbar className='pers-navbar'>
            <Container fluid>
            
                <Navbar.Brand>
                    <Navbar.Text className='texto-navbar'> Atrapa tu Pokemón <img className="icono-navbar" src="./src/assets/pokebola.png"/> </Navbar.Text>
                </Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">

                    <NavLink className={setActiveClass} to="/">Home </NavLink>

                    <NavLink className={setActiveClass} to="/pokemones"> Pokemones </NavLink>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavBar;