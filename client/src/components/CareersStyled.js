import styled from "styled-components";

export const MainContainer = styled.section`
  padding: 8rem;
`;

export const InnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 4.5rem;
`;

export const TextBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
`;
export const TextContainer = styled.div``;

export const SpanOne = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: rgb(21, 57, 187);
`;

export const HeadingDiv = styled.div``;

export const HeadingOne = styled.h1`
  font-size: 2.9rem;
  color: #1a1a1a;
  font-weight: 700;
`;

export const HeadingTwoDiv = styled.div``;

export const HeadingTwo = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: #1a1a1a;
`;

export const ButtonContainer = styled.div`
  padding: 1rem 2.1rem;
  border-radius: 5rem;
  color: #fff;
  background-color: #000;
  position: relative;
  z-index: 1;
  font-size: 1.4rem;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.5px;
  a {
    outline: none;
    text-decoration: none;
    color: #ffffff;
  }
  &:hover {
    background-color: #888;
  }
`;

export const ContainerButton = styled.div``;

export const ImageContainer = styled.div``;

export const ImageColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center all items */
  gap: 1rem; /* Space between images */
  padding: 2rem;
`;

export const ImageCard = styled.div`
  flex: 1 1 calc(20% - 32px); /* Adjust width, accounting for gap */
  max-width: calc(20% - 32px);
  max-height: 80%;

  /* @media (max-width: 1200px) {
    flex: 1 1 calc(25% - 32px);
    max-width: calc(25% - 32px);
  }

  @media (max-width: 992px) {
    flex: 1 1 calc(33.33% - 32px);
    max-width: calc(33.33% - 32px);
  }
  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 32px);
    max-width: calc(50% - 32px);
  }

  @media (max-width: 576px) {
    flex: 1 1 100%;
    max-width: 100%;
  } */
`;

export const Image = styled.img`
  width: 100%;
  height: 25rem;
  border-radius: 8px;
  display: block;
  object-fit: cover;
`;

export const CeoQuote = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CeoQuoteInline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 61rem;
  flex-direction: column;
  gap: 4rem;
`;
export const HeadingOneQuote = styled.h1`
  font-size: 2.5rem;
  color: #1a1a1a;
  font-weight: 700;
  text-align: center;
`;

export const ImageAndName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ImageAndNameInline = styled.div``;

export const ImageCEO = styled.img`
  width: 6rem;
  border-radius: 50%;
`;

export const NameAndProfession = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NameCEO = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
`;

export const Profession = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
`;

export const ImageCareer = styled.div`
  padding: 8rem;
`;

export const ImageCa = styled.img`
  max-width: 100%;
  border-radius: 0.8rem;
`;
