import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Strings } from "../../Services/Utils/Locals/index";
import { editLoginInfo } from "../../Services/Redux/Actions/loginInfo";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);

  const loginInfo = useSelector((state) => state.loginInfo);
  console.log("loginInfologinInfo;'", loginInfo);

  return (
    <div>
      <span>
        <p>{Strings.getString("login.username")} : </p>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </span>
      <span>
        <p>{Strings.getString("login.password")} :</p>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </span>
      <br />
      <br />
      <span>
        <button
          onClick={() => {
            // const loginInfo = { username: username, password: password };
            // setLocalStorage(`loginInfo`, JSON.stringify(loginInfo));
            dispatch(
              editLoginInfo({
                username: username,
                password: password,
              })
            );
          }}
        >
          {Strings.getString("button.login.confirm")}
        </button>
      </span>
    </div>
  );
};

export default Login;
