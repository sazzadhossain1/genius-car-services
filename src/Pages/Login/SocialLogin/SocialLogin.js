import React from "react";

import social from "../../../image/social/google.png";
import faceBook from "../../../image/social/facebook.png";
import github from "../../../image/social/github.webp";

import "./SocialLogin.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error) {
    errorElement = (
      
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 mx-3">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {
          errorElement
      }
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="d-block mx-auto btn btn-primary w-50"
        >
          <img className="img-logo" src={social} alt="" /> Google Sing In
        </button>

        <br />
        <button className="d-block mx-auto btn btn-primary w-50">
          <img className="img-logo" src={faceBook} alt="" /> FaceBook Sing In
        </button>

        <br />
        <button className="d-block mx-auto btn btn-primary w-50">
          <img className="img-logo" src={github} alt="" /> GitHub Login In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
