import styled from "styled-components";
export const Main = styled.main`
  background-color: #fff1d5;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 6.5rem 0 0 0;
  padding-left: 10rem;
  /* padding-right: 10rem; */
  height: calc(100vh - 9.6rem);
  padding-right: 10rem;
  padding-bottom: 5rem;
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 4rem;
  position: relative;
`;

export const HeadingOne = styled.h1`
  font-size: 4.2rem;
  font-weight: 1000;
  margin-bottom: 1rem;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    background-image: url(/grid.svg);
    top: -2rem;
    right: 5rem;
    width: 50rem;
    height: 14rem;
    z-index: -1;
    opacity: 0.6;
  }
  &:after {
    content: "0100";
    position: absolute;
    top: -13rem;
    right: 36rem;
    width: 10rem;
    height: 10rem;
    color: #fae5d3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10rem;
  }
`;
export const Span = styled.span`
  color: red;
`;
export const Paragraph = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;
export const UploadContainer = styled.div`
  display: inline;
  width: 24rem;
`;
export const Input = styled.input``;
export const Lable = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1rem 1rem 1rem;
  background-color: #e67e22;
  font-size: 1.4rem;
  border-radius: 5rem;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;
export const Paragraph2 = styled.p``;
export const RightCOntainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImageHero = styled.img`
  width: 100%;
  max-width: 40rem;
  height: auto;
  background-repeat: no-repeat;
`;
