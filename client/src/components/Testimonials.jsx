import TestimonialData from "./TestimonialData";
import {
  CartTestimonial,
  ContainerOne,
  ContainerTwo,
  DivHrConainer,
  DivHrOne,
  DivHrTwo,
  GoogleContainer,
  Heading1,
  Heading2,
  MainGoogle,
  ParagraphGoogle,
  ParaSpan,
  ParaStar,
  Section,
  Span,
  Span1,
} from "./TestimonialStyled";

import { IoMdStar } from "react-icons/io";

import { assets } from "../assets/assets";

const Testimonials = () => {
  return (
    <Section>
      <ContainerOne>
        <ContainerTwo>
          <Heading1>
            What <Span>people</Span> have to say about Uproot?
          </Heading1>
          <Heading2>
            Choose Uproot confidently! Here is how our worldwide customers
            expressed their experiences with using <Span>Uproot</Span>
          </Heading2>
        </ContainerTwo>
        <DivHrConainer>
          <DivHrOne></DivHrOne>
          <MainGoogle>
            <GoogleContainer>
              <ParagraphGoogle>Based on 80 ratings</ParagraphGoogle>
              <ParaSpan>
                <Span1>4.7</Span1> out of 5
              </ParaSpan>
              <ParaStar>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </ParaStar>
            </GoogleContainer>
          </MainGoogle>
          <DivHrTwo></DivHrTwo>
        </DivHrConainer>
        {/* Cart of Testimonial */}
        <CartTestimonial>
          <TestimonialData
            rating={<IoMdStar />}
            sentance="Affordable and efficient"
            text="Uproot has turned my one-bedroom apartment into a professional photo studio. Rather than spending hours or thousands of dollars editing photos, Uproot allows me to create pro photos in seconds, so not only does it make my photos look great, but it is affordable & efficient."
            profilePhoto={assets.img1}
            name="Simran Tandon"
            desination="Content Creator"
          />
          <TestimonialData
            rating={<IoMdStar />}
            sentance="Suitable photos for my website"
            text="I love being able to remove backgrounds from my pictures. I sell online, and when I take pictures, it's not always in a clean. I like how Uproot gets rid of all of that and allows me to change the background to something more pleasing to the eye and suitable to place on my website."
            profilePhoto={assets.img2}
            name="Divyani Gootam"
            desination="Reseller on eBay"
          />
          <TestimonialData
            rating={<IoMdStar />}
            sentance="A total game changer!"
            text="I have been using Uproot for almost 2 years now, mainly for Instagram. Uproot is so user-friendly and makes my work complete. The Uproot group on Facebook is super, with lots of tips and tricks and good communication with Uproot if there is a problem."
            profilePhoto={assets.img3}
            name="Annu Jha"
            desination="Small business owner"
          />
        </CartTestimonial>
      </ContainerOne>
    </Section>
  );
};

export default Testimonials;
