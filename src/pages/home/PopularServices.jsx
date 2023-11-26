import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../../components/serviceCard/ServiceCard";

const PopularServices = () => {
  const [popularServices, setPopularServices] = useState([]);
  //   console.log(Object.keys(popularServices[0]).join(", "));

  useEffect(() => {
    axios
      .get("http://localhost:5000/popularServices")
      .then((response) => {
        console.log(response);
        const data = response.data;
        console.log(data);
        setPopularServices(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {popularServices.map((popularService) => (
        <ServiceCard
          key={popularService._id}
          popularService={popularService}
        ></ServiceCard>
      ))}
    </div>
  );
};

export default PopularServices;
