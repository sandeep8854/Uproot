import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff1d5;

  /* Because we want header to be sticky later */
  height: 9.6rem;
  padding: 0 4.8rem;
  position: relative;
`;

export const LogoImage = styled.img`
  max-width: 15rem;
  height: auto;
`;

export const Nav = styled.nav``;
export const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.8rem;
  transition: all 0.3s;
  &.active {
    color: #cf711f;
  }
  &.buttonDesing {
    padding: 1rem 2.1rem;
    border-radius: 5rem;
    color: #fff;
    background-color: #e67e22;
  }
`;

export const UnorderList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4.8rem;
`;
export const List = styled.li``;
