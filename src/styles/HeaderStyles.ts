import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, spacing, typography } from './';
import { Button } from './HomeStyles';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const HeaderLogo = styled.img`
  height: 60px;
  margin-left: ${spacing.large};
  width: auto;
  border-radius: 4px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const Logo = styled.img`
  height: 40px; /* Adjust the height as needed */
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${spacing.large};

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    align-items: flex-end;
    width: auto;
    position: absolute;
    top: 60px;
    right: -10px;
    padding: 10px;
  }

  &.open {
    display: flex;
  }
`;

export const NavLink = styled(Link)`
  margin: 0 ${spacing.medium};
  color: #010a03;
  text-decoration: none;
  font-weight: ${typography.fontWeight.bold};
  position: relative;

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px; // adjust this value as needed
    height: .5px; // thickness of the underline
    background-color: #1aae33;
  }

  @media (max-width: 768px) {
    margin: ${spacing.small} 0;
  }
`;

export const GlowButton = styled(Button)`
  padding: ${spacing.small} ${spacing.large};
  background-color: ${colors.primary};
  color: #f2f7f4;
  text-decoration: none;
  border-radius: 12px;
  margin-left: ${spacing.large};
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  box-shadow: 0 0 10px 0 rgba(26, 174, 51, 0.8);

  @media (max-width: 768px) {
    margin: ${spacing.small} 0 0 0;
    align-self: flex-end;
    margin-left: 550px; /* Add margin-right to push the button to the right */
    text-align: center;
    justify-content: center;
  }

  &:hover {
    background-color: ${colors.primary};
    color: #f2f7f4;
    box-shadow: 0 0 10px 0 rgba(26, 174, 51, 1);
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  background-color: #19a530;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Bar = styled.div`
  width: 15px;
  height: 2px;
  background-color: #f2f7f4;
  margin: 2px 0;
`;

export const Sidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: #19a530;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 10px 0;

    &:hover {
      // text-decoration: underline;
      // text-decoration-thickness: 2px; /* Make underline thicker */
      // text-decoration-color: #1aae33;
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const SidebarHeader = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
`;

export const SidebarLogo = styled.img`
  margin-left: 0;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  flex-direction: column;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100px;
  margin-top: 20px;

  a {
    color: #fff;
    font-size: 1.5rem;

    &:hover {
      color: #1aae33;
    }
  }
`;
