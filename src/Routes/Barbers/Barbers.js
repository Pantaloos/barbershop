import React from "react";
import { useStore } from "../../Contexts/Context";
import "./Barbers.css";
import { NavigationType, useNavigate } from "react-router-dom";

const Barbers = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useStore();

  const { barbers } = state;
  return (
    <div className="amogusus-div">
      <button
        className="ma-button"
        onClick={() => {
          navigate(`/`);
        }}
      >
        Back
      </button>
      {barbers.map((it) => (
        <div className="barber-info-div">
          <p className="barber-info">{`first name: ${it.firstName}`}</p>
          <p className="barber-info">{`last name: ${it.lastName}`}</p>
          <p className="barber-info">{`address: ${it.adress}`}</p>
          <p className="barber-info">{`price: ${it.price} Gel`}</p>
          <button
            className="ma-button"
            onClick={() => {
              navigate(`/Barbers/${it.id}`);
            }}
          >
            Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Barbers;
