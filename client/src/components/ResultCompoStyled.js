import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  /* background-color: #fff1d5; */
`;

export const SubSection = styled.div`
  padding-top: 2rem;
  background-color: #fff1d5;
`;

export const Container = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  margin-left: 8rem;
  margin-right: 8rem;
  background-color: #ffffff;
  border-radius: 1rem;
`;

export const HeadingAndTextContainer = styled.div``;

export const IconAndOneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding-bottom: 1rem;
`;

export const ImageRemove = styled.img`
  width: 4.9rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeadingOne = styled.h1`
  font-size: 3.5rem;
  font-weight: 1000;
`;

export const Span = styled.span`
  color: red;
`;

export const HeadingThree = styled.h3`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 800;
`;

export const MainImageContainer = styled.div`
  padding: 2rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
`;

export const LeftSide = styled.div`
  flex: 1;
`;

export const ParagraphLeftSide = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const ImageLeft = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const RightSide = styled.div`
  flex: 1;
`;

export const ParagraphRightSide = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  background-image: url(/bg_layer.png);
  background-size: cover;
  background-position: center;
`;

export const ImageRight = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  position: relative;
  z-index: -1;
  /* if you do z -index -1 then yo will see the spinners otherwise image will be represent. */
`;
export const RemovalImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const loader = keyframes`
0% { 
  transform: rotate(0deg)
 }
100%
 { transform: rotate(360deg)
  }
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
`;
export const Transparent = styled.div`
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 60px;
  height: 60px;
  -webkit-animation: ${loader} 1s linear infinite; /* Safari */
  animation: ${loader} 1s linear infinite;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: flex-end;
  margin-right: 10rem;
  margin-left: 5rem;
  flex-wrap: wrap;
  padding-top: 2rem;
`;

export const Button = styled.button`
  text-decoration: none;
  background-color: #e67e22;
  border: none;
  padding: 1rem 2.1rem;
  border-radius: 2rem;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 500;
  opacity: 1;
  &:hover {
    opacity: 0.9;
    transition: all 0.3s;
  }
`;

export const AnchorTag = styled.a`
  text-decoration: none;
  background-color: #e67e22;
  border: none;
  padding: 1rem 2.1rem;
  border-radius: 2rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.4rem;
  color: #ffffff;
  opacity: 1;
  &:hover {
    opacity: 0.9;
    transition: all 0.3s;
  }
`;

export const SectionTwo = styled.div`
  background-color: #fff1d5;
  height: 100vh;
`;
