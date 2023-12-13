import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import w1 from '../images/welcome.png';
import './styles.css';


export function Loginpage({ user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate("");

  {/* Following sign in function follows */}
  
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        Navigate("/home");
        {/*When user succesfully logged in he will navigate to the navbar page  */}
      })
      .catch((Error) => {
        console.log(Error);
        alert("Either Username or Password invalid");
        {/* Incase user fails to loggin then an alert will appear and inform the Failure*/}
      });
  };

  return (
    //Dividing into two parts for images and content(login box,login)
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        {/* <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-black font-semibold my-4 pr-2">
            Your vision ,Our works. Lets make a deal
          </h1>
          <p className="text-xl text-black font-normal">
            Dreams fuel ambition; vision lights the way
          </p>
        </div>
        <div className="w-full h-full"></div> */}
        <img src={w1} alt=""/>
      </div>

      {/* Content Portion */}
      <div className="w-1/2 h-full bg-cyan flex flex-col p-15 justify-between">
        {/* <h1 className="text-base font-bold">Porbo Sobai</h1> */}

        {/*Login text */}
        <div className="w-full flex flex-col my-12">
          <div className="w-full flex flex-col mb-8 my-8">
            <h3 className="text-4xl font-semibold mb-2">Login Here</h3>
          </div>

          {/*Input pointer */}
          <div className="w-full flex flex-col max-w-[500px]">
            <form>
              <input
                type="email"
                className="w-full py-2 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-neutral-50"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
              />
              {/* Get the input value from the user */}

              <input
                type="password"
                className="w-full py-2 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-neutral-50"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
              />
              { /* Get the input value from the user */ }

              {/* Remember me and Forget Password */}

              <div className="w-full flex items-center justify-between mt-2">
                <div className="w-full flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-2" />
                  <p>Don't Ask Again </p>
                </div>

                <div>
                  <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline-offset-2">
                    Forget Password?
                  </p>
                </div>
              </div>

              <div className=" w-full flex flex-col my-6">
                <button
                  className="w-full p-2 text-white my-2 bg-black rounded-xl text-center flex items-center justify-center"
                  onClick={signIn}
                >
                  Login
                </button>
                <Link
                  className="w-full p-2 text-black my-2 bg-white border border-black rounded-xl text-center flex items-center justify-center"
                  to="/signup"
                >
                  Register Now
                </Link>

                <button
                  onClick={() => (window.location.href = "/signup")}
                  className="w-full py-2 my-2 bg-cyan border border-red-500 rounded-xl text-center flex items-center justify-center "
                >
                  <i class="fa-solid fa-comment-sms p-1"></i>
                  <p className="text-red">Login with OTP</p>
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex items-center justify-center relative py-1">
            <div className="w-full h-[1px] bg-violet-600 my-1"></div>
            <p className="p-1 absolute text-gray-500 bg bg-cyan">OR</p>
          </div>
          <p className="text-lg">
            Create an account.Its free.
            <Link className="text-xl font-semibold underline underline-offset-2 cursor-pointer text-violet-600" to="/signup">
             
              Sign Up
            </Link>
          </p>
        </div>

        {/* */}
        {/* <div className="w-full">
          <div className="w-full flex items-center justify-center relative py-1">
            <div className="w-full h-[1px] bg-violet-600 my-1"></div>
            <p className="p-1 absolute text-gray-500 bg bg-cyan">OR</p>
          </div>
          <p className="text-lg">
            Create an account.Its free.
            <Link className="text-xl font-semibold underline underline-offset-2 cursor-pointer text-violet-600" to="/signup">
             
              Sign Up
            </Link>
          </p>
        </div> */}
      </div>
    </div>
  );
}