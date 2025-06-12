import {
  Heading,
  Image,
  Left,
  MainContainer,
  Paragraph,
  Right,
  SemiContainer,
  SemiContainerFalse,
  SemiLeft,
  SemiParagraph,
  Span,
} from "./CareersMissionCompStyled";

const CareersMissionComp = ({
  key,
  index,
  imageSrc,
  mission,
  missionH1,
  quote,
  props,
}) => {
  const trueFalse = index % 2;
  return (
    <MainContainer>
      {trueFalse ? (
        <SemiContainerFalse>
          <Left>
            <SemiLeft>
              <Span>{mission}</Span>
              <Heading>{missionH1}</Heading>
            </SemiLeft>
            <SemiParagraph>
              <Paragraph>{quote}</Paragraph>
            </SemiParagraph>
          </Left>
          <Right>
            <Image
              src={`/src/assets/mission_${index + 1}.jpg`}
              alt={`Photo  of mission ${index + 1}`}
            />
          </Right>
        </SemiContainerFalse>
      ) : (
        <SemiContainer>
          <Left>
            <SemiLeft>
              <Span>{mission}</Span>
              <Heading>{missionH1}</Heading>
            </SemiLeft>
            <SemiParagraph>
              <Paragraph>{quote}</Paragraph>
            </SemiParagraph>
          </Left>
          <Right>
            <Image
              src={`/src/assets/mission_${index + 1}.jpg`}
              alt={`Photo  of mission ${index + 1}`}
            />
          </Right>
        </SemiContainer>
      )}
    </MainContainer>
  );
};

export default CareersMissionComp;
