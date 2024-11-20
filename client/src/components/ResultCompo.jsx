import { assets } from "../assets/assets";
import {
  Container,
  HeadingAndTextContainer,
  HeadingOne,
  HeadingThree,
  IconAndOneContainer,
  ImageRemove,
  Section,
  Span,
} from "./ResultCompoStyled";
const ResultCompo = () => {
  return (
    <Section>
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
            Erase image <Span> backgrounds </Span>for free and replace it with
            different backgrounds of your choosing.
          </HeadingThree>
        </HeadingAndTextContainer>
      </Container>
    </Section>
  );
};

export default ResultCompo;
