import {
  CircleMain,
  ContainerCircle,
  ContainerOne,
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
  SpanE,
  // SpanOneE,
  UploadContainer,
} from "./HeroStyled";
import { BsUpload } from "react-icons/bs";
import PatakaGirl from "../assets/hero.jpg";
import { assets } from "../assets/assets";

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
        {/* animation circuler  */}
        <CircleMain>
          <ContainerCircle>
            <img src={assets.hifive} alt="hifive image not found!" />
          </ContainerCircle>
          <ContainerOne>
            <svg
              className="rotateC"
              viewBox="0 0 200 200"
              width="150"
              height="150"
            >
              <path
                id="circlePath"
                fill="none"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  •⭐ Uproot Free ⭐•
                </textPath>
                <textPath href="#circlePath" startOffset="50%">
                  •⭐ Background ⭐•
                </textPath>
              </text>
            </svg>
            {/* <!--     arrow icon --> */}
            <SpanE>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </SpanE>
          </ContainerOne>
        </CircleMain>
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
