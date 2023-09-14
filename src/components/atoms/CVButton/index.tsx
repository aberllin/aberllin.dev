import styled from "styled-components";

const CVButton = () => (
  <a href="CV.pdf" target="_blank">
    <Button className="cv-btn">Download CV</Button>
  </a>
);

const Button = styled.button`
  font-weight: 700;
  margin-left: 60px;
  padding: 18px 45px;
  border: none;
  outline: none;
  color: white;
  background-color: #1ccbb1;
  cursor: pointer;
  position: relative;
  font-size: 19px;
  letter-spacing: 1px;
  transition: ease-in-out 0.6s;

  &:hover {
    background: black;
  }

  &::before {
    content: "";
    background: linear-gradient(
      45deg,
      #c95a89,
      #fffb00,
      #48ff00,
      #00ffd5,
      #f538d5,
      #7a00ff,
      #cc00ff,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:active::after {
    background: #1ccbb1;
  }

  &:hover::before {
    opacity: 1;
  }

  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #1ccbb1;
    left: 0;
    top: 0;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  @media screen and (max-width: 768px) {
      margin-top: 15px;
      margin-left: 0;
      
  }

  @media screen and (max-width: 480px) {
      margin-top: 5px;
      margin-left: 0;
      font-size: 14px;
  }
`;

export default CVButton;
