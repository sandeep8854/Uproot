import {
  AnswerParagraph,
  QestionHeading,
  QuestionAndAnswerContainer,
  SubContainerQuestion,
} from "./QuestionsAnswersStyled";

export const PricingQuestionAnswer = ({ question, answer }) => {
  return (
    <QuestionAndAnswerContainer>
      <SubContainerQuestion>
        <QestionHeading>{question}</QestionHeading>
        <AnswerParagraph>{answer}</AnswerParagraph>
      </SubContainerQuestion>
    </QuestionAndAnswerContainer>
  );
};
