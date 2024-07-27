import FlexBox from "@Components/common/UI/FlexBox";
import { Body1, Display, H6 } from "@Components/common/UI/Headings";
import styled from "styled-components";

const Wrapper = styled(FlexBox)`
  max-width: 85%;
  margin: auto;
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 700px;
  height: 450px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  object-fit: cover;
`;
const LeftContainer = styled(FlexBox)`
  flex-direction: column;
  width: 50%;
`;
const TextContainer = styled(FlexBox)`
  position: absolute;
  z-index: 5;
  width: 60%;
  top: 97px;
  margin-left: -56px;
`;
const Subtitle = styled(FlexBox)`
  position: relative;
  top: 260px;
  margin-left: 82px;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 49px;
  line-height: 66px;
  text-align: left;
  font-weight: bold;
  margin-left: 138px;
  background: white;
  border-radius: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 1.5rem;
  gap: 10px;
  border-radius: 1rem;
  opacity: 0px;
  background-color: #3dbaf8;
  color: #fafafa;
  border: none;
`;
const Body = () => (
  <Wrapper>
    <LeftContainer>
      <TextContainer>
        <Heading bold>Innovating Today for a Healthier Tomorrow</Heading>
      </TextContainer>
      <Subtitle>
        <H6>
          Lorem ipsum dolor sit amet consectetur. Iaculis condimentum velit
          felis ut viverra tellus velit. Porttitor leo diam tincidunt fermentum
          platea turpis fames. Sed mauris faucibus venenatis justo volutpat
          amet. Malesuada urna pharetra enim arcu nec tellus.
        </H6>
        <Button>Get In Touch</Button>
      </Subtitle>
    </LeftContainer>
    <ImageContainer>
      <Image src="/assets/Image.jpg" alt="image" />
    </ImageContainer>
  </Wrapper>
);

export default Body;
