import about from "../../assets/about/about-img.png";
import logo from "../../assets/logo/logo.png";
import AboutIconCollection from "../aboutIconCollection/AboutIconCollection";

const About = () => {
  return (
    <div className="mb-20">
      <div className="flex flex-col justify-center items-center ">
        <img src={logo} alt="" />
        <h1 className="text-6xl font-extrabold text-dark-gray">About Us</h1>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-10 mt-10">
        <div>
          <h3 className="text-4xl text-dark-gray font-extrabold mb-4">
            Caring for your pets
          </h3>
          <p className="text-colo text-justify">
            Welcome to Pet Have, where passion meets paws! We are dedicated to
            enhancing the bond between you and your furry friends. Discover
            expert pet care advice, unique products, and a community that shares
            your love for all things pets. Explore a world of pet joy with Pet
            Have—your ultimate pet haven!
          </p>
          <AboutIconCollection></AboutIconCollection>
          <button className="mt-10 btn bg-lite-gray text text-white hover:bg-dark-gray px-8">
            Read More
          </button>
        </div>
        <img src={about} alt="" />
      </div>
    </div>
  );
};

export default About;
