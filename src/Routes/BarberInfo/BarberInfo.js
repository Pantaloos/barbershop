import React from "react";
import "./BarberInfo.css";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../Contexts/Context";
import { useParams } from "react-router-dom";

const BarberInfo = () => {
  const { state, dispatch } = useStore();
  const { barbers, user } = state;
  const navigate = useNavigate();
  let { id } = useParams();

  const barber = barbers.find((it) => it.id.toString() === id.toString());

  return (
    <div className="main-info">
      <button
        className="ma-button"
        onClick={() => {
          navigate(`/Barbers/`);
        }}
      >
        Back
      </button>
      {user && <button className="ma-button">Order this barber</button>}
      <div className="individual-info">
        <div className="barber-info-div">
          <p className="barber-info">{`first name: ${barber.firstName}`}</p>
          <p className="barber-info">{`last name: ${barber.lastName}`}</p>
          <p className="barber-info">{`address: ${barber.adress}`}</p>
          <p className="barber-info">{`price: ${barber.price}`}</p>
          <p className="barber-info">{`price: ${barber.email}`}</p>
        </div>
      </div>
    </div>
  );
};

export default BarberInfo;
