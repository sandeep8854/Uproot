import React from "react";
import {
  Container,
  HeadingOne,
  Input,
  Lable,
  Section,
  Span,
  UploadContainer,
} from "./MagicStyled";
import { BsUpload } from "react-icons/bs";
import { Paragraph2 } from "./HeroStyled";

const Magic = () => {
  return (
    <Section>
      <Container>
        <HeadingOne>
          See the <Span>Magic.</Span> Try now
        </HeadingOne>

        <UploadContainer>
          <Input type="file" name="" id="upload1" hidden />
          <Lable htmlFor="upload1">
            <BsUpload />
            <Paragraph2>Upload your image</Paragraph2>
          </Lable>
        </UploadContainer>
      </Container>
    </Section>
  );
};

export default Magic;
