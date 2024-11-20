import Hero from "../components/Hero";
import Featured from "../components/Featured";
import EffectiveBgRemoval from "../components/EffectiveBgRemoval";
import ThreeStepRemoval from "../components/ThreeStepRemoval";
import BgSlider from "../components/BgSlider";
import Testimonials from "../components/Testimonials";
import Magic from "../components/Magic";
const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <EffectiveBgRemoval />
      <ThreeStepRemoval />
      <BgSlider />
      <Testimonials />
      <Magic />
    </div>
  );
};

export default Home;
