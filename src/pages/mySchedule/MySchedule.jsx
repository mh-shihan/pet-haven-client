import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import loadingAnimation from "../../assets/animaiton/loadingAnimation.json";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const MySchedule = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();

  const getBookings = async () => {
    const res = await axiosInstance.get(`/user/bookings?email=${user?.email}`);
    return res;
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["myBookings"],
    queryFn: getBookings,
  });
  const bookings = data?.data;

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

  const handleDelete = (id) => {
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
        axiosInstance.delete(`/user/cancel-booking/${id}`).then((res) => {
          console.log(res.data);
          Swal.fire("Deleted!", "Your booking  has been removed.", "success");
          refetch();
        });
      }
    });
  };

  return (
    <div className="mt-28 mb-20 max-w-7xl mx-auto p-1">
      {bookings.length === 0 && (
        <div className="flex h-[50vh] justify-center items-center ">
          <h2 className="text-4xl text-dark-gray font-bold">
            You have not booked anything yet!!!
          </h2>
        </div>
      )}
      <div>
        <h2 className="text-4xl font-extrabold text-center text-dark-gray mb-6">
          My Bookings
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Remove</th>
                <th>Name</th>
                <th>Customer Email</th>
                <th>Price</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {bookings.map((booking) => (
                <BookingRow
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                ></BookingRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySchedule;
