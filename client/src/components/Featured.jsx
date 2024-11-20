import { assets } from "../assets/assets";
import {
  Container,
  HeadingOne,
  Image,
  Logos,
  Section,
} from "./FeaturedStyled.js";
const Featured = () => {
  return (
    <Section>
      <Container>
        <HeadingOne>As featured in</HeadingOne>
        <Logos>
          <Image src={assets.shopify} alt="shopify logo" />
          <Image src={assets.netflix} alt="netflix logo" />
          <Image src={assets.warnerbros} alt="warnerbros logo" />
          <Image src={assets.bulgari} alt="bulgari logo" />
          <Image src={assets.doordash} alt="doordash logo" />
          <Image src={assets.wolt} alt="bolt logo" />
          <Image src={assets.dasho} alt="dasho logo" />
          <Image src={assets.klarna} alt="klarna logo" />
        </Logos>
      </Container>
    </Section>
  );
};

export default Featured;
