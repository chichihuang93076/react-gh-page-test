import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const site = "https:/todolist-api.hexschool.io";

  const signUp = async () => {
    try {
      const response = await axios.post(`${site}/users/sign_up`, {
        email,
        password,
        nickname,
      });
      console.log(response.data);
      setMessage("註冊成功:" + response.data.uid);
    } catch (error) {
      console.log(error.message);
      setMessage("註冊失敗:" + error.message);
    }
  };

  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <h3>註冊</h3>
      <div>
        <div>
          <label htmlFor="nickname">姓名</label>
          <input
            type="text"
            className="form-control"
            name="nickname"
            placeholder="姓名"
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <br />
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
            placeholder="密碼"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button className="btn btn-primary" onClick={signUp}>
          <span>註冊</span>
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SignUp;
