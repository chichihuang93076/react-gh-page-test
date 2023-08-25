import axios from "axios";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const site = "https:/todolist-api.hexschool.io";

  const signIn = async () => {
    try {
      const response = await axios.post(`${site}/users/sign_in`, {
        email,
        password,
      });
      console.log(response.data);
      if (response.data.status) {
        setMessage("Token:" + response.data.token);
      } else {
        setMessage("登入失敗:" + response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      setMessage("登入失敗:" + error.message);
    }
  };

  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <h3>登入</h3>
      <p>{message}</p>
      <div>
        <div className="form-group">
          <label htmlFor="email">帳號(Email)</label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">密碼</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button className="btn btn-primary" onClick={signIn}>
          <span>登入</span>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
