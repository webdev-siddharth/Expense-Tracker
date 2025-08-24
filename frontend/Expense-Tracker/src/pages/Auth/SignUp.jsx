import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/inputs/input";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handle sign Up form Submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    let prfileImageUrl = "";

    if (!fullName) {
      setError("Please Enter your Name");
      return;

    }

    if (!validateEmail(email)) {
      setError("Please Enter a Valid Email Address.");
      return;
    }

    if (!password) {
      setError("Please Enter the Password");
      return;
    }

    setError("");

    // SignUp API Call 
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join Us Today by Entering You Details Below.
        </p>

        <form onSubmit={handleSignUp}>

          <ProfilePhotoSelector image={ profilePic} setImage = {setProfilePic} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="John Chamar"
              type="text"
            />

            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="john@example.com"
              type="email"
            />

            <div className="col-span-2">
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="**Min 8 Characters**"
                type="password"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
          
                    <button type="submit" className="btn-primary">
                      SIGN UP
                    </button>
          
                    <p className="text-[13px] text-slate-800 mt-3">
                      Already have an Account?{" "}
                      <Link className="font-medium text-primary underline" to = "/login">
                      Login
                      </Link>
                    </p>

        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
