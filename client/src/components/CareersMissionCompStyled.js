import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0 13rem 8rem 13rem;
`;
export const SemiContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  flex-direction: row;
  /* flex-direction: ${({ direction }) => direction}; */
`;

export const SemiContainerFalse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  flex-direction: row-reverse;
  /* flex-direction: ${({ direction }) => direction}; */
`;
export const Left = styled.div`
  flex: 1;
  padding: 2rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const SemiLeft = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;
export const Span = styled.span`
  font-size: 2rem;
  color: #6666ff;
  font-weight: 500;
  letter-spacing: 1.2;
`;
export const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  color: #1a1a1a;
`;
export const SemiParagraph = styled.div`
  display: flex;
`;
export const Paragraph = styled.p`
  font-size: 1.6rem;
  color: #1a1a1a;
`;
export const Right = styled.div`
  flex: 1;
  align-items: center;
  justify-self: center;
  padding: 2rem 0 0 0;
`;

export const Image = styled.img`
  max-height: 40rem;
  width: 100%;
  border-radius: 0.8rem !important;
`;
