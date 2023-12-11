const BookingRow = (props = {}) => {
  const { booking, handleDelete } = props || {};

  const { serviceImage, serviceName, date, servicePrice, customerEmail, _id } =
    booking;

  return (
    <tr className="font-bold">
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask rounded w-24 h-24">
              <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>{customerEmail}</td>
      <td>${servicePrice}</td>
      <td>{date}</td>
    </tr>
  );
};

export default BookingRow;
