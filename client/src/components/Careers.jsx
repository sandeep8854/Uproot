import { NavLink } from "react-router-dom";
import {
  ButtonContainer,
  CeoQuote,
  CeoQuoteInline,
  ContainerButton,
  HeadingDiv,
  HeadingOne,
  HeadingOneQuote,
  HeadingTwo,
  HeadingTwoDiv,
  Image,
  ImageAndName,
  ImageAndNameInline,
  ImageCa,
  ImageCard,
  ImageCareer,
  ImageCEO,
  ImageColumn,
  ImageContainer,
  InnerDiv,
  MainContainer,
  NameAndProfession,
  NameCEO,
  Profession,
  SpanOne,
  TextBodyContainer,
  TextContainer,
} from "./CareersStyled";

const Careers = () => {
  const imgi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <MainContainer>
      <InnerDiv>
        <TextBodyContainer>
          <TextContainer>
            <SpanOne>Careers</SpanOne>
          </TextContainer>
          <HeadingDiv>
            <HeadingOne>We are waiting for you!</HeadingOne>
          </HeadingDiv>
          <HeadingTwoDiv>
            <HeadingTwo>
              Want to join our team? See the open positions below.
            </HeadingTwo>
          </HeadingTwoDiv>
        </TextBodyContainer>
        <ButtonContainer>
          <ContainerButton>
            <NavLink to="">See positions</NavLink>
          </ContainerButton>
        </ButtonContainer>
      </InnerDiv>
      {/* imgage container */}
      <ImageContainer>
        <ImageColumn>
          {imgi.map((src, index) => (
            <ImageCard key={index + 1}>
              <Image
                src={`/src/assets/careers_${index + 1}.avif`}
                alt={`Photo ${index + 1}`}
              />
            </ImageCard>
          ))}
        </ImageColumn>
      </ImageContainer>
      <CeoQuote>
        <CeoQuoteInline>
          <HeadingOneQuote>
            ‘‘We are looking for creative people who want to make a difference.
          </HeadingOneQuote>
          <ImageAndName>
            <ImageAndNameInline>
              <ImageCEO
                src={"/src/assets/ceo.jpg"}
                alt="image not found of CEO."
              />
            </ImageAndNameInline>
            <NameAndProfession>
              <NameCEO>Sandeep Prajapati</NameCEO>
              <Profession>Uproot - Co founder</Profession>
            </NameAndProfession>
          </ImageAndName>
        </CeoQuoteInline>
      </CeoQuote>
      <ImageCareer>
        <ImageCa
          src={"/src/assets/careers.jpg"}
          alt="careers image not found!"
        />
      </ImageCareer>
      {/* image and text. */}
    </MainContainer>
  );
};

export default Careers;
