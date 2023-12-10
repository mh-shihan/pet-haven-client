import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

const BookNowModal = (props = {}) => {
  const {
    isVisible,
    handleCloseModal,
    ServiceDetailsData,
    user,
    setShowModal,
  } = props || {};
  const axiosInstance = useAxios();

  if (!isVisible) {
    return null;
  }

  const { email } = user;
  const { serviceImage, serviceName, servicePrice, providerEmail } =
    ServiceDetailsData;

  const handleBookingService = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const instruction = form.instruction.value;

    const bookingInfo = {
      serviceName,
      serviceImage,
      providerEmail,
      customerEmail: email,
      servicePrice,
      date,
      instruction,
    };
    console.log(bookingInfo);

    const toastId = toast.loading("Logging....");
    axiosInstance.post("/user/bookings", bookingInfo).then((res) => {
      console.log(res.data);
      if (res.data?.acknowledged) {
        toast.success("Booking Successful", { id: toastId });
        form.reset();
        setShowModal(false);
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 duration-1000 ">
      <div>
        <form
          onSubmit={handleBookingService}
          className="flex justify-center mb-20 w-screen"
        >
          <div className="bg-[#F4F3F0] w-3/4 rounded-xl p-6">
            {/* Form Row of Service URL  */}
            <div className="md:flex gap-10 mb-4">
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
                    placeholder="Name"
                    name="name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-xl font-bold ">
                    Service Image URL
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={serviceImage}
                    placeholder="Name"
                    name="serviceImage"
                    className="rounded-l-full input input-bordered  w-full"
                  />
                </label>
              </div>
            </div>

            {/* Provider Email & User Email */}
            <div className="md:flex gap-10 mb-4">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    Provider Email
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    defaultValue={providerEmail}
                    placeholder="Name"
                    name="Provider Email"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-xl font-bold ">
                    User Email
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    defaultValue={user?.email}
                    placeholder="User Email"
                    name="serviceImage"
                    className="rounded-l-full input input-bordered  w-full"
                  />
                </label>
              </div>
            </div>

            {/* Form Row of Date and price */}
            <div className="md:flex mb-4 ">
              <div className="form-control md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-xl font-bold">Date</span>
                </label>
                <label className="input-group">
                  <input
                    type="date"
                    name="date"
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
                    defaultValue={"$" + servicePrice}
                    name="price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            {/*Instruction   */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold">
                  Instruction
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="instruction"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            {/* Submit Button  */}
            <div className="mt-6 flex justify-center gap-6">
              <input
                type="submit"
                value="Order Confirm"
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

export default BookNowModal;
