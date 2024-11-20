import {
  Container,
  HeadingOne,
  ImageCOntainer,
  ImageOne,
  ImageTwo,
  InputFeild,
  ParagraphOne,
  Section,
  Span,
  TextContainer,
} from "./BgSliderStyled";

import { assets } from "../assets/assets";
import { useState } from "react";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(40);
  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <Section>
      <TextContainer>
        <HeadingOne>
          Remove Background With <Span>High</Span> Quality and Accuracy
        </HeadingOne>
        <ParagraphOne>
          Removing backgrounds with high <Span>quality</Span> and accuracy is
          essential for creating professional and visually <br />
          appealing images, whether for personal, commercial, or creative
          purposes.
        </ParagraphOne>
      </TextContainer>
      <Container>
        {/* <TextContainer>
          <HeadingOne>
            Remove Background With <Span>High</Span> Quality and Accuracy
          </HeadingOne>
          <ParagraphOne>
            Removing backgrounds with high <Span>quality</Span> and accuracy is
            essential for creating professional and visually <br />
            appealing images, whether for personal, commercial, or creative
            purposes.
          </ParagraphOne>
        </TextContainer> */}

        <ImageCOntainer>
          <ImageOne
            src={assets.temp_1}
            style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
            alt="image with background"
          />
          <ImageTwo
            src={assets.temp_2}
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            alt="image without background"
          />

          <InputFeild
            className="hidingSomething"
            type="range"
            min={0}
            max={100}
            value={sliderPosition}
            onChange={handleSliderChange}
          />
        </ImageCOntainer>
      </Container>
    </Section>
  );
};

export default BgSlider;
