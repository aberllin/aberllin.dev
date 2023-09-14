import styled from "styled-components";

const HelloWorldHeading = () => (
  <H1>
    Hel<AnimatedSpan>lo</AnimatedSpan> W<AnimatedSpan>or</AnimatedSpan>ld!
  </H1>
);

const H1 = styled.div`
  font-size: 70pt;
  line-height: 90px;
  font-weight: bold;
  padding-right: 50px;
  z-index: -10;
  animation: text-flicker 4s infinite;

  @media screen and (max-width: 1024px) {
    font-size: 50pt;
    line-height: 65px;
  }

  @media screen and (max-width: 768px) {
    font-size: 50pt;
    line-height: 45px;
    padding: 35px 0 30px 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 35pt;
    line-height: 35px;
    padding: 35px 10px 20px 10px;
  }

  @media screen and (max-width: 320px) {
    font-size: 30pt;
    line-height: 35px;
    padding: 20px 10px 15px 10px;
  }

  @keyframes text-flicker {
    0% {
      opacity: 0.1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }

    2% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }

    9% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }

    20% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    25% {
      opacity: 0.3;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    30% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }

    60% {
      opacity: 0.7;
      text-shadow: 0px 0px 29px #1ccbb1;
    }

    72% {
      opacity: 0.2;
      text-shadow: 0px 0px 29px #1ccbb1;
    }

    77% {
      opacity: 0.9;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    100% {
      opacity: 0.9;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
  }
`;

const AnimatedSpan = styled.span`
  animation: letter-flicker 2s linear infinite;

  @keyframes letter-flicker {
    0% {
      opacity: 0.1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    2% {
      opacity: 0.1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    4% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }

    19% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    21% {
      opacity: 0.1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    23% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }

    80% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    83% {
      opacity: 0.4;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
    87% {
      opacity: 1;
      text-shadow: 0px 0px 29px #1ccbb1;
    }
  }
`;

export default HelloWorldHeading;
