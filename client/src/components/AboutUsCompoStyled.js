import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const MainContainer = styled.div`
  margin: 2rem;
`;

export const SemiMainContainers = styled.div`
  width: 50rem;
  margin: 0 auto;
`;

export const Thanks = styled.h1`
  font-weight: 800;
  padding-bottom: 0.5rem;
`;

export const SemiComponenent = styled.div`
  /* width: 50%;
  height: 50%; */
  display: flex;
  gap: 2rem;
  width: 50rem;
`;

export const Left = styled.div`
  /* flex: 1; */
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 3 / 2;
  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  background-color: #000;
  border-radius: 1rem;
`;

export const Mid = styled.div`
  flex: 0;
  border: 0.5px solid #88888873;
`;

export const Right = styled.div`
   */
`;

export const SemiRight = styled.div``;

export const Heading = styled.h1`
  font-weight: 800;
  color: #3e2723;
`;

export const JobMin = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const Job = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
export const Company = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: #e94c00;
`;

export const MobileDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
export const Mobile = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Email = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const WebsiteContainer = styled.div``;
export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  padding-top: 0.5rem;
`;

export const NavLink = styled(Link)`
  &.styleIconn {
    background-color: #e94c00;
    padding: 0.5rem 0.9rem 0.5rem 0.9rem;
    color: #000;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 3px;
  }
  &.website {
    font-size: 1.4rem;
    font-weight: 500;
    color: #e94c00;
    text-decoration: none;
  }
`;
export const SocialMin = styled.div``;

export const Imortant = styled.div``;

export const Break = styled.p`
  border: 0.5px solid #888873;
  margin-top: 1rem;
`;

export const Panagraphh = styled.p`
  font-size: 1rem;
  span {
    font-size: 1.4rem;
    margin-right: 2px;
    font-weight: 500;
    color: #e94c00;
  }
`;
