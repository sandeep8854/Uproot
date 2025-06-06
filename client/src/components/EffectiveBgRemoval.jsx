import {
  Container,
  ContainerHeading,
  HeadingOne,
  Section,
  ContainerText,
  HeadingTwoContainer,
  HeadingTwo,
  ParagraphP,
  ImageContainer,
  Image,
  ContainerTextAndImage,
  Span,
  ParagraphP1,
} from "./EffectiveBgRemovalStyled.js";

import { assets } from "../assets/assets";
const EffectiveBgRemoval = () => {
  return (
    <Section>
      <Container>
        <ContainerHeading>
          <HeadingOne>
            Effortless Background Removal with AI-Powered Uproot
          </HeadingOne>
        </ContainerHeading>

        {/* Left side */}
        <ContainerTextAndImage>
          <ContainerText>
            <HeadingTwo>
              Remove backgrounds <Span>100%</Span>
              <br />
              automatically in 5 seconds <br /> with one click
            </HeadingTwo>
            <ParagraphP1 className="firstChild">
              Thanks to Uproot&apos;s clever AI, you can slash editing time{" "}
              <br /> and have more fun!
            </ParagraphP1>
            <ParagraphP>
              No matter if you want to make a background transparent (PNG), add
              a white background to a photo, extract or isolate the subject, or
              get the cutout of a <br />
              photo - you can do all this and more with Uproot, the AI
              background <br />
              remover for professionals.
            </ParagraphP>
          </ContainerText>

          {/* right side */}
          <ImageContainer>
            <Image
              src={assets.menHand}
              alt="Image not found in effective component"
            />
          </ImageContainer>
        </ContainerTextAndImage>
      </Container>
    </Section>
  );
};

export default EffectiveBgRemoval;
