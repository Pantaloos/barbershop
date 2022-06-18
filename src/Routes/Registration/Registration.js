import React, { useEffect, useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useStore } from "../../Contexts/Context";
import {
  handleRegisterBarber,
  handleRegisterUser,
} from "../../Contexts/actions";
import { v4 as uuidv4 } from "uuid";

const BarberRegistration = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useStore();
  const { register, handleSubmit } = useForm();

  const [isUser, setIsUser] = useState();
  const onSubmit = (data) => {
    data.id = uuidv4();
    dispatch(handleRegisterBarber(data));
  };
  const onSubmitUser = (data) => {
    dispatch(handleRegisterUser(data));
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="abc">
      <button onClick={() => setIsUser(!isUser)} className="ma-button xyz">
        SWAP
      </button>
      <button onClick={() => navigate("/")} className="ma-button xyz">
        BACK
      </button>
      {isUser ? (
        <div className="barber-div">
          <div>
            <form
              className="register-div"
              onSubmit={handleSubmit(onSubmitUser)}
            >
              <input
                placeholder="Email"
                type="email"
                className="ma-input"
                {...register("email", { required: true })}
              ></input>
              <input
                placeholder="Password"
                type="password"
                className="ma-input"
                {...register("password", { required: true })}
              ></input>
              <button className="user-register-btn" type="submit">
                Register as user
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <div className="barber-div">
            <form className="register-div" onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="First name"
                className="ma-input"
                {...register("firstName")}
              ></input>
              <input
                placeholder="Last name"
                className="ma-input"
                {...register("lastName")}
              ></input>
              <input
                placeholder="Email"
                className="ma-input"
                type="email"
                {...register("email", { required: true })}
              ></input>
              <input
                placeholder="Address"
                className="ma-input"
                {...register("adress")}
              ></input>
              <input
                placeholder="Price"
                className="ma-input"
                type="number"
                {...register("price")}
              ></input>
              <input
                placeholder="Password"
                className="ma-input"
                type="password"
                {...register("password", { required: true })}
              ></input>
              <button
                className="barber-register-btn"
                text="Register as barber"
                type="submit"
              >
                Register as barber
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BarberRegistration;
