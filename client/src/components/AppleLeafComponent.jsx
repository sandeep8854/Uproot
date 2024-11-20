import React from "react";
import {
  Container,
  ImageLeft,
  ImageMedium,
  ImageRightLeaf,
  LeafMediuam,
  LeftLeafContainer,
  ParagraphE,
  RightLeafContainer,
} from "./AppleLeafComponentStyled";

const AppleLeafComponent = (props) => {
  return (
    <Container>
      {/* Left Leaf */}
      <LeftLeafContainer>
        <ImageLeft src={props.imageLeafLeft} alt="left leaf image" />
      </LeftLeafContainer>
      {/* midle */}
      <LeafMediuam>
        <ImageMedium src={props.imageApple} alt="medium image not found!" />
        <ParagraphE>{props.text}</ParagraphE>
      </LeafMediuam>
      <RightLeafContainer>
        <ImageRightLeaf
          src={props.imageLeafRight}
          alt="right image not found!"
        />
      </RightLeafContainer>
    </Container>
  );
};

export default AppleLeafComponent;
