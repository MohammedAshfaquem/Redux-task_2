import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec } from "./redux";
function Counter() {
  const value = useSelector((state) => state.counter.value);
  const login = useSelector((state) => state.auth.login);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(inc())}>+</button>
      <h1>{value}</h1>
      <button onClick={() => dispatch(dec())}>-</button>

      <br />
      <br />

      <button onClick={() => dispatch({ type: "login" })}>LogIn</button>
      <br />
      <br />

      <button onClick={() => dispatch({ type: "logout" })}>LogOut</button>

      <h2>{login ? "user Logged In" : "User Logout"}</h2>
    </div>
  );
}

export default Counter;
