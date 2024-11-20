import {
  Button,
  ButtonContainer,
  Container,
  ContainerSpanB,
  ContainerThree,
  ContainerTwo,
  HeadingOne,
  ImageTick,
  LogoContainer,
  MiddleContainer,
  NoteContainer,
  PricingContainer,
  SpanFive,
  SpanFour,
  SpanOne,
  SpanSix,
  SpanThree,
  SpanTwo,
} from "./BuyCreditCartStyled";

const BuyCreditCart = (props) => {
  return (
    <Container>
      <ContainerSpanB>
        <SpanOne>{props.textSpan}</SpanOne>
      </ContainerSpanB>
      <ContainerTwo>
        <LogoContainer>
          {props.logo}
          <SpanTwo>{props.logoText}</SpanTwo>
        </LogoContainer>
        <PricingContainer>
          <HeadingOne>
            {props.RupeesIcon}
            {props.price}
          </HeadingOne>
          <SpanThree>{props.creditBalance}</SpanThree>
        </PricingContainer>
        <NoteContainer>
          <SpanFour>{props.noteOne}</SpanFour>
          <SpanFive> {props.noteTwo}</SpanFive>
        </NoteContainer>
      </ContainerTwo>
      <MiddleContainer>
        <ContainerThree>
          <ImageTick src={props.tickOne} alt="corrent sign are not found!" />
          <SpanSix>{props.pointOne}</SpanSix>
        </ContainerThree>
        <ContainerThree>
          <ImageTick src={props.tickTwo} alt="corrent sign are not found!" />
          <SpanSix>{props.pointTwo}</SpanSix>
        </ContainerThree>
        <ContainerThree>
          <ImageTick src={props.tickThree} alt="corrent sign are not found!" />
          <SpanSix>{props.pointThree}</SpanSix>
        </ContainerThree>
        <ContainerThree>
          <ImageTick src={props.tickFour} alt="corrent sign are not found!" />
          <SpanSix>{props.pointFour}</SpanSix>
        </ContainerThree>
        <ButtonContainer>
          <Button>{props.button}</Button>
        </ButtonContainer>
      </MiddleContainer>
    </Container>
  );
};

export default BuyCreditCart;
