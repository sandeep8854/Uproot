import {
  HeadingOne,
  ImageHero,
  Input,
  Lable,
  LeftContainer,
  Main,
  Paragraph,
  Paragraph2,
  RightCOntainer,
  Span,
  UploadContainer,
} from "./HeroStyled";
import { BsUpload } from "react-icons/bs";
import PatakaGirl from "../assets/hero.jpg";

const Hero = () => {
  return (
    <Main>
      {/* Left side */}
      <LeftContainer>
        <HeadingOne>
          Remove <Span>the</Span> background
          <br />
          from image for <Span>free</Span>
        </HeadingOne>
        <Paragraph>
          Easily remove the background from image in Uproot.
          <br /> Continue editing your image in Uproot and express <br />
          to quickly change the background.
        </Paragraph>
        <UploadContainer>
          <Input type="file" name="" id="upload1" hidden />
          <Lable htmlFor="upload1">
            <BsUpload />
            <Paragraph2>Upload your image</Paragraph2>
          </Lable>
        </UploadContainer>
      </LeftContainer>

      {/* Right Container */}
      <RightCOntainer>
        <ImageHero
          src={PatakaGirl}
          alt="Hero image not found here."
        ></ImageHero>
      </RightCOntainer>
    </Main>
  );
};

export default Hero;
