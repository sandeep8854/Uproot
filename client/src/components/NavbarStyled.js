import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff1d5;

  /* Because we want header to be sticky later */
  height: 9.6rem;
  padding: 0 8rem;
  position: relative;
`;

export const LogoImage = styled.img`
  width: 44%;
  height: 14%;
  /* aspect-ratio: 3 / 2;
  object-fit: contain;
  -o-object-fit: contain;
  object-position: center; */
`;

export const Nav = styled.nav``;

export const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 1.4rem;
  transition: all 0.3s;
  &.active {
    color: #cf711f;
  }
`;

export const Button = styled.button`
  /* &.buttonDesing { */
  padding: 1rem 2.1rem;
  border-radius: 5rem;
  color: #fff;
  background: linear-gradient(to right, red, purple);
  font-size: 1.4rem;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    background-color: #000;
    border-radius: 300px;
    z-index: -1;
    color: #fff;
  }
`;

export const UnorderList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3.8rem;
`;
export const List = styled.li`
  &:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    cursor: pointer;
  }
  &:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    cursor: pointer;
  }
`;
