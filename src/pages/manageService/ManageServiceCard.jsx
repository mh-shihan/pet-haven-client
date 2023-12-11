import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import UpdateServiceModal from "./UpdateServiceModal";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const ManageServiceCard = (props = {}) => {
  const { userAddedService, refetch } = props || {};
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const axiosInstance = useAxios();

  const {
    _id,
    serviceImage,
    serviceName,
    serviceDescription,
    providerImage,
    providerName,
    serviceArea,
    servicePrice,
  } = userAddedService;

  const handleUpdate = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteService = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/user/service/${_id}`).then((res) => {
          console.log(res.data);
          Swal.fire("Deleted!", "Your Service has been deleted.", "success");
          refetch();
        });
      }
    });
  };

  return (
    <div>
      <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[40rem] flex-col lg:flex-row -hidden transition-all hover:scale-105  hover:shadow-2xl">
        <div className="relative lg:w-2/5 m-0 overflow-hidden  bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src={serviceImage}
            alt="card-image"
            className="object-cover w-full  2xl:h-full"
          />
        </div>
        <div className="p-6  ">
          <h6 className="block mb-4 text-dark-gray font-sans text-2xl antialiased font-semibold leading-relaxed tracking-normal  uppercase">
            {serviceName}
          </h6>

          <p className="block mb-6 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {serviceDescription} For more information click on show details
            button.
          </p>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full ring-1 ring-dark-gray ">
                  <img src={providerImage} />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-dark-gray">{providerName}</h3>
                <p>{serviceArea}</p>
              </div>
            </div>
            <p className="mr-4 font-bold text-dark-gray">
              Price: ${servicePrice}
            </p>
          </div>
          <div className="mt-2 flex justify-around">
            <button
              onClick={handleUpdate}
              className="btn bg-transparent border-dark-gray font-bold text-dark-gray hover:scale-105"
            >
              Update
            </button>

            <button
              onClick={() => handleDeleteService(_id)}
              className="btn bg-transparent border-dark-gray font-bold text-dark-gray hover:scale-105"
            >
              Delete
            </button>
          </div>

          <Link to={`/serviceDetails/${_id}`}>
            <button className="btn btn-block bg-transparent border-transparent mt-2 font-bold text-dark-gray hover:scale-105  ">
              View Details <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
      <UpdateServiceModal
        isVisible={showModal}
        setShowModal={setShowModal}
        handleCloseModal={handleCloseModal}
        userAddedService={userAddedService}
        user={user}
        refetch={refetch}
      ></UpdateServiceModal>
    </div>
  );
};

export default ManageServiceCard;
