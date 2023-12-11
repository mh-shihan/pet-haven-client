import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

const UpdateServiceModal = (props = {}) => {
  const {
    isVisible,
    handleCloseModal,
    userAddedService,
    user,
    setShowModal,
    refetch,
  } = props || {};
  const axiosInstance = useAxios();

  if (!isVisible) {
    return null;
  }

  const { displayName, email, photoURL } = user;
  const { serviceImage, serviceName, servicePrice, serviceArea, _id } =
    userAddedService;

  const handleUpdateService = async (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const addServiceData = {
      providerName: displayName,
      providerEmail: email,
      providerImage: photoURL,
      serviceName,
      serviceArea,
      servicePrice: price,
      serviceDescription: description,
      serviceImage: photo,
    };
    console.log(addServiceData);

    const toastId = toast.loading("Service Updating....");
    const res = await axiosInstance.put(`/user/service/${_id}`, addServiceData);
    console.log(res?.data);
    if (res?.data?.acknowledged) {
      toast.success("Service Updated Successfully", { id: toastId });
      setShowModal(false);
      refetch();
      form.reset();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 duration-1000 ">
      <div className="  shadow-sm  pb-4 ">
        <form
          onSubmit={handleUpdateService}
          className="flex justify-center text-dark-gray w-screen "
        >
          <div className="bg-[#F4F3F0] border w-full md:w-3/4 rounded-xl  px-4 md:px-10 pb-4 ">
            <h1 className="text-4xl font-extrabold my-4 text-center text-dark-gray    ">
              Update Service
            </h1>
            {/* Form Row of User Name and User Email  */}
            <div className="md:flex mb-0 md:mb-8">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Your Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    placeholder="Your Name"
                    name="userName"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-full md:w-1/2 ml-0 md:ml-8">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Your Email
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    defaultValue={user?.email}
                    placeholder="Your Email"
                    name="yourEmail"
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
            </div>
            {/* Form Row of Service Name and Price  */}
            <div className="md:flex mb-0 md:mb-8 ">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Service Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={serviceName}
                    placeholder="Service Name"
                    name="serviceName"
                    required
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-0 md:ml-8">
                <label className="label">
                  <span className="label-text text-xl font-bold">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={servicePrice}
                    placeholder="price"
                    name="price"
                    required
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* Form Row of Categories and Details  */}
            <div className="md:flex bg-[#F4F3F0] mb-0 md:mb-8  ">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Service Area
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={serviceArea}
                    placeholder="Service Area"
                    name="serviceArea"
                    required
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-0 md:ml-8">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Description
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    required
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* Photo Url and Rating */}
            <div className="md:flex bg-[#F4F3F0] mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Service Photo URL
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={serviceImage}
                    placeholder="Service Photo URL"
                    name="photo"
                    required
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* Submit Button  */}
            <div className="mt-6 flex justify-center gap-6">
              <input
                type="submit"
                value="Update "
                className="btn px-20 text-white hover:bg-dark-gray bg-lite-gray hover:scale-105 font-bold "
              />
              <button
                onClick={handleCloseModal}
                className="btn bg-dark-gray hover:bg-lite-gray  hover:scale-105 text-white"
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateServiceModal;
