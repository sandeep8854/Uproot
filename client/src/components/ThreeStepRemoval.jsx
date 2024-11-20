import StepData from "./StepData";
import {
  Container,
  Heading1,
  Heading2,
  Section,
  ForBackground,
  Span,
  StepCart,
} from "./ThreeStepRemovalStyled";

import { assets } from "../assets/assets";

const ThreeStepRemoval = () => {
  return (
    <ForBackground>
      <Section>
        <Container>
          <Heading1>
            How to <Span>remove</Span> the background from image?
          </Heading1>
          <Heading2>
            With background remover, It is easy as one two <Span>three</Span>
          </Heading2>
        </Container>
        <StepCart>
          <StepData
            image={assets.one}
            number="01"
            heading="Select an image"
            paraOne="First, choose the image you want to remove background from by clicking on “Start from a photo”."
            paraTwo="Your image format can be PNG or JPG. We support all image dimensions."
          />
          <StepData
            image={assets.two}
            number="02"
            heading="Let remove the background"
            paraOne="Our tool automatically removes the background from your image."
            paraTwo="Our most popular options are white and transparent backgrounds, but you can pick any color you like."
          />
          <StepData
            image={assets.three}
            number="03"
            heading="Download your image"
            paraOne="After selecting a new background color, download your photo and you are done!."
            paraTwo="You can also save your picture in the Uproot App by creating an account."
          />
        </StepCart>
      </Section>
    </ForBackground>
  );
};

export default ThreeStepRemoval;
