import { useHistory } from "react-router-dom";
import React from "react";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  const history = useHistory();
 
  return (
    <div>
      <h1>JANIS AMA O NICOLAS</h1>
      <SignUpForm />
    </div>
  );
};
export default SignUpPage;
