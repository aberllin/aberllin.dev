import styled from 'styled-components';
import HomePageContent from '../../components/molecules/HomePageContent';
import Footer from '../../components/molecules/Footer';

const text = {
	docTitle: 'Aberllin: Home',
};

const Home = () => {
	document.title = text.docTitle;
	return (
		<Container>
			<HomePageContent />
			<Footer />
		</Container>
	);
};

const Container = styled.div`
  margin: 0 50px;
  overflow: hidden;
  animation-name: fadeInFromNone;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;

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

  @media screen and (max-width: 768px) {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Home;
