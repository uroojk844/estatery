import GallerySection from "./component/Gallery/page";
import Landing from "./component/Landing";
import NewsLetter from "./component/NewsLetter";
import TestmonialsSection from "./component/Testimonials/page";
import TheNewWay from "./component/TheNewWay/page";
import VirtualHome from "./component/VirtualHome";

const Home = () => {
  return (
    <div className="max-w-[1200px] m-auto">
      <Landing />
      <VirtualHome />
      <TheNewWay />
      <GallerySection />
      <TestmonialsSection />
      <NewsLetter />
    </div>
  );
};

export default Home;
