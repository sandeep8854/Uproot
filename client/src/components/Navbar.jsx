import { assets } from "../assets/assets.js";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import {
  Header,
  Nav,
  List,
  LogoImage,
  NavLink,
  UnorderList,
  Button,
} from "./NavbarStyled.js";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  return (
    <Header>
      <NavLink to="/">
        <LogoImage src={assets.whiteLogo} alt="Uproot logo"></LogoImage>
      </NavLink>

      {/* nabvar */}
      <Nav>
        <UnorderList>
          <List>
            <NavLink to="r/removeBg">Remove Background</NavLink>
          </List>
          <List>
            <NavLink to="f/features">Features</NavLink>
            <MdKeyboardArrowDown size={15} />
          </List>
          <List>
            <NavLink to="b/forbusiness">For Business</NavLink>
            <MdKeyboardArrowDown size={15} />
          </List>
          <List>
            <NavLink to="p/pricing">Pricing</NavLink>
          </List>
          {isSignedIn ? (
            <div>
              {" "}
              <UserButton />
            </div>
          ) : (
            <List>
              <Button onClick={() => openSignIn({})}>Get started</Button>
              {/* openSignIn is Cleark inbuild functionfunction */}
            </List>
          )}
        </UnorderList>
      </Nav>

      {/* for mobile version */}
    </Header>
  );
};

export default Navbar;
