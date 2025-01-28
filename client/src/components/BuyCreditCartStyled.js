import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  padding: 2rem;
`;

export const ContainerSpanB = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;
`;

export const SpanOne = styled.span`
  border: 1px solid #f0f0f0;
  padding: 1.3rem 5rem 1.3rem 5rem;
  font-size: 1.2rem;
  font-weight: 700;
  display: inline-block;
  border-radius: 2.5rem;
`;

export const ContainerTwo = styled.div`
  /*  */
  border-left: 2px solid #000000;
  padding-left: 2.3rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  padding-left: 3.5px;
`;

export const SpanTwo = styled.span`
  font-weight: 600;
`;

export const PricingContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const HeadingOne = styled.h1`
  font-size: 3.5rem;
  font-weight: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpanThree = styled.span`
  display: flex;
  align-items: flex-end;
  font-size: 1.5rem;
`;

export const NoteContainer = styled.div`
  margin-top: 1rem;
  padding-left: 3.5px;
`;

export const SpanFour = styled.span`
  font-size: 1.4rem;
`;

export const SpanFive = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
`;

export const MiddleContainer = styled.div`
  padding-top: 3rem;
  margin-left: -7px;
`;

export const ContainerThree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ImageTick = styled.img``;

export const SpanSix = styled.span`
  font-size: 1.4rem;
`;

export const ButtonContainer = styled.div`
  display: grid;
  place-items: center;
  padding-top: 2rem;
`;

export const Button = styled.button`
  padding: 1rem 2.1rem;
  outline: none;
  border: 1px solid #f0f0f0;
  border-radius: 25px;
  background-color: #ffffff;
  font-size: 1.4rem;
  font-weight: 500;
  color: #000000;
  opacity: 1;
  cursor: pointer;
  width: 80%;
  /* background-color: ${(props) =>
    props.basic === "white"
      ? "white"
      : props.pro === "green"
      ? "green"
      : props.business === "red"
      ? "red"
      : "black"}; */
  &:hover {
    opacity: 0.9;
    transition: all 0.3s;
    background-color: #f0f0f0;
  }
`;
