import { useEffect, useState } from "react";
import CheckOut from "./CheckOut";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";
import TodoList from "./TodoList";

const Week3 = () => {
  const [token, setToken] = useState("");

  const localtoken = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (localtoken) {
      setToken(localtoken);
    }
  }, []);

  return (
    <div className="container mt-5">
      <p>{token}</p>
      {token && <TodoList token={token} />}
      <CheckOut token={token} setToken={setToken} />
      <SignOut token={token} setToken={setToken} />
      <SignUp />
      <SignIn />
    </div>
  );
};

export default Week3;
