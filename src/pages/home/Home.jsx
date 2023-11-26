import Banner from "./Banner";
import PopularServices from "./PopularServices";

const Home = () => {
  return (
    <div>
      <header>
        <Banner></Banner>
      </header>
      <main className="w-11/12 mx-auto">
        <PopularServices></PopularServices>
      </main>
    </div>
  );
};

export default Home;
