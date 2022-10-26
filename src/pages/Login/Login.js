import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  // login user
  const handleLogin = (e) => {
    e.preventDefault();
    userLogin(email, password)
      .then((userInfo) => {
        const user = userInfo.user;
        navigate(from, { replace: true });
        toast.success("Login successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  return (
    <div className="mx-auto mt-5 w-25 border p-3 pb-5 rounded">
      <div className="mb-3">
        <h3>Login</h3>
      </div>
      <Form onSubmit={handleLogin}>
        <FormInput
          label="Email Address"
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-success w-100 mt-3"> Login</button>
      </Form>
      <p className="mt-2">
        <small>
          You don't have an account{" "}
          <Link to="/signup">
            <small>create account</small>
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
