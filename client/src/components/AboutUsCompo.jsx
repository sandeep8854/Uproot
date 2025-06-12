import {
  Break,
  Email,
  Heading,
  Image,
  Imortant,
  Job,
  JobMin,
  Left,
  MainContainer,
  Mid,
  Mobile,
  MobileDiv,
  NavLink,
  Panagraphh,
  Right,
  SemiComponenent,
  SemiMainContainers,
  SemiRight,
  Social,
  Thanks,
} from "./AboutUsCompoStyled";
import { AiOutlineMail } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";

export const AboutUsCompo = () => {
  return (
    <MainContainer>
      <SemiMainContainers>
        <Thanks>Thanks & Regards,</Thanks>
        <SemiComponenent>
          <Left>
            <Image
              src={"/src/assets/trukkerLogo_1.jpeg"}
              alt="logo not found."
            />
          </Left>
          <Mid></Mid>
          <Right>
            <SemiRight>
              <Heading>Sandeep Prajapati</Heading>
              <JobMin>
                <Job>Operation Executive,</Job>
                <NavLink
                  to="https://trukker.com/"
                  target="_blank"
                  rel=""
                  className="website"
                >
                  TruKKer
                </NavLink>
              </JobMin>
              <MobileDiv>
                <LuPhoneCall size={15} color="#E94C00" />
                <Mobile>+91-936-400-8299</Mobile>
              </MobileDiv>
              <MobileDiv>
                <AiOutlineMail size={15} color="#E94C00" />
                <Email>sandeep.prajapati@trukker.com</Email>
              </MobileDiv>
              <MobileDiv>
                <AiOutlineLink size={15} color="#E94C00" />
                <Email>https://trukker.com</Email>
              </MobileDiv>
              <Social>
                {/* <SocialMin> */}
                <NavLink
                  to="htttps//"
                  target="_blank"
                  rel={""}
                  className="styleIconn"
                >
                  <RiTwitterLine size={15} />
                </NavLink>
                <NavLink
                  to="htttps//"
                  target="_blank"
                  rel={""}
                  className="styleIconn"
                >
                  <SlSocialLinkedin size={15} />
                </NavLink>
                <NavLink
                  to="htttps//"
                  target="_blank"
                  rel={""}
                  className="styleIconn"
                >
                  <FaInstagram size={15} />
                </NavLink>
                {/* </SocialMin> */}
              </Social>
            </SemiRight>
          </Right>
        </SemiComponenent>
        <Imortant>
          <Break></Break>
          <Panagraphh>
            <span>Important:~</span>
            The contents of this email and any attachments are confidential.
            They are intended for the named recipient(s) only. If you have
            received this email by mistake, please notify the sender immediately
            and do not disclose the contents to anyone or make copies thereof.
          </Panagraphh>
        </Imortant>
      </SemiMainContainers>
    </MainContainer>
  );
};

// export default AboutUsCompo;
