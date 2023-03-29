import {FaTimes} from 'react-icons/fa'
import {CgMenuRight} from 'react-icons/cg'
import { IconContext } from 'react-icons/lib';
import { data } from '../../data/NavbarData';
import { MobileIcon, Nav, NavbarContainer, NavIcon, NavItem, NavLinks, NavLogo, NavLogoText, NavMenu } from './NavbarStyles';
import Logo from '../../images/logo.png';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {

const [show, setShow] = useState();

let history = useNavigate();
let location = useLocation();


const handleClick = () => {
    setShow(!show);
};


const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {element.scrollIntoView({
        behavior: 'smooth',
    })};
};


const closeMobileMenu = (to, id) => {
    if (id && location.pathname ==='/') {
        scrollTo(id);
    }

    history(to);
    setShow(false)
}



    return ( 
        <IconContext.Provider value={{color: "#fff"}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={() => closeMobileMenu()}>
                        <NavIcon src={Logo} alt='logo'/>
                        <NavLogoText>
                        Brich and Bez Services
                        </NavLogoText>

                    </NavLogo>
                    <MobileIcon onClick={handleClick}>{show ? <FaTimes /> : <CgMenuRight /> }</MobileIcon>
                    <NavMenu show={show}>
                        {data.map((el, index) => (
                            <NavItem key={index}>
                                <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                                    {el.text}
                                </NavLinks>
                            </NavItem>
                        ))}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
     );
}
 
export default Navbar;