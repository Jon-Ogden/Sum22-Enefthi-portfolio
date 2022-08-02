import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import HomeNavbarButtons from "../shared/HomeNav";
import "../../Css/login.css"
import Button from "../styled-components/Button";
import { useNavigate } from "react-router";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <div className="rightimg">
        <img src="https://media2.giphy.com/avatars/memberoneio/9StaF0UBJfih.gif" />
      </div>
      <div className="form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"

        />
        <br />
        <br />
        <input
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"

        />
        <br />
        <br />
        <Button type="submit">Login</Button>
        <br />
        <br />
        <hr />
        
      </form>
      <Button event={() => {
              navigate("/register");
            }}>Create new account</Button>
            <div className="dashButton">
            <Button event={() => {
              navigate("/");
            }}>Dashboard</Button>
            </div>
      </div>
    </>
  );
};

export default Login;
