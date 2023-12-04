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
      </main>
    </div>
  );
};

export default Home;
