import Contact from "../../components/contact/Contact";
import Testimonial from "../../components/testimonial/Testimonial";
import Banner from "./Banner";
import PopularServices from "./PopularServices";

const Home = () => {
  return (
    <div>
      <header>
        <Banner></Banner>
      </header>
      <main className=" max-w-7xl mx-auto p-1">
        <PopularServices></PopularServices>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </main>
    </div>
  );
};

export default Home;
