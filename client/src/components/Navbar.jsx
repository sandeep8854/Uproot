import LogoImg from "../assets/logo.png";
import BuyCredit from "../pages/BuyCredit.jsx";
import {
  Header,
  Nav,
  List,
  LogoImage,
  NavLink,
  UnorderList,
} from "./NavbarStyled.js";
const Navbar = () => {
  return (
    <Header>
      <NavLink to="/">
        <LogoImage src={LogoImg} alt="Uproot logo"></LogoImage>
      </NavLink>

      {/* nabvar */}
      <Nav>
        <UnorderList>
          <List>
            <NavLink to="r/removeBg">Remove Background</NavLink>
          </List>
          <List>
            <NavLink to="f/features">Features</NavLink>
          </List>
          <List>
            <NavLink to="b/forbusiness">For Business</NavLink>
          </List>
          <List>
            <NavLink to="/p/pricing">Pricing</NavLink>
          </List>
          <List>
            <NavLink className="buttonDesing" to="g/getstarted">
              Get started
            </NavLink>
          </List>
        </UnorderList>
      </Nav>

      {/* for mobile version */}
    </Header>
  );
};

export default Navbar;
