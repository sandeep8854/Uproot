import styled, { keyframes } from "styled-components";
export const Main = styled.main`
  background-color: #fff1d5;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 8rem 0 8rem;
  /* padding-left: 10rem; */
  /* padding-right: 10rem; */
  height: calc(100vh - 9.6rem);
  /* padding-right: 10rem; */
  padding-top: 5rem;
`;

const Circle = keyframes`
0% { -webkit-transform: rotate(0deg); }
100% { -webkit-transform: rotate(360deg); }
0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }

`;
export const CircleMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

export const ContainerCircle = styled.div`
  flex: 1;
  img {
    width: 75%;
    height: auto;
  }
`;

export const ContainerOne = styled.div`
  /* margin-left: 60%; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
  .rotateC {
    animation: ${Circle} 10s linear infinite;
    -webkit-animation: ${Circle} 10s linear infinite;
  }
  text {
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
`;

export const SpanE = styled.span`
  position: absolute;
  background-color: #e67e22;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
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
    top: 0;
    right: 5rem;
    width: 51rem;
    height: 11rem;
    z-index: -1;
    opacity: 0.6;
  }
  &:after {
    /* content: "0100"; */
    position: absolute;
    top: -13rem;
    right: 36rem;
    width: 10rem;
    height: 10rem;
    color: #fae5d3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
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
  width: 35%;
  padding: 1rem 2.1rem;
  border-radius: 5rem;
  background: linear-gradient(to right, red, purple);
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    background-color: #000;
    border-radius: 300px;
    z-index: -1;
    color: #fff;
  }
`;
export const Input = styled.input``;
export const Lable = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  /* padding: 1rem 2.1rem; */
  /* background-color: #e67e22; */
  font-size: 1.4rem;
  /* border-radius: 5rem; */
  font-weight: 500;
  cursor: pointer;
  /* opacity: 0.8; */
  transition: 0.3s;
  color: #ffffff;
  /* &:hover {
    opacity: 1;
  } */
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
