/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import HelloWorldHeading from "../../atoms/HelloWorldHeading";
import CVButton from "../../atoms/CVButton";
import { Body } from "../../atoms/Typography";

const text = {
  about: (
    <>
      Hi! I'm a frontend developer based in Warsaw. Working with React +
      TypeScript. Believe in the importance of sharing knowledge. <br /> In love
      with humanity.
    </>
  ),
};

const HomePageContent = () => (
  <Container>
    <HelloWorldHeading />
    <ContentBlock>
      <Name>
        const <span style={{ color: "#C95A89" }}>myName</span> ={" "}
        <span style={{ color: "#1ccbb1" }}>'Aberllin'</span>;
      </Name>
      <About size="24px">{text.about}</About>
      <CVButton />
    </ContentBlock>
  </Container>
);

const About = styled(Body)`
  padding: 15px 0 45px 60px;

  @media screen and (max-width: 768px) {
    padding: 15px 0;
  }

  @media screen and (max-width: 768px) {
    line-height: 1;
    padding: 15px 10px;
  }
`;

const ContentBlock = styled.div`
  padding: 30px 0;
  font-size: 25px;
  border-left: 3px solid #1ccbb1;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    border-left: 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 15px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 30px;
  padding: 0 0 0 60px;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
    line-height: 29px;
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
    line-height: 24px;
    padding: 0;
  }

  @media screen and (max-width: 320px) {
    font-size: 16px;
    line-height: 20px;
    padding: 0;
  }
`;

const Container = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  margin: auto;
  width: 78%;

  @media screen and (max-width: 1024px) {
    width: 91%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export default HomePageContent;
