import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>this Service Detail: {serviceId}</h1>
      <div className="text-center">
        <Link to="checkOut">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
