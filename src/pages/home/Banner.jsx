import { Carousel, IconButton } from "@material-tailwind/react";
import slide1 from "../../assets/banner/slide-1.png";
import slide2 from "../../assets/banner/slide-2.png";
import slide3 from "../../assets/banner/slide-3.png";

const Banner = () => {
  return (
    <div className="mt-10">
      <Carousel
        className="rounded-xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 bg-[#F0A83D] rounded-full hover:bg-[#180202]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-[#F0A83D] rounded-full hover:bg-[#180202]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        {/* First Slide */}
        <div className="relative ">
          <img
            src={slide1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute right-2 lg:right-[12%] bottom-5 md:bottom-24 lg:bottom-[25%] lg:space-y-5">
            <h3 className="text-[#F0A83D] inline-block lg:px-4 text-xs  md:text-3xl font-bold rounded-sm bg-white">
              We Keep Pets For Pleasure
            </h3>
            <h2 className=" text-xs md:text-4xl lg:font-extrabold   text-[#180202]">
              Helping Your Pets Get Rid <br /> of Annoying pets
            </h2>
            <h4 className="text-[#180202] hidden lg:block">
              We can do a anything for your pet. So do not worry about it.
              <br />
              So book your service
            </h4>
            <button className="bg-[#F0A83D]  hover:bg-[#180202] px-4 md:py-2 text-base-100 text-xs md:text-xl rounded-l-full rounded-r-full">
              Book Now
            </button>
          </div>
        </div>
        {/* Second Slide */}
        <div className="relative ">
          <img
            src={slide2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute right-2 lg:right-[12%] bottom-5 md:bottom-24 lg:bottom-[25%] lg:space-y-5">
            <h3 className="text-[#F0A83D] inline-block lg:px-4 text-xs  md:text-3xl font-bold rounded-sm bg-white">
              We Keep Pets For Pleasure
            </h3>
            <h2 className=" text-xs md:text-4xl lg:font-extrabold   text-[#180202]">
              Helping Your Pets Get Rid <br /> of Annoying pets
            </h2>
            <h4 className="text-[#180202] hidden lg:block">
              We can do a anything for your pet. So do not worry about it.
              <br />
              So book your service
            </h4>
            <button className="bg-[#F0A83D]  hover:bg-[#180202] px-4 md:py-2 text-base-100 text-xs md:text-xl rounded-l-full rounded-r-full">
              Book Now
            </button>
          </div>
        </div>
        {/* Third Slide */}
        <div className="relative ">
          <img
            src={slide3}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute right-2 lg:right-[12%] bottom-5 md:bottom-24 lg:bottom-[25%] lg:space-y-5">
            <h3 className="text-[#F0A83D] inline-block lg:px-4 text-xs  md:text-3xl font-bold rounded-sm bg-white">
              We Keep Pets For Pleasure
            </h3>
            <h2 className=" text-xs md:text-4xl lg:font-extrabold   text-[#180202]">
              Helping Your Pets Get Rid <br /> of Annoying pets
            </h2>
            <h4 className="text-[#180202] hidden lg:block">
              We can do a anything for your pet. So do not worry about it.
              <br />
              So book your service
            </h4>
            <button className="bg-[#F0A83D]  hover:bg-[#180202] px-4 md:py-2 text-base-100 text-xs md:text-xl rounded-l-full rounded-r-full">
              Book Now
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
