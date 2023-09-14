import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

type FooterLink = {
  to: string;
  icon: React.ReactNode;
};

const footerLinks: Array<FooterLink> = [
  {
    to: "https://github.com/aberllin",
    icon: <AiFillGithub />,
  },
  {
    to: "mailto:ns.kozluk@gmail.com",
    icon: <SiGmail />,
  },
  {
    to: "https://www.linkedin.com/in/anastasia-kozluk-3949301b1/",
    icon: <FaLinkedinIn />,
  },
];
const Footer = () => {
  return (
    <Container>
      {footerLinks.map((link) => (
        <Link key={link.to} target="_blank" href={link.to}>
          {link.icon}
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  z-index: -10;

  bottom: 40px;

  @media screen and (max-width: 768px) {
    bottom: 30px;
  }
  @media screen and (max-width: 400px) {
    bottom: 15px;
  }
`;

const Link = styled.a`
  padding: 0 30px;
  font-size: 18pt;
  color: white;
  transition: ease 1s;

  &:hover {
    transform: rotate(180deg);
  }
`;

export default Footer;
