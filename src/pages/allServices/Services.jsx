import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animaiton/loadingAnimation.json";
import toast from "react-hot-toast";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Services = () => {
  const [showMore, setShowMore] = useState(false);
  const [searchedData, setSearchedData] = useState([]);

  const axiosInstance = useAxios();
  const getAllServices = async () => {
    const res = await axiosInstance.get("/services");
    return res;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allServices"],
    queryFn: getAllServices,
  });

  const allServices = data?.data;
  console.log("Services", allServices);

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

  const displayServices = showMore ? allServices : allServices.slice(0, 6);

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchedValue = e.target.searchedValue.value;
    console.log(searchedValue);
    try {
      const res = await axiosInstance.get(
        `/services?serviceName=${searchedValue}`
      );
      setSearchedData(res?.data);
    } catch (err) {
      console.log(err);
    }
  };
  //   console.log("Searched Data", searchedData);

  return (
    <div className="max-w-7xl mx-auto p-1 my-20">
      <div className="flex flex-col  justify-center items-center  my-10">
        <h1 className=" text-6xl text-[#180202] font-extrabold">
          <span className="">Our</span> services
        </h1>
        <div className="w-full mt-4 flex justify-center  ">
          <form onSubmit={handleSearch} className="w-1/2 flex items-center">
            <input
              type="text"
              name="searchedValue"
              placeholder="Search..."
              className="input input-bordered w-full "
            />
            <button
              type="submit"
              className="text-3xl cursor-pointer bg-[#F0A83D] hover:bg-[#180202]  text-white font-extrabold p-2 input input-bordered ml-2    "
            >
              <CiSearch />
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {searchedData.length !== 0
            ? searchedData.map((service) => (
                <ServiceCard service={service} key={service._id}></ServiceCard>
              ))
            : displayServices.map((service) => (
                <ServiceCard service={service} key={service._id}></ServiceCard>
              ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 md:mt-10">
        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="btn bg-[#F0A83D] hover:bg-[#180202] hover:border-[#180202] text-white flex"
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default Services;
