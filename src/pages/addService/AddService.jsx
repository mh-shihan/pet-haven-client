import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const AddService = () => {
  const { user } = useAuth();
  const { displayName, email } = user;
  const axiosInstance = useAxios();

  const handleAddService = async (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const addServiceData = {
      userName: displayName,
      userEmail: email,
      serviceName,
      servicePrice: price,
      serviceDescription: serviceArea,
      description,
      serviceImage: photo,
    };
    console.log(addServiceData);

    const toastId = toast.loading("Logging....");
    const res = await axiosInstance.post(
      "/user/create-service",
      addServiceData
    );
    if (res?.data?.acknowledged) {
      toast.success("Service Added Successfully", { id: toastId });
      form.reset();
    }
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto  shadow-sm mb-10 mt-28 pb-4 ">
        <h1 className="text-5xl font-extrabold my-10 text-center text-dark-gray ">
          Add Service
        </h1>
        <form
          onSubmit={handleAddService}
          className="flex justify-center text-dark-gray  "
        >
          <div className="border w-full md:w-3/4 rounded-xl  px-4 md:px-10 pb-4 ">
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
                    placeholder="Service Photo URL"
                    name="photo"
                    required
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* Submit Button  */}
            <div>
              <input
                type="submit"
                value="Add Product"
                className="btn btn-block bg-lite-gray hover:bg-dark-gray text-white  font-bold "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
