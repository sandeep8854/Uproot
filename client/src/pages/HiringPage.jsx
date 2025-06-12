import Careers from "../components/Careers";
import CareersMissionComp from "../components/CareersMissionComp";

const HiringPage = () => {
  const missionData = [
    {
      id: 1,
      imageName: "mission_one",
      mission: "Our Mission",
      missionH1: "Sharing and working together",
      quote:
        "Our mission is to make a positive and lasting impact on society through our programs. We strive to empower individuals, promote inclusivity, and foster personal and professional growth. Through innovative initiatives, educational opportunities, and community engagement, we aim to inspire, educate, and equip people with the skills and resources they need to thrive.",
    },
    {
      id: 2,
      imageName: "mission_Two",
      mission: "Our Goals",
      missionH1: "Change the World",
      quote:
        "Most people die never realizing they lived a life doing mediocre work. If you aren't one among them and need a purpose and meaning to what you do, you will find company at Uproot. We do our best, to make your job feel inspired, enthused and is something that you would look forward to doing every day, something that would push you out of your bed.",
    },
    {
      id: 2,
      imageName: "mission_Three",
      mission: "Why Join Us?",
      missionH1: "Not a Company, Its a Movement!",
      quote:
        "If you are an ambitious & creative person who wants to build things, this is the place for you! Work & learn and build with us! We are growing fast, Driven team, Benefits and  Company equity.",
    },
  ];
  return (
    <div>
      <Careers />
      <div>
        {missionData.map((ele, index) => (
          <CareersMissionComp
            key={ele.id}
            index={index}
            imageSrc={ele.imageName}
            mission={ele.mission}
            missionH1={ele.missionH1}
            quote={ele.quote}
            direction={ele.direction}
          />
        ))}
      </div>
    </div>
  );
};

export default HiringPage;
