import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderLogo,
  Nav,
  NavLink,
  GlowButton as Button,
  HamburgerMenu,
  Bar,
  Sidebar,
  CloseButton,
  SidebarHeader,
  SidebarLogo,
  SocialLinks,
} from '../styles/HeaderStyles';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
import headerlogo from '../assets/logo/logo-v2.png';
import sidebarLogo from '../assets/sidebarlogo.png';

interface HeaderProps {
  onClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      // setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderLogo src={headerlogo} alt="Logo" />
      </Link>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {/* <NavLink to="/subscribe">Subscribe</NavLink> */}
        <Button onClick={onClick} >Get Mun-e</Button>
        {/* <NavLink to="/pricing">Pricing</NavLink> */}
      </Nav>
      {isMobile && (
        <>
          <HamburgerMenu onClick={toggleSidebar}>
            <Bar />
            <Bar />
            <Bar />
          </HamburgerMenu>
          <Sidebar isOpen={sidebarOpen}>
            <SidebarHeader>
              <SidebarLogo src={sidebarLogo} alt="Logo" />
            </SidebarHeader>
            <CloseButton onClick={toggleSidebar}>
              <Bar />
              <Bar />
              <Bar />
            </CloseButton>
            <NavLink to="/" onClick={toggleSidebar}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={toggleSidebar}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={toggleSidebar}>
              Contact
            </NavLink>
            {/* <NavLink
              to="/subscribe"
              onClick={toggleSidebar}
            >
              Subscribe
            </NavLink> */}
            <SocialLinks>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
            </SocialLinks>
          </Sidebar>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
