import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animaiton/loadingAnimation.json";
import toast from "react-hot-toast";
import ManageServiceCard from "./ManageServiceCard";
import noDataAnimation from "../../assets/animaiton/no-data-found-animation.json";
// import { useState } from "react";

const ManageService = () => {
  //   const [updatedService, setUpdatedService] = useState();
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const { email } = user;

  const getUserAddedServices = async () => {
    const res = axiosInstance.get(`/user/services?email=${email}`);
    return res;
  };
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["userAddedServices"],
    queryFn: getUserAddedServices,
  });
  const userAddedServices = data?.data;
  console.log("Inside Manage Service", userAddedServices);

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
  console.log("Inside Manage Service", data);

  return (
    <div className="mt-28  mb-20 max-w-7xl mx-auto">
      {userAddedServices.length === 0 && (
        <div className="w-full flex justify-center items-center">
          <Lottie animationData={noDataAnimation}></Lottie>
        </div>
      )}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {userAddedServices.map((userAddedService) => (
            <ManageServiceCard
              key={userAddedService._id}
              userAddedService={userAddedService}
              refetch={refetch}
            ></ManageServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageService;
