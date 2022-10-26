import { updateProfile } from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link,  useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import FormInput from "../../components/FormInput/FormInput";
import { useAuth } from "../../contexts/AuthContext";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [photourl, setPhotourl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { userSignup } = useAuth();
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    //   validation
    if (password !== confirmPassword) {
      return toast.error("password not match");
    }
    userSignup(email, password, username, photourl)
      .then((userInfo) => {
        const user = userInfo.user;
        console.log(user);
        toast.success("User Create Successfull");

        // update profile
        updateProfile(user, {
            displayName: username,
            photoURL: photourl
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="mx-auto mt-2 w-25 border p-3 pb-1 rounded">
      <div className="mb-3">
        <h3>Create Account</h3>
      </div>
      <Form onSubmit={handleSignup}>
        <FormInput
          label="Your Name"
          type="text"
          name="name"
          placeholder="your name here"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <FormInput
          label="Your Photo URL"
          type="text"
          name="name"
          placeholder="your photo url"
          value={photourl}
          onChange={(e) => setPhotourl(e.target.value)}
        />
        <FormInput
          label="Your Email"
          type="email"
          name="email"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          label="Your Password"
          type="password"
          name="password"
          placeholder="your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="btn btn-success w-100 mt-1"> Signup</button>
      </Form>
      <p className="mt-2">
        <small>
          You have already an account{" "}
          <Link to="/login">
            <small>please login</small>
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Signup;
