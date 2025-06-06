import BuyCreditCompo from "../components/BuyCreditCompo";
import Footer from "../components/Footer";
import AppleLeaf from "../components/AppleLeaf";
import Gallery from "../components/Gallery";
import {
  Container,
  Heading,
  MainContainer,
} from "../components/QuestionsAnswersStyled";
import { PricingQuestionAnswer } from "../components/PricingQuestionAnswer";

const BuyCredit = () => {
  const pricingQuestionAnswer = [
    {
      id: 1,
      question: "How do I get started?",
      answer:
        "Visit the Uproot website (www.uproot.com) on your mobile device or desktop. Alternatively, if you prefer editing photos on a desktop, you can sign in to the uproot website.",
    },
    {
      id: 2,
      question: "What is included in the Free plan?",
      answer:
        "You have access to the uproot website and its many features such as background remover, adding text, and lots of stunning templates. The Free plan also includes 250 exports per month.",
    },
    {
      id: 3,
      question: "What is included in the Pro plan?",
      answer:
        "With the Pro Plan, you can export and save your designs without any limitations. You also enjoy access to our AI background image generator (AI Backgrounds), as well as our other AI-enabled tools, all Photoroom templates, and Batch Mode.",
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer:
        "You can exclusively use your credit card, Debit card, UPI and Netbanking for payments on the website.",
    },
    {
      id: 5,
      question: "Will I be charged VAT/GST?",
      answer:
        "No, VAT/GST (Value Added Tax/Good Service Tax) is already included.",
    },
    {
      id: 6,
      question: "How do I cancel my Photoroom subscription or trial?",
      answer:
        "Go to your account settings in the app and click on “Manage Subscriptions”. You can cancel your subscription (Pro, Advanced Ultimate) with one click.",
    },
    {
      id: 7,
      question: "Can I upgrade or downgrade my subscription?",
      answer:
        "Navigate to your account settings within the Website and select 'Manage Subscriptions.' From there, you can modify your subscription.",
    },
    {
      id: 8,
      question: "What is your refund policy?",
      answer:
        "If you have purchased a subscription Pro plan, you may be eligible for a refund within the first 7 days following your last payment.",
    },
    {
      id: 9,
      question: "How can I check what Uproot subscription I have?",
      answer:
        "Sign in to your Uproot account and click the Dashboard to see your remaining credits and monitor your credit usage.",
    },
  ];
  return (
    <div>
      <BuyCreditCompo />
      <MainContainer>
        <Container>
          <Heading>You asked, we answered.</Heading>
        </Container>
        {pricingQuestionAnswer.map((data) => (
          <PricingQuestionAnswer
            key={data.id}
            question={data.question}
            answer={data.answer}
          />
        ))}
      </MainContainer>
      <AppleLeaf />
      <Gallery />
      <Footer />
    </div>
  );
};

export default BuyCredit;
