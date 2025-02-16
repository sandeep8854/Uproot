import styled from "styled-components";

export const Container = styled.section`
  padding-left: 5rem;
  padding-right: 5rem;
  background-color: #0c0c0c;
`;

export const GalleryImgage = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 6vw);
  grid-gap: 1.5rem;
  padding: 1.2rem;
  background-color: #212121;
  border-radius: 0.5rem;
`;

export const Figure = styled.figure`
  &.gallery__item--1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  &.gallery__item--2 {
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 4;
  }
  &.gallery__item--3 {
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  &.gallery__item--4 {
    grid-column-start: 7;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  &.gallery__item--5 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 6;
  }
  &.gallery__item--6 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 6;
    grid-row-end: 8;
  }
  &.gallery__item--7 {
    grid-column-start: 6;
    grid-column-end: 8;
    grid-row-start: 3;
    grid-row-end: 5;
  }
  &.gallery__item--8 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 6;
  }
  &.gallery__item--10 {
    grid-column-start: 8;
    grid-column-end: 9;
    grid-row-start: 3;
    grid-row-end: 6;
  }
  &.gallery__item--11 {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 6;
    grid-row-end: 8;
  }

  &.gallery__item--12 {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 8;
  }
  &.gallery__item--13 {
    grid-column-start: 5;
    grid-column-end: 8;
    grid-row-start: 5;
    grid-row-end: 8;
  }
  &.gallery__item--14 {
    grid-column-start: 8;
    grid-column-end: 9;
    grid-row-start: 6;
    grid-row-end: 8;
  }
`;

export const ImageG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 16/9;
  border-radius: 2px;
`;
