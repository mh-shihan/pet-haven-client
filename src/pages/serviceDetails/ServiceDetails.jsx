import { useLoaderData } from "react-router-dom";
import BookNowModal from "./BookNowModal";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const ServiceDetails = () => {
  const { user } = useAuth();
  const ServiceDetailsData = useLoaderData();
  const {
    serviceImage,
    serviceName,
    serviceDescription,
    providerImage,
    providerName,
    serviceArea,
    servicePrice,
  } = ServiceDetailsData;

  const [showModal, setShowModal] = useState(false);

  const handleBookNow = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-1 mt-20 lg:mt-28 mb-20">
      <div className="flex justify-center ">
        <div className="flex flex-col-reverse md:flex-row gap-10 mt-10 w-full md:w-3/4  justify-center">
          <div className="w-full md:w-1/2">
            <h3 className="text-4xl text-dark-gray font-extrabold mb-4">
              {serviceName}
            </h3>
            <p className="text-colo text-justify p-2 md:p-0">
              {serviceDescription}
              Pet Heaven is a whimsical sanctuary for our beloved furry
              companions, where joy and eternal playfulness intertwine. Here,
              pets frolic in sprawling meadows under the eternal sunshine,
              chasing butterflies and rolling in soft grass.
            </p>
            <div className="flex justify-between mt-4 lg:mt-6 items-center">
              <div className="flex gap-4 items-center">
                <div className="avatar">
                  <div className="w-12 md:w-24 h-12 md:h-24 rounded-full ring-1 ring-dark-gray ">
                    <img src={providerImage} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-dark-gray">
                    {providerName}
                  </h3>
                  <p>{serviceArea}</p>
                </div>
              </div>
              <p className="mr-4 font-bold text-dark-gray text-lg md:text-3xl">
                Price: ${servicePrice}
              </p>
            </div>

            <button
              onClick={handleBookNow}
              className="mt-6 lg:mt-10 btn bg-lite-gray text text-white hover:bg-dark-gray px-8"
            >
              Book Now
            </button>
            <BookNowModal
              isVisible={showModal}
              setShowModal={setShowModal}
              handleCloseModal={handleCloseModal}
              ServiceDetailsData={ServiceDetailsData}
              user={user}
            ></BookNowModal>
          </div>
          <img
            src={serviceImage}
            className="w-full md:w-1/2 h-[70vh] rounded-md "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
