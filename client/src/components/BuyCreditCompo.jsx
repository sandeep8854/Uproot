import BuyCreditCart from "./BuyCreditCart";
import {
  CartContainerOnTop,
  Container,
  Div,
  HeadingAndText,
  HeadingOne,
  ParagraphOne,
  ParagraphTwo,
  Section,
  SpanOne,
  SpanTwo,
} from "./BuyCreditCompoStyled";
import { PiBirdFill } from "react-icons/pi";
import { FaRupeeSign } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { BsSpeedometer2 } from "react-icons/bs";

import { assets } from "../assets/assets";

const BuyCreditCompo = () => {
  return (
    <Section>
      <Div>
        <Container>
          <HeadingAndText>
            <HeadingOne>
              Find the right plan for your background removal needs.
            </HeadingOne>
            <ParagraphOne>
              The <SpanOne>Pro plan</SpanOne> gives you more challenges, guides
              and feedback.
            </ParagraphOne>
            <ParagraphTwo>
              The <SpanTwo>Ultimate</SpanTwo> and Enjoy Instant Access to Pro
              Features
            </ParagraphTwo>
          </HeadingAndText>
          {/* card will be represent here... as cardComponent.*/}
          <CartContainerOnTop>
            <BuyCreditCart
              bgColor="ffffff"
              textSpan="Starting point"
              logo={<PiBirdFill size={20} />}
              logoText="Basic"
              RupeesIcon={<FaRupeeSign />}
              price="299"
              creditBalance="/100 credits"
              noteOne="billed monthly (you'll"
              noteTwo="save ₹15)"
              tickOne={assets.tick}
              pointOne="Including the basic adjust and beauty features, filter and frame."
              tickTwo={assets.tick}
              pointTwo="Including partial creative and editing features and design tool."
              tickThree={assets.tick}
              pointThree="Recommended for personal use and enjoy the benefits of quality."
              tickFour={assets.tick}
              pointFour="Refers friends and earn free credits and enjoy the facility."
              button="Try BASIC first!"
            />
            <BuyCreditCart
              bgColor="EFBF04"
              textSpan="Advanced"
              logo={<FaCrown size={20} />}
              logoText="Pro user"
              RupeesIcon={<FaRupeeSign />}
              price="999"
              creditBalance="/1499 credits"
              noteOne="billed annually (you'll"
              noteTwo="save ₹99)"
              tickOne={assets.tick}
              pointOne="Remove unwanted objects text and watermarks from photo."
              tickTwo={assets.tick}
              pointTwo="Change and replace the object from your photo."
              tickThree={assets.tick}
              pointThree="Instantly remove the image background with one click."
              tickFour={assets.tick}
              pointFour="24/7 Customer support and resolve your quries through text & call."
              button="Become a PRO!"
            />
            <BuyCreditCart
              bgColor="1428A0"
              textSpan="Best for bussiness"
              logo={<BsSpeedometer2 size={20} />}
              logoText="Ultimate"
              RupeesIcon={<FaRupeeSign />}
              price="1599"
              creditBalance="/2999 credits"
              noteOne="billed annually (you'll"
              noteTwo="save ₹199)"
              tickOne={assets.tick}
              pointOne="Schedules a demo with our experts team and developers"
              tickTwo={assets.tick}
              pointTwo="Get quote tailed to your requirement with our expert team."
              tickThree={assets.tick}
              pointThree="Book 1:1 session with our product experts and align your business"
              tickFour={assets.tick}
              pointFour="Tips and guide (AI releted tool) will be provided."
              button="Go ULTIMATE and save!"
            />
          </CartContainerOnTop>
        </Container>
      </Div>
      {/* <h1>hello</h1> */}
    </Section>
  );
};

export default BuyCreditCompo;
