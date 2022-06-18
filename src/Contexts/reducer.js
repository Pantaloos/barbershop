import { ACTION_TYPE } from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.REGISTER_BARBER:
      return { ...state, barbers: [...state.barbers, action.payload] };
    case ACTION_TYPE.REGISTER_USER:
      return { ...state, users: [...state.users, action.payload] };
    case ACTION_TYPE.LOG_IN_USER:
      const user = state.users.find((it) => it.email === action.payload.email);
      if (!user || user.password !== action.payload.password) return state;
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
