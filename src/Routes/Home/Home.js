import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { handleLogIn } from "../../Contexts/actions";
import { useStore } from "../../Contexts/Context";
import { useForm } from "react-hook-form";

const Home = () => {
  const { state, dispatch } = useStore();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onLogin = (data) => {
    dispatch(handleLogIn(data));
  };
  return (
    <div className="amogus-div">
      <div className="sign-up">
        <Button
          customStyle="ma-button-a"
          text="Sign up"
          onClick={() => {
            navigate(`Registration`);
          }}
        ></Button>
      </div>
      <form onSubmit={handleSubmit(onLogin)} className="login-div">
        <input
          className="ma-input"
          placeholder="E-mail"
          {...register("email", { required: true })}
        ></input>
        <input
          className="ma-input"
          placeholder="Password"
          customtype="Password"
          {...register("password", { required: true })}
        ></input>
        <div className="buttons-div">
          <button
            className="ma-button login-btn"
            type="submit"
            onClick={() => {
              navigate(`Barbers`);
            }}
          >
            Log in
          </button>
          <Button
            customStyle="ma-button login-btn"
            text="Barbers"
            onClick={() => {
              navigate(`Barbers`);
            }}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default Home;
