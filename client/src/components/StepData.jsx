import {
  Container,
  HeadingNumber,
  HeadingText,
  Image,
  ImageContainer,
  ParagraghTwo,
  ParagraphOne,
} from "./StepDataStyled";

const StepData = (props) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={props.image} alt="webp image not found." />
      </ImageContainer>
      <HeadingNumber>{props.number}</HeadingNumber>
      <HeadingText>{props.heading}</HeadingText>
      <ParagraphOne>{props.paraOne}</ParagraphOne>
      <br />
      <ParagraghTwo>{props.paraTwo}</ParagraghTwo>
    </Container>
  );
};

export default StepData;
