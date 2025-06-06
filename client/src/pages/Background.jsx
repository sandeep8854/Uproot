import AppleLeaf from "../components/AppleLeaf";
import { BackAssetsCompo } from "../components/BackAssetsCompo";
import BgSlider from "../components/BgSlider";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { QuestionsAnswers } from "../components/QuestionsAnswers";
import {
  Container,
  Heading,
  MainContainer,
} from "../components/QuestionsAnswersStyled";

const Background = () => {
  const arrayData = [
    {
      id: 1,
      imageName: "bg_One",
      heading: "Effortless transparent cutout backgrounds.",
      text: "Have a challenging photo background to remove for a clean, distraction-free picture? Our free background remover app enables you to isolate and highlight the subject on a clear background with ease. That way, you can insert the image into any new design and make it look natural!",
    },
    {
      id: 2,
      imageName: "bg_Two",
      heading: "Remove the background from an image and download instantly.",
      text: "Erase the background of a picture with accuracy - be it the cricket stadium crowd or someone's messy hair in your Diwali photos. Our photo background remover provides instantly downloadable results. Share it quickly across social channels or continue to edit in Adobe Express.",
    },
    {
      id: 3,
      imageName: "bg_Three",
      heading: "Express yourself with Uproot Express.",
      text: "Uproot Express is your complete all-in-one AI content creation app, enabling you to swiftly and effortlessly create impactful social posts, images, videos, flyers, presentations, documents, and more. With powerful generative AI, intuitive editing tools, thousands of customisable templates, and Uproot Stock design assets, you can create unique content quickly, regardless of your skill level.",
    },
    {
      id: 4,
      imageName: "bg_Four",
      heading: "Design in Hindi, Bengali and Tamil.",
      text: "No more language limitations! Adobe Express is now available in three of India’s most spoken languages, making it even easier to create everything from cards and social posts to flyers and video content. Design with confidence in the language that feels most natural to you.",
    },
    {
      id: 5,
      imageName: "bg_Five",
      heading:
        "Unlock possibilities! Create images with transparent backgrounds for free.",
      text: "Want to isolate yourself from a group photo for the perfect profile pic, or create a stunning collage with cutouts? Shorten your editing time by making images with transparent backgrounds quickly for free with Adobe Express. Place them into a variety of new designs and destinations seamlessly.",
    },
    {
      id: 6,
      imageName: "bg_Six",
      heading: "Customise your images with a blank background like a pro.",
      text: "Do much more with your transparent background image online by turning up your creativity and photo editing capabilities with Uproot Express. Add a shape crop to frame your newly cropped photo, apply filters, experiment with templates, or add GIFs and animation for a dynamic design.",
    },
  ];
  const questionAnswerData = [
    {
      id: 1,
      question: "What makes Uproot Express the best background remover?",
      answer:
        "Our free background remover tool delivers professional-quality, fast, and accurate results in just 3 simple steps. Best of all, it’s free to use anytime, anywhere on both your desktop and mobile device - and anyone can use it, no experience necessary.",
    },
    {
      id: 2,
      question: "Can I remove the background on my phone?",
      answer:
        "Yes, absolutely! If you want to remove background on the go, then launch our free photo background remover tool on your mobile device and let it work its magic within seconds after uploading your image! If you are looking for a free app to remove backgrounds with, consider downloading the Uproot Express app to remove backgrounds even more efficiently. It is completely hassle-free, convenient, and intuitive to use, and anyone can work with it without prior experience",
    },
    {
      id: 3,
      question: "How do I make a background transparent?",
      answer:
        "When you use our free background remover to change the background of your image, it will automatically make the background transparent - be it a white background, coloured background and JPEG file.",
    },
    {
      id: 4,
      question: "Who can benefit from the background remover tool?",
      answer:
        "Everyone from marketers, entrepreneurs, and creators to students and professionals can benefit from the background remover tool. Whether you simply desire a background change for a potential profile photo or want to create premium-quality image cutouts for your creative project, our beginner-friendly free background remover tool is for everyone. You can further customise your image and unleash your creativity by editing the photos on our all-in-one AI content creation tool, Uproot Express!",
    },
    {
      id: 5,
      question: "Can I change the photo’s background?",
      answer:
        "Yes, you can easily change any photo's background by using this tool as a photo background changer. Once you have removed the background from a picture, change the background in your photo by opening the full Uproot Express editor. Then, add your image to a new project to place it on a background of your choice.",
    },
    {
      id: 6,
      question: "Can I use Uproot Express for free? If so, what’s included?",
      answer:
        "Yes, Uproot Express has a free plan available for anyone. Enjoy everything you need to stand out, including dozens of Quick Action tools, thousands of templates, photo editing and effects, and much more. Visit our plans and pricing for details.",
    },
  ];
  return (
    <div>
      <BgSlider />
      <div>
        {arrayData.map((card, index) => (
          <BackAssetsCompo
            key={card.id}
            index={index + 1}
            imaageSrc={card.imageName}
            heading={card.heading}
            text={card.text}
          />
        ))}
      </div>
      <MainContainer>
        <Container>
          <Heading>Frequenty asked questions.</Heading>
        </Container>
        {questionAnswerData.map((data) => (
          <QuestionsAnswers
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

export default Background;
