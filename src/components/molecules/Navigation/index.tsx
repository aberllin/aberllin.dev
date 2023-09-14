import React, { useState } from "react";
import styled, { css } from "styled-components";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Link from "../../atoms/Link";
import { useLocation } from "react-router-dom";

type NavLink = { to: string; label: string };

const navLinks: Array<NavLink> = [
  { to: "/", label: ".home()" },
  { to: "/portfolio", label: ".portfolio()" },
  { to: "/blog", label: ".blog()" },
  { to: "/resources", label: ".resources()" },
];
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Menu onClick={handleMenuOpen}>
        {!isMenuOpen ? <HiMenu /> : <IoMdClose />}
      </Menu>
      <NavbarWrapper $isMenuOpen={isMenuOpen}>
        {navLinks.map((link) => {
          const isSelected = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              selected={isSelected}
              onClick={() => setIsMenuOpen(false)}
              to={link.to}
            >
              {link.label}
            </Link>
          );
        })}
      </NavbarWrapper>
    </>
  );
};

const Menu = styled.div`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 25px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 100;
  }

  @media screen and (max-width: 400px) {
    top: 5px;
    right: 5px;
  }

  @media screen and (max-width: 400px) {
    top: 5px;
    right: 5px;
  }
`;

const NavbarWrapper = styled.div<{ $isMenuOpen: boolean }>`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 45px 50px;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 1024px) {
    padding: 30px 0;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    font-size: 20px;
    position: fixed;
    top: 0;
    box-shadow: 0px 0px 27px -2px rgba(245, 243, 243, 1);
    transition: all 0.3s ease;

    ${(props) =>
      props.$isMenuOpen
        ? css`
            background: rgba(0, 0, 0, 0.8);
            left: 0;
            opacity: 1;
            position: absolute;
            transition: all 0.3s ease;
            z-index: 1;
          `
        : css`
            opacity: 1;
            top: -100%;
          `}
  }
`;

export default Navigation;
