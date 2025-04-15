import Header from "../../layout/Header/Header";
import Cards from "../../components/Cards/Cards";
import Investment from "../../layout/Investment/Investment";
import AboutUs from "../../layout/AboutUs/AboutUs";
import CallToAction from "../../layout/CallToAction/CallToAction";
import Video from "../../components/Video/Video";

import srcVideo from "../../assets/Video/DronInwestycja.mp4";

const Home = ({ dataCards }) => {
  return (
    <main>
      <Header />
      <Cards dataCards={dataCards} />
      <Investment />
      <Video videoSrc={srcVideo} />
      <CallToAction />
      <AboutUs />
    </main>
  );
};

export default Home;
