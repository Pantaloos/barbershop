import { ACTION_TYPE } from "./actionTypes";

export const handleRegisterBarber = (barber) => ({
  payload: barber,
  type: ACTION_TYPE.REGISTER_BARBER,
});

export const handleRegisterUser = (user) => ({
  payload: user,
  type: ACTION_TYPE.REGISTER_USER,
});

export const handleLogIn = (user) => ({
  payload: user,
  type: ACTION_TYPE.LOG_IN_USER,
});
