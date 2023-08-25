import axios from "axios";
import { useState } from "react";

const SignOut = (props) => {
  let { token, setToken } = props;
  const [message, setMessage] = useState("");
  const site = "https:/todolist-api.hexschool.io";

  const signOut = async () => {
    try {
      const res = await axios.post(
        `${site}/users/sign_out`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res.data);
      if (res.data.status) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setMessage("登出成功:" + res.data.message);
      } else {
        setMessage("登出失敗:" + res.data.message);
      }
    } catch (error) {
      setMessage("登出失敗:" + error.message);
    }
  };

  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <h3>登出</h3>
      <p>{message}</p>
      <div className="form-group">
        <label htmlFor="token">Token</label>
        <input
          type="text"
          className="form-control"
          name="token"
          placeholder="token"
          onChange={(e) => setToken(e.target.value)}
        />
      </div>
      <br />
      <button className="btn btn-primary" onClick={signOut}>
        <span>登出</span>
      </button>
    </div>
  );
};

export default SignOut;
