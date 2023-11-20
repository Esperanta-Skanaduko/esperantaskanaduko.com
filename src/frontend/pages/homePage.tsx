import Footer from '../components/footer/footer';
import MainMenu from '../components/mainMenu/mainMenu';
import Subtitle from '../components/subtitle';
import Title from '../components/title';

const Homepage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Title />
      <Subtitle />
      <MainMenu />
      <Footer />
    </div>
  );
};

export default Homepage;
