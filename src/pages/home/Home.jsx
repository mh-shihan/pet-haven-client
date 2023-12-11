import { Helmet } from "react-helmet";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Testimonial from "../../components/testimonial/Testimonial";
import Banner from "./Banner";
import PopularServices from "./PopularServices";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Pet Haven | Home</title>
      </Helmet>
      <header>
        <Banner></Banner>
      </header>
      <main className=" max-w-7xl mx-auto p-1">
        <PopularServices></PopularServices>
        <About></About>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </main>
    </div>
  );
};

export default Home;
