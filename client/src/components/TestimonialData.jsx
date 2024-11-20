import {
  Container,
  ParagraphStar,
  RatingContainer,
  HeadingFour,
  Feedback,
  ProfileContainer,
  ProfileOnly,
  ImageProfile,
  NameAndProfession,
  NameP,
  Desination,
  Divvv,
} from "./TestimonialDataStyed";
const TestimonialData = (props) => {
  return (
    <Container>
      <RatingContainer>
        <Divvv>
          <ParagraphStar>{props.rating}</ParagraphStar>
          <ParagraphStar>{props.rating}</ParagraphStar>
          <ParagraphStar>{props.rating}</ParagraphStar>
          <ParagraphStar>{props.rating}</ParagraphStar>
          <ParagraphStar>{props.rating}</ParagraphStar>
        </Divvv>
        <HeadingFour>{props.sentance}</HeadingFour>
        <Feedback>{props.text}</Feedback>
      </RatingContainer>
      {/* profile */}
      <ProfileContainer>
        <ProfileOnly>
          <ImageProfile
            src={props.profilePhoto}
            alt="profile photo not find."
          />
        </ProfileOnly>
        <NameAndProfession>
          <NameP>{props.name}</NameP>
          <Desination>{props.desination}</Desination>
        </NameAndProfession>
      </ProfileContainer>
    </Container>
  );
};

export default TestimonialData;
