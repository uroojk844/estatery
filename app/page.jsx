import Container from "./component/Container";
import GallerySection from "./component/Gallery/page";
import Landing from "./component/Landing";
import TestmonialsSection from "./component/Testimonials/page";
import TheNewWay from "./component/TheNewWay/page";
import VirtualHome from "./component/VirtualHome";

const Home = () => {
  return (
    <Container>
      <Landing />
      <VirtualHome />
      <TheNewWay />
      <GallerySection />
      <TestmonialsSection />
    </Container>
  );
};

export default Home;
