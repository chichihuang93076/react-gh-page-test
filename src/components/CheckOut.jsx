import axios from "axios";
import { useState } from "react";

const CheckOut = (props) => {
  let { token, setToken } = props;
  const [message, setMessage] = useState("");
  const baseURL = "https:/todolist-api.hexschool.io";

  const checkOut = async () => {
    try {
      const response = await axios.get(`${baseURL}/users/checkout`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data);
      if (response.data.status) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", JSON.stringify(token));
        setMessage("驗證成功 UID: " + response.data.uid);
      } else {
        setMessage("驗證失敗:" + response.data.message);
      }
    } catch (error) {
      setMessage("驗證失敗:" + error.message);
    }
  };

  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <h3>驗證</h3>
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
      <button className="btn btn-primary" onClick={checkOut}>
        <span>驗證</span>
      </button>
    </div>
  );
};

export default CheckOut;
