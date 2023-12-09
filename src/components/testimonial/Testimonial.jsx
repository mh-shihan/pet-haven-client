import testimonial1 from "../../assets/testimonial/testimonial-1.png";
import testimonial2 from "../../assets/testimonial/testimonial-2.png";
import testimonial3 from "../../assets/testimonial/testimonial-3.png";
import logo from "../../assets/logo/logo.png";
const Testimonial = () => {
  return (
    <div className="mb-6 lg:mb-20">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
      <h1 className=" text-4xl lg:text-6xl font-extrabold text-[#180202] text-center mb-6 ">
        Our Client Say
      </h1>
      <div className="carousel w-full h-72 md:h-48 lg:h-72 lg:-mt-16">
        {/* First Slide */}
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex flex-col md:flex-row gap-2 md:gap-10 items-center justify-center ">
            <img src={testimonial1} className="rounded-full  w-36 h-36" />
            <p className="w-1/2 text-[#666666] text-xs md:text-sm lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque nisi sint veniam voluptatem voluptatibus nesciunt est.
              Omnis debitis aspernatur ipsa molestiae necessitatibus soluta
              facilis maiores, nisi repellat voluptatibus sed incidunt sequi
              velit, nesciunt id laudantium est iure. Illum, saepe quisquam.
              Blanditiis nihil dolor inventore.
            </p>
          </div>

          <div className="absolute flex justify-center bottom-0  transform -translate-y-1/2 left-5 right-5 ">
            <a
              href="#slide3"
              className="btn btn-circle mr-5 bg-transparent md:bg-dark-gray md:text-white md:hover:bg-lite-gray"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent md:bg-dark-gray md:text-white md:hover:bg-lite-gray "
            >
              ❯
            </a>
          </div>
        </div>
        {/* Second Slide */}
        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex flex-col md:flex-row gap-2 md:gap-10 items-center justify-center ">
            <img src={testimonial2} className="rounded-full  w-36 h-36" />
            <p className="w-1/2 text-[#666666] text-xs md:text-sm lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque nisi sint veniam voluptatem voluptatibus nesciunt est.
              Omnis debitis aspernatur ipsa molestiae necessitatibus soluta
              facilis maiores, nisi repellat voluptatibus sed incidunt sequi
              velit, nesciunt id laudantium est iure. Illum, saepe quisquam.
              Blanditiis nihil dolor inventore.
            </p>
          </div>

          <div className="absolute flex justify-center bottom-0  transform -translate-y-1/2 left-5 right-5 ">
            <a
              href="#slide1"
              className="btn btn-circle mr-5 bg-transparent md:bg-dark-gray md:text-white md:hover:bg-lite-gray"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent md:bg-dark-gray md:text-white md:hover:bg-lite-gray "
            >
              ❯
            </a>
          </div>
        </div>
        {/* Third Slide */}
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex flex-col md:flex-row gap-2 md:gap-10 items-center justify-center ">
            <img src={testimonial3} className="rounded-full  w-36 h-36" />
            <p className="w-1/2 text-[#666666] text-xs md:text-sm lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque nisi sint veniam voluptatem voluptatibus nesciunt est.
              Omnis debitis aspernatur ipsa molestiae necessitatibus soluta
              facilis maiores, nisi repellat voluptatibus sed incidunt sequi
              velit, nesciunt id laudantium est iure. Illum, saepe quisquam.
              Blanditiis nihil dolor inventore.
            </p>
          </div>

          <div className="absolute flex justify-center bottom-0  transform -translate-y-1/2 left-5 right-5 ">
            <a
              href="#slide2"
              className="btn btn-circle mr-5 bg-transparent md:bg-dark-gray md:text-white md:hover:bg-lite-gray"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent md:bg-dark-gray md:text-white md:hover:bg-lite-gray "
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
