import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  padding-left: 15rem;
  padding-right: 15rem;
`;

export const SubContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: row;
`;

export const SubContainerRight = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: row-reverse;
`;
export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  width: 100%;
  max-width: 50rem;
  height: auto;
`;

export const TextContainer = styled.div`
  flex: 1;
  padding-top: 5rem;
`;

export const Heading = styled.h1`
  font-size: 4.2rem;
  font-weight: 1000;
  margin-bottom: 2rem;
  line-height: 1.2;
`;

export const Paragraph = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  max-width: 72%;
  line-height: 1.6;
`;
