import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import PopularServiceCard from "../../components/serviceCard/popularServiceCard";

const PopularServices = () => {
  const axiosInstance = useAxios();
  //   console.log(Object.keys(popularServices[0]).join(", "));
  const getPopularServices = async () => {
    const res = await axiosInstance.get("/popularServices");
    return res;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["Services"],
    queryFn: getPopularServices,
  });
  const popularServices = data?.data;
  console.log(popularServices);

  return (
    <div className="my-5 lg:my-20  ">
      <h1 className="text-3xl lg:text-5xl text-[#180202] text-center font-extrabold mb-5 2xl:mb-20">
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
      <div className="flex justify-center mt-6 md:mt-10">
        <button className="btn bg-[#F0A83D] hover:bg-[#180202] hover:border-[#180202] text-white flex">
          All Services
        </button>
      </div>
    </div>
  );
};

export default PopularServices;
