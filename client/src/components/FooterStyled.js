import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #0c0c0c;
  /* background-image: url(/bg_with_design.svg); */
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const Container = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  background-color: #212121;
  min-height: 75vh;
  border-radius: 5px;
`;

export const ContentContainer = styled.div`
  display: flex;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 3rem;
  gap: 2rem;
`;

export const LeftSide = styled.div`
  flex: 1;
`;

export const NavLink = styled(Link)`
  &.styleIcon {
    background-color: #b3b3b3;
    padding: 0.7rem 1.2rem 0.7rem 1.2rem;

    color: #000;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const LogoImage = styled.img`
  width: 54%;
  height: 14%;
  aspect-ratio: 3/2;
  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  margin-bottom: 2.5rem;
`;
export const Paragraph = styled.p`
  font-size: 1.4rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
`;

export const FollowUs = styled.h3`
  font-size: 1.4rem;
  color: #ffffff;
  font-weight: 1000;
  text-transform: uppercase;
`;

export const MediaIcon = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: flex-start;
  padding-top: 1rem;
`;

export const Subscribe = styled.h3`
  font-size: 1.4rem;
  color: #ffffff;
  font-weight: 1000;
  text-transform: uppercase;
  margin-top: 2.5rem;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  padding: 1rem 1.5rem;
  background-color: #b3b3b3;
  border: none;
  margin-top: 1rem;
  width: 85%;
  border-radius: 2rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  &::placeholder {
    color: #000;
    font-size: 1.4rem;
    font-weight: 500;
  }
  :-ms-input-placeholder {
    color: #000;
  }
`;
export const SubscribeButton = styled.button`
  padding: 1rem 2.1rem;
  border-radius: 5rem;
  color: #fff;
  background: linear-gradient(to right, red, purple);
  position: relative;
  z-index: 1;
  font-size: 1.4rem;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.5px;
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
export const MiddleSide = styled.div`
  flex: 1;
`;
export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  a {
    display: flex;
    gap: 2rem;
    text-decoration: none;
    margin-bottom: 1.3rem;
  }
`;

export const BlogImage = styled.img`
  width: 8rem;
  height: 8rem;
  aspect-ratio: 3/2;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BlogHeading = styled.h3`
  font-size: 1.4rem;
  color: #fff;
`;

export const DateAndTime = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
`;

export const SpanBlog = styled.span`
  font-size: 1.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

export const Span = styled.span`
  font-size: 1.2rem;
  color: #fff;
`;

export const RightSIde = styled.div`
  flex: 1;
`;

export const Fliker = styled.h3`
  font-size: 1.4rem;
  color: #ffffff;
  font-weight: 1000;
  text-transform: uppercase;
`;

export const PhotoMedia = styled.div`
  display: flex;
  row-gap: 1.3rem;
  column-gap: 1.3rem;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ImageMedia = styled.img`
  height: 8rem;
  width: 8rem;
  aspect-ratio: 3/2;
`;
export const Post = styled.div`
  padding-top: 1rem;
  p {
    font-size: 1.4rem;
    color: #fff;
  }
  span {
    font-size: 1.4rem;
    color: #fff;
  }
  a {
    color: #fff;
    font-size: 1.4rem;
  }
`;

export const BottomSide = styled.div`
  margin-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ParagraphBottom = styled.p`
  flex: 2;
  font-size: 1.4rem;
  color: #fff;
`;

export const UnorderList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.4rem;
  flex: 1;
  text-transform: uppercase;
  margin-left: -1rem;
`;

export const List = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.3rem;
  }
`;
