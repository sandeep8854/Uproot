import AppleLeafComponent from "./AppleLeafComponent";
import { Container, MainContainerApple, Section } from "./AppleLeafStyled";
import { assets } from "../assets/assets";

const AppleLeaf = () => {
  return (
    <Section>
      <Container>
        <MainContainerApple>
          <AppleLeafComponent
            imageLeafLeft={assets.leaf}
            imageApple={assets.apple}
            text="1K Downloads"
            imageLeafRight={assets.leaf}
          />
          <AppleLeafComponent
            imageLeafLeft={assets.leaf}
            imageApple={assets.window}
            text="1.2K Downloads"
            imageLeafRight={assets.leaf}
          />
          <AppleLeafComponent
            imageLeafLeft={assets.leaf}
            imageApple={assets.android}
            text="Editor choice"
            imageLeafRight={assets.leaf}
          />
        </MainContainerApple>
      </Container>
    </Section>
  );
};

export default AppleLeaf;
