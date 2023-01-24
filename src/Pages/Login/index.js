import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as R from "ramda";
import { Redirect } from "react-router-dom";
import { Strings } from "../../Services/Utils/Locals/index";
import { editLoginInfo } from "../../Services/Redux/Actions/loginInfo";

const Login = () => {
  const dispatch = useDispatch();
  const loginInfo = useSelector((state) => state.loginInfo);
  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);

  return (
    <div>
      {!R.isNil(loginInfo) && <Redirect to={`/`} />}
      <span>
        <p>{Strings.getString("login.username")} : </p>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
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
