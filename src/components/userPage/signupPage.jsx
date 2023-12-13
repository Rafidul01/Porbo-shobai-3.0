import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link, Navigate, useNavigate } from "react-router-dom";
import './styles.css';
import s1 from "../images/signup.png";

export function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate("");

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        Navigate("/home");
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <div class="min-h-screen py-10 bg-gradient-to-r from-cyan-200 to-cyan-500 ">
      <div class="container mx-auto rounded-xl">
        <div class="flex flex-col lg:flex-row w-10/12 lg:w-10/12 mx-auto">
          <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center ">
            {/* <h1 class="text-black text-5xl font-semibold mb-4">Welcome</h1> */}
            <div className="space-y-2">
              <img src={s1} alt=""/>
              {/* <p class="text-black">
                <span class="text-2xl p-1">Why us?</span>
                <br />
                <span class="px-2 ml-2">Interactive Learning Management.</span>
                <br />
                <span class="px-2 ml-2">
                  24/6 member support for Premium user.
                </span>
                <br />
                <span class="px-2 ml-2">
                  Group Discussion,Assignment weekly and grading .
                </span>
                <br />
                <span class="px-2 ml-2">Total 14 other perks</span>
                <br /> */}
                <span class=" text-xl py-2">Already Have an Account?</span>
                <Link to="/" class="text-purple-500 font-bold text-xl ms-1">
                  Login Here
                </Link>
              {/* </p> */}
            </div>
          </div>

          <div class="w-full lg:w-1/2 py-16 px-12">
            <h2 class="text-3xl mb-4">Register</h2>
            <p class="mb-4">
              Create your account. It’s free and only take a minute
            </p>

            <form action="#">
              <div class="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Firstname"
                  class="w-full py-2 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-neutral-50"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  class="w-full py-2 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-neutral-50"
                />
              </div>
              <div class="mt-5">
                <input
                  type="text"
                  placeholder="Email"
                  class="w-full py-2 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-neutral-50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div class="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  class="w-full py-2 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-neutral-50"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  class="w-full py-2 my-2 bg-transparent text-black border-b border-black outline-none focus:outline-neutral-50"
                />
              </div>
              <div class="mt-5">
                <input type="checkbox" class="border border-gray-400" />
                <span className="p-2">
                  I accept the{" "}
                  <a href="#" class="text-purple-500 font-semibold">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#" class="text-purple-500 font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div class="mt-5">
                <button
                  class="w-full p-2 text-white my-2 bg-black rounded-xl text-center flex items-center justify-center"
                  type="submit"
                  onClick={signup}
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}