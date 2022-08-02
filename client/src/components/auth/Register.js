import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import HomeNavbarButtons from "../shared/HomeNav";
import "../../Css/register.css"
import Button from "../styled-components/Button";
import { useNavigate } from "react-router";

// import "../../Css/Register.css"

const Register = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  let navigate = useNavigate()





  const handleSubmit = (e) => {

    e.preventDefault();
    if (password.length < 6) {
      alert("password is to short");
      return; // do even try to register if passwords do not match
    }
    if (password !== passwordConfirmation) {
      alert("passwords do not match");
      return; // do even try to register if passwords do not match
    }
    register({ email, name, password });
  };
  return (
    <>
    <div className="imgblock">        <img src="https://nftcalendar.io/storage/uploads/2021/10/26/ezgif_com-gif-maker__1__10262021182854617848e6a681a.gif" />
</div>
    <div className="formreg">
      <h1>Register</h1>
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"

        />
        <br />
        <br />
        <input
          minLength={6}
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"

        />
        <br />
        <br />
        <input
          minLength={6}
          required
          autoFocus
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Password confirmation"

        />
        <br />
        <br />
        <Button type="submit">register</Button>
      </form>
      <hr />
      <Button event={() => {
              navigate("/login");
            }}>Login</Button>
     <div className="dashButton">
            <Button event={() => {
              navigate("/");
            }}>Dashboard</Button>
            </div>
    </div>
    </>
  );
};

export default Register;
