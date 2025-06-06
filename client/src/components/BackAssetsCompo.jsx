import {
  Container,
  Heading,
  Image,
  ImageContainer,
  Paragraph,
  SubContainer,
  SubContainerRight,
  TextContainer,
} from "./BackAssetsCompoStyled";
import bg_One from "../assets/bg-1.webp";
import bg_Two from "../assets/bg-2.webp";
import bg_Three from "../assets/bg-3.webp";
import bg_Four from "../assets/bg-4.webp";
import bg_Five from "../assets/bg-5.webp";
import bg_Six from "../assets/bg-6.webp";
// import { assets } from "../assets/assets";
export const BackAssetsCompo = ({ imaageSrc, heading, text, index }) => {
  const trueFalse = index % 2;
  //   console.log(trueFalse);
  const imageObject = { bg_One, bg_Two, bg_Three, bg_Four, bg_Five, bg_Six };
  return (
    <Container>
      {trueFalse ? (
        <SubContainer>
          <ImageContainer>
            <Image src={imageObject[imaageSrc]} alt="Image not found" />
          </ImageContainer>
          <TextContainer>
            <Heading>{heading}</Heading>
            <Paragraph>{text}</Paragraph>
          </TextContainer>
        </SubContainer>
      ) : (
        <SubContainerRight>
          <ImageContainer>
            <Image src={imageObject[imaageSrc]} alt="Image not found" />
          </ImageContainer>
          <TextContainer>
            <Heading>{heading}</Heading>
            <Paragraph>{text}</Paragraph>
          </TextContainer>
        </SubContainerRight>
      )}
    </Container>
  );
};
