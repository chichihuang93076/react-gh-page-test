import { useState } from "react";

const Day5 = () => {
  const [userData, setUserData] = useState({
    account: "",
    password: "",
  });

  const handleChangeaccount = (e) => {
    const { name, value } = e.target;
    setUserData((state) => ({ ...state, [name]: value }));
  };

  const handleChangepassword = (e) => {
    const { name, value } = e.target;
    setUserData((state) => ({ ...state, [name]: value }));
  };

  const submit = () => {
    console.log(`帳號：${userData.account}，密碼：${userData.password}`);
  };

  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div className="form-group">
        <label htmlFor="account">帳號</label>
        <input
          className="form-control"
          id="account"
          name="account"
          onChange={handleChangeaccount}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">密碼</label>
        <input
          className="form-control"
          id="password"
          name="password"
          onChange={handleChangepassword}
        />
      </div>
      <div className="form-group">
        <button onClick={submit} className="btn btn-primary btn-block">
          送出{" "}
        </button>
      </div>
    </div>
  );
};

export default Day5;
