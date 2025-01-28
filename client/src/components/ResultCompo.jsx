import { assets } from "../assets/assets";
import {
  AnchorTag,
  Button,
  ButtonContainer,
  Container,
  HeadingAndTextContainer,
  HeadingOne,
  HeadingThree,
  IconAndOneContainer,
  ImageContainer,
  ImageLeft,
  ImageRemove,
  ImageRight,
  ImageWrapper,
  LeftSide,
  MainImageContainer,
  ParagraphLeftSide,
  ParagraphRightSide,
  RemovalImage,
  RightSide,
  Section,
  SectionTwo,
  Span,
  SubSection,
  Transparent,
} from "./ResultCompoStyled";
const ResultCompo = () => {
  return (
    <>
      <Section>
        <SubSection>
          <Container>
            <HeadingAndTextContainer>
              <IconAndOneContainer>
                <ImageRemove
                  src={assets.rbackground}
                  alt="remove icon not found!"
                />
                <HeadingOne>
                  Background<Span> Remove</Span>
                </HeadingOne>
              </IconAndOneContainer>
              <HeadingThree>
                Erase image <Span> backgrounds </Span>for free and replace it
                with different backgrounds of your choosing.
              </HeadingThree>
            </HeadingAndTextContainer>
            {/* image container */}
            <MainImageContainer>
              <ImageContainer>
                <LeftSide>
                  <ParagraphLeftSide>Original image</ParagraphLeftSide>
                  <ImageLeft src={assets.temp_2} alt="temp image not found!" />
                </LeftSide>
                <RightSide>
                  <ParagraphRightSide>Background removed</ParagraphRightSide>
                  <ImageWrapper>
                    <ImageRight
                      src={assets.temp_1}
                      alt="temp image not found!"
                    />
                    <RemovalImage>
                      <Transparent></Transparent>
                    </RemovalImage>
                  </ImageWrapper>
                </RightSide>
              </ImageContainer>

              {/* Button container.. */}
              <ButtonContainer>
                <Button>Try another image</Button>
                <AnchorTag href="">Download image</AnchorTag>
              </ButtonContainer>
            </MainImageContainer>
          </Container>
        </SubSection>
        <SectionTwo>hello</SectionTwo>
      </Section>
    </>
  );
};

export default ResultCompo;
