import {
  Button,
  ButtonContainer,
  Container,
  ContainerSpanB,
  ContainerThree,
  ContainerTwo,
  HeadingOne,
  ImageClose,
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
  const { color } = props.bgColor;
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
          <ImageTick src={props.tickOne} alt="current sign are not found!" />
          <SpanSix>{props.pointOne}</SpanSix>
        </ContainerThree>
        <ContainerThree>
          <ImageTick src={props.tickTwo} alt="current sign are not found!" />
          <SpanSix>{props.pointTwo}</SpanSix>
        </ContainerThree>
        <ContainerThree>
          <ImageTick src={props.tickThree} alt="current sign are not found!" />
          <SpanSix>{props.pointThree}</SpanSix>
        </ContainerThree>
        <ContainerThree>
          <ImageTick src={props.tickFour} alt="current sign are not found!" />
          <SpanSix>{props.pointFour}</SpanSix>
        </ContainerThree>
        <ContainerThree>
          <ImageTick src={props.tickFive} alt="current sign are not found!" />
          <SpanSix>{props.pointFive}</SpanSix>
        </ContainerThree>
        <ContainerThree>
          <ImageClose src={props.closeOne} alt="current sign are not found!" />
          <SpanSix>{props.pointCloseOne}</SpanSix>
        </ContainerThree>
        <ContainerThree>
          <ImageClose src={props.closeTwo} alt="current sign are not found!" />
          <SpanSix>{props.pointCloseTwo}</SpanSix>
        </ContainerThree>
        <ContainerThree>
          <ImageClose
            src={props.closeThree}
            alt="current sign are not found!"
          />
          <SpanSix>{props.pointCloseThree}</SpanSix>
        </ContainerThree>
        <ContainerThree>
          <ImageClose src={props.closeFour} alt="current sign are not found!" />
          <SpanSix>{props.pointCloseFour}</SpanSix>
        </ContainerThree>
        {/* button */}
        <ButtonContainer>
          <Button>{props.button}</Button>
          {/* style={{ backgroundColor: color }} */}
        </ButtonContainer>
      </MiddleContainer>
    </Container>
  );
};

export default BuyCreditCart;
