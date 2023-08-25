import { useState } from "react";
import CheckOut from "./CheckOut";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";
import TodoList from "./TodoList";

const Week3 = () => {
  const [token, setToken] = useState("");

  // function getLocaltoken() {
  //   return JSON.parse(localStorage.getItem("token"));
  // }

  return (
    <div className="container mt-5">
      <SignUp />
      <SignIn />
      <CheckOut token={token} setToken={setToken} />
      <SignOut token={token} setToken={setToken} />
      {token && <TodoList token={token} />}
    </div>
  );
};

export default Week3;
