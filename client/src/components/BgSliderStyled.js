import styled from "styled-components";

export const Section = styled.section`
  background-color: #ffffff;
  padding-top: 8rem;
  padding-bottom: 4rem;
  margin-left: 8rem;
  margin-right: 8rem;
`;

export const Container = styled.div`
  /* padding-top: 8rem;
  padding-bottom: 4rem;
  margin-left: 8rem;
  margin-right: 8rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const TextContainer = styled.div`
  margin-bottom: 5rem;
`;

export const HeadingOne = styled.h1`
  font-size: 3.5rem;
  font-weight: 1000;
  padding-bottom: 1rem;
`;

export const ParagraphOne = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
`;
export const Span = styled.span`
  color: red;
`;

export const ImageCOntainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const ImageOne = styled.img`
  max-width: 100%;
  width: 115rem;
`;

export const ImageTwo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  /* width: 115rem; */
`;

export const InputFeild = styled.input`
  position: absolute;
  width: 100%;
  &.hidingSomething {
    -webkit-appearance: none;
    height: 100%;
    background: transparent;
  }
  &.hidingSomething::-webkit-slider-thumb {
    appearance: none;
    width: 30px;
    min-height: 30px;
    background-image: url(/slide_icon.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
