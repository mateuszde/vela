import Header from "../../layout/Header/Header";
import Cards from "../../components/Cards/Cards";
import Investment from "../../layout/Investment/Investment";
import AboutUs from "../../layout/AboutUs/AboutUs";
import CallToAction from "../../layout/CallToAction/CallToAction";

const Home = ({ dataCards }) => {
  return (
    <main>
      <Header />
      <Cards dataCards={dataCards} />
      <Investment />
      <CallToAction />
      <AboutUs />
      <h2> SEKCJA KONTAKT</h2>
    </main>
  );
};

export default Home;
