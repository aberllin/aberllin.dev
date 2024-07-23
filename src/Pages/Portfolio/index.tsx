import styled from 'styled-components';
import { Body } from '../../components/atoms/Typography';
import Link from '../../components/atoms/Link';

type PortfolioTypes = Array<{
  title: string;
  image: string;
  demoLink: string;
  githubLink: string;
  alt: string;
  description: JSX.Element;
  technologies: string;
}>;

const portfolioData: PortfolioTypes = [
  {
    title: 'Multi Step Form 👔',
    image: '/images/multi-form-desktop.png',
    demoLink: 'https://multi-form-aberllin.vercel.app/',
    githubLink: 'https://github.com/aberllin/react-multi-step-form',
    alt: 'screenshot of multi step form',
    description: (
      <div>
      This is a solution to the <a style={{color: '#483EFF'}} target="_blank" rel="noreferrer" href='https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ'>Multi-step form challenge on Frontend Mentor</a>. 
      Frontend Mentor challenges help you improve your coding skills by building realistic projects.
      <br />
      <br />
      Users should be able to:
      <br />
      - Complete each step of the sequence
      <br />
      - Go back to a previous step to update their selections
      <br />
      - See a summary of their selections on the final step and confirm their order
      <br />
      - View the optimal layout for the interface depending on their device's screen size
      <br />
      - See hover and focus states for all interactive elements on the page
      <br />
      - Receive form validation messages if:
      <ol>
       <li>A field has been missed </li>
        <li>The email address is not formatted correctly </li>
        <li>A step is submitted, but no selection has been made</li>
        </ol>
      </div>
    ),
    technologies:
      'React / Typescript / Recoil / Styled-Components',
  },
  {
    title: 'YelpCamp 🏕️',
    image: '/images/view-desktop.png',
    demoLink: 'https://yelp-camp-z1g5.onrender.com/',
    githubLink: 'https://github.com/aberllin/YelpCamp',
    alt: 'screenshot of view campground page',
    description: (
      <div>
        YelpCamp, a comprehensive web application, allows users to both create
        and review campgrounds. To engage in reviewing or creating a campground,
        an account is required. This endeavor is a component of Colt Steele's
        web development bootcamp course on Udemy.
      </div>
    ),
    technologies:
      'Node JS / Express / MongoDB / Bootstrap / Passport JS / EJS / MapBox',
  },
  {
    title: 'MacOS-like Desktop on the web 🖥️',
    image: '/images/desktop.png',
    demoLink: 'https://apps-dashboard.netlify.app/',
    githubLink: 'https://github.com/aberllin/react-apps-dashboard',
    alt: 'image of macOs-like desktop',
    description: (
      <div>
        <div>
          It is a replica of the desktop and window management experience in
          macOS. There is a working dock; windows can be opened from the dock,
          moved around, resized, maximized, and minimized.
        </div>
        <div>There are two working applications:</div>
        <br />
        <div>
          - Todo App, where you can write down your todos, edit them, delete or
          mark as DONE. They are stores at local storage.
        </div>
        <div>
          - GitHub Search app, which is an app to find user by login, allows
          adding to Favorite list.
        </div>
      </div>
    ),
    technologies: 'React / Styled Components',
  },
 
];

const Portfolio = () => {
  document.title = 'Aberllin: Portfolio';
  return (
    <>
      {portfolioData.map(
        ({
          title,
          image,
          description,
          alt,
          demoLink,
          githubLink,
          technologies,
        }) => (
          <Container key={title}>
            <InfoWrapper>
              <Title>{title}</Title>
              <Description size="18px">{description}</Description>
            </InfoWrapper>
            <ProjectWrapper>
              <Links>
                <Link target="_blank" to={demoLink}>
                  Demo
                </Link>
                <Link target="_blank" to={githubLink}>
                  GitHub
                </Link>
              </Links>
              <a target="_blank"  rel="noreferrer" href={demoLink}>
                <Image src={image} alt={alt} />
              </a>
              <Technologies>{technologies}</Technologies>
            </ProjectWrapper>
          </Container>
        ),
      )}
    </>
  );
};

const Technologies = styled.div`
  padding: 10px;

  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding: 15px;

  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 45px;
  border-left: 3px solid #1ccbb1;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 90px 0 90px 45px;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    border: none;
    flex-direction: column-reverse;
    padding: 40px 0;
  }
`;

const Description = styled(Body)`
  padding: 15px 0;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 460px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  @media screen and (max-width: 1024px) {
    font-size: 37px;
  }

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 50px;
  max-width: 600px;

  @media screen and (max-width: 1024px) {
    padding-right: 30px;
    max-width: 400px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    padding-right: 0;
  }
`;

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  padding: 50px 0;
  animation-name: fadeInFromNone;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 150px;
    overflow: auto;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    padding-top: 120px;
  }

  @keyframes fadeInFromNone {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Portfolio;
