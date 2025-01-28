import { Container, Figure, GalleryImgage, ImageG } from "./GalleryStyled";

import { assets } from "../assets/assets";

const Gallery = () => {
  return (
    <Container>
      <GalleryImgage>
        <Figure className="gallery__item gallery__item--1">
          <ImageG
            src={assets.gal_1}
            alt="Gallery image 1"
            className="gallery__img"
          />
        </Figure>
        <Figure className="gallery__item gallery__item--2">
          <ImageG
            src={assets.gal_3}
            alt="Gallery image 2"
            className="gallery__img"
          />
        </Figure>
        <Figure className="gallery__item gallery__item--3">
          <ImageG
            src={assets.gal_2}
            alt="Gallery image 3"
            className="gallery__img"
          />
        </Figure>
        <Figure className="gallery__item gallery__item--4">
          <ImageG
            src={assets.gal_4}
            alt="Gallery image 4"
            className="gallery__img"
          />
        </Figure>
        <Figure className="gallery__item gallery__item--5">
          <ImageG
            src={assets.gal_5}
            alt="Gallery image 5"
            className="gallery__img"
          />
        </Figure>
        <Figure className="gallery__item gallery__item--6">
          <ImageG
            src={assets.gal_6}
            alt="Gallery image 6"
            className="gallery__img"
          />
        </Figure>
        <Figure className="gallery__item gallery__item--7">
          <ImageG
            src={assets.gal_7}
            alt="Gallery image 7"
            className="gallery__img"
          />
        </Figure>
        <Figure className="gallery__item gallery__item--8">
          <ImageG
            src={assets.gal_8}
            alt="Gallery image 8"
            className="gallery__img"
          />
        </Figure>
        <Figure className="gallery__item gallery__item--9">
          <ImageG
            src={assets.gal_9}
            alt="Gallery image 9"
            className="gallery__img"
          />
        </Figure>
        <Figure className="gallery__item gallery__item--10">
          <ImageG
            src={assets.gal_10}
            alt="Gallery image 10"
            className="gallery__img"
          />
        </Figure>
        <Figure className="gallery__item gallery__item--11">
          <ImageG
            src={assets.gal_11}
            alt="Gallery image 11"
            className="gallery__img"
          />
        </Figure>
        <Figure className="gallery__item gallery__item--12">
          <ImageG
            src={assets.gal_12}
            alt="Gallery image 12"
            className="gallery__img"
          />
        </Figure>
        <Figure className="gallery__item gallery__item--13">
          <ImageG
            src={assets.gal_13}
            alt="Gallery image 13"
            className="gallery__img"
          />
        </Figure>{" "}
        <Figure className="gallery__item gallery__item--14">
          <ImageG
            src={assets.gal_14}
            alt="Gallery image 14"
            className="gallery__img"
          />
        </Figure>
      </GalleryImgage>
    </Container>
  );
};

export default Gallery;
