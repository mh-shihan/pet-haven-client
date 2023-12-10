import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import PopularServiceCard from "../../components/serviceCard/popularServiceCard";
import loadingAnimation from "../../assets/animaiton/loadingAnimation.json";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const axiosInstance = useAxios();
  //   console.log(Object.keys(popularServices[0]).join(", "));
  const getPopularServices = async () => {
    const res = await axiosInstance.get("/popularServices");
    return res;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["Services"],
    queryFn: getPopularServices,
  });
  const popularServices = data?.data;
  console.log(popularServices);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center">
        <Lottie animationData={loadingAnimation}></Lottie>
      </div>
    );
  }

  if (isError) {
    toast.error(error);
  }

  return (
    <div className="my-5 lg:my-20  ">
      <h1 className="text-3xl lg:text-6xl text-dark-gray text-center font-extrabold mb-5 2xl:mb-20">
        Popular Services
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10 ">
          {popularServices?.map((popularService) => (
            <PopularServiceCard
              key={popularService._id}
              popularService={popularService}
            ></PopularServiceCard>
          ))}
        </div>
      </div>
      <Link to="/services">
        {" "}
        <div className="flex justify-center mt-6 md:mt-10">
          <button className="btn bg-[#F0A83D] hover:bg-dark-gray hover:border-dark-gray text-white flex">
            All Services
          </button>
        </div>
      </Link>
    </div>
  );
};

export default PopularServices;
