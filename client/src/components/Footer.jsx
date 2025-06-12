import {
  BlogContainer,
  BlogHeading,
  BlogImage,
  BottomSide,
  Container,
  ContentContainer,
  DateAndTime,
  Fliker,
  FollowUs,
  FooterContainer,
  HiringContainer,
  ImageMedia,
  Input,
  Label,
  LeftSide,
  List,
  LogoImage,
  MediaIcon,
  MiddleSide,
  NavLink,
  Paragraph,
  ParagraphBottom,
  PhotoMedia,
  Post,
  RightSIde,
  SpanBlog,
  Subscribe,
  SubscribeButton,
  TextContainer,
  UnorderList,
} from "./FooterStyled";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { IoMdStopwatch } from "react-icons/io";
import { FaComment } from "react-icons/fa";

import { assets } from "../assets/assets.js";

const Footer = () => {
  const social = [
    FaGithub,
    FaGitlab,
    FaLinkedin,
    FaHackerrank,
    SiLeetcode,
    BsTwitterX,
  ];
  const socialMediaIcons = [
    {
      id: "Github",
      icon: "FaGithub",
      link: "https://github.com/sandeep8854",
      target: "_blank",
      rel: "",
    },
    {
      id: "GitLab",
      icon: "FaGitlab",
      link: "https://gitlab.com/sandeepprajapati8854",
      target: "_blank",
      rel: "",
    },
    {
      id: "LinkedIn",
      icon: "FaLinkedin",
      link: "https://www.linkedin.com/in/sandeep-prajapati-099731269/",
      target: "_blank",
      rel: "",
    },
    {
      id: "HackerRank",
      icon: "FaLinkedin",
      link: "https://www.hackerrank.com/profile/sandeepstructure",
      target: "_blank",
      rel: "",
    },
    {
      id: "Leetcode",
      icon: "FaLinkedin",
      link: "https://leetcode.com/sandeepstructure/",
      target: "_blank",
      rel: "",
    },
    {
      id: "Twitter",
      icon: "FaLinkedin",
      link: "https://twitter.com/sandeepdevps",
      target: "_blank",
      rel: "",
    },
  ];

  return (
    <FooterContainer>
      <Container>
        <ContentContainer>
          <LeftSide>
            <NavLink to="/">
              <LogoImage src={assets.whiteLogo} alt="Uproot logo"></LogoImage>
            </NavLink>
            <Paragraph>
              Easily remove the background from image in Uproot. Continue
              editing your image in Uproot and express <br />
              to quickly change the background.
            </Paragraph>
            {/* follow up */}
            <FollowUs>Follow us</FollowUs>
            <MediaIcon>
              {socialMediaIcons.map((iconEle, index) => {
                const Icon = social[index];
                return (
                  <>
                    <NavLink
                      to={iconEle.link}
                      target={iconEle.target}
                      rel={iconEle.rel}
                      className="styleIcon"
                      key={index}
                    >
                      <Icon />
                    </NavLink>
                  </>
                );
              })}
            </MediaIcon>
            <Subscribe>Subscribe to newslatter</Subscribe>
            <form>
              <Label for="emailName"></Label>
              <Input
                type="email"
                id="emailName"
                placeholder="Enter Your Email"
                required
              />
              <SubscribeButton>Subscribe</SubscribeButton>
            </form>
          </LeftSide>
          {/* middle */}
          <MiddleSide>
            <Fliker>Featured Posts</Fliker>
            <BlogContainer>
              <NavLink to="/">
                <BlogImage src={assets.blog_1} alt="Uproot logo"></BlogImage>
                <TextContainer>
                  <BlogHeading>Why blur the background of a photo?</BlogHeading>
                  <DateAndTime>
                    <SpanBlog>
                      <IoMdStopwatch />
                      January 15,2024
                    </SpanBlog>
                    <SpanBlog>
                      <FaComment />
                      33
                    </SpanBlog>
                  </DateAndTime>
                </TextContainer>
              </NavLink>
              <NavLink to="/">
                <BlogImage src={assets.blog_2} alt="Uproot logo"></BlogImage>
                <TextContainer>
                  <BlogHeading>
                    How to make a logo tranparent for your business?
                  </BlogHeading>
                  <DateAndTime>
                    <SpanBlog>
                      <IoMdStopwatch />
                      February 15,2024
                    </SpanBlog>
                    <SpanBlog>
                      <FaComment />
                      22
                    </SpanBlog>
                  </DateAndTime>
                </TextContainer>
              </NavLink>
              <NavLink to="/">
                <BlogImage src={assets.blog_3} alt="Uproot logo"></BlogImage>
                <TextContainer>
                  <BlogHeading>
                    How to easily remove backgrounds from your singnature?
                  </BlogHeading>
                  <DateAndTime>
                    <SpanBlog>
                      <IoMdStopwatch />
                      June 15,2024
                    </SpanBlog>
                    <SpanBlog>
                      <FaComment />
                      15
                    </SpanBlog>
                  </DateAndTime>
                </TextContainer>
              </NavLink>
            </BlogContainer>
            <HiringContainer>
              <NavLink to="/careers">We are hiring!</NavLink>
            </HiringContainer>
          </MiddleSide>
          {/* Right side */}
          <RightSIde>
            <Fliker>Flikr photos</Fliker>
            <PhotoMedia>
              <ImageMedia src={assets.media_1} alt="fliker media" />
              <ImageMedia src={assets.media_2} alt="fliker media" />
              <ImageMedia src={assets.media_3} alt="fliker media" />
              <ImageMedia src={assets.media_6} alt="fliker media" />
              <ImageMedia src={assets.media_8} alt="fliker media" />
              <ImageMedia src={assets.media_7} alt="fliker media" />
              <ImageMedia src={assets.media_4} alt="fliker media" />
              <ImageMedia src={assets.media_5} alt="fliker media" />
            </PhotoMedia>
            <Fliker>Recent Tweets</Fliker>
            <Post>
              <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                  Programming isn&#39;t about what you know, it&#39;s about what
                  you can figure out.
                </p>
                <br />
                <span>
                  &mdash; Useless person (Failed in everything) (@sandeepdevps)
                </span>
                <br />
                <a href="https://twitter.com/sandeepdevps/status/1860541182385799590?ref_src=twsrc%5Etfw">
                  November 24, 2024
                </a>
              </blockquote>
            </Post>
          </RightSIde>
        </ContentContainer>
        <BottomSide>
          <ParagraphBottom>
            Copyright&#169; 2024 All right reserved | Made ❤️ by Sandeep
            Prajapati
          </ParagraphBottom>
          <UnorderList>
            <List>
              <NavLink to="/about-us">About us</NavLink>
            </List>
            <List>
              <NavLink to="/contact">Contact</NavLink>
            </List>
            <List>
              <NavLink to="/advertisement">Advertisement</NavLink>
            </List>
            <List>
              <NavLink to="/privacy">Privacy</NavLink>
            </List>
          </UnorderList>
        </BottomSide>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
