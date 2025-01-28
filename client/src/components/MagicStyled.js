import styled from "styled-components";

export const Section = styled.section``;

export const Container = styled.div`
  padding-top: 4rem;
  padding-bottom: 8rem;
  margin-left: 8rem;
  margin-right: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
`;

export const HeadingOne = styled.h1`
  font-size: 3.5rem;
  font-weight: 1000;
  padding-bottom: 1rem;
`;
export const Span = styled.span`
  color: red;
`;
export const UploadContainer = styled.div`
  display: inline;
  width: 20%;
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
