import { BACKEND_URL } from "../../config";
import axios from "axios";
import { Button2 } from "../../components/Common/Button2";
import { Input } from "../../components/Common/Input";
import { Label } from "../../components/Common/Label";
import { useRef, useState } from "react";
import { BottomWarning } from "../../components/Common/BottomWarning";
import { useNavigate } from "react-router-dom";

export function SignUp() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const FirstNameRef = useRef<HTMLInputElement>(null);
  const LastNameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const Password = useRef<HTMLInputElement>(null);

  const signup = async () => {
    const firstName = FirstNameRef.current?.value;
    const lastName = LastNameRef.current?.value;
    const email = EmailRef.current?.value;
    const password = Password.current?.value;

    if (!firstName || !lastName || !email || !password) {
      alert("please fill  all the field");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(`${BACKEND_URL}/api/v1/user/auth/signup`, {
        firstName,
        lastName,
        email,
        password
      });

      console.log(response);
      alert("You have signed up successfully!");
      navigate("/signin");
    } catch (err: any) {
      console.error("Signup error:", err);
      alert(err.response?.data?.message || "Signup failed. Please try again.");
    }
    finally {
      setLoading(false);
    }

  }



  return (
    <form>
      <div className="flex bg-gray-500 w-screen h-screen flex-col items-center justify-center ">
        <div className=" w-96  bg-gray-100 rounded-lg shadow border">
          <div className=" flex  flex-col justify-center items-center">
            <div className="text-3xl p-2  font-bold leading-tight tracking-tight text-gray-900 ">
              Sign Up
            </div>
            <p className="text-decoration-solid text-lg">
              Enter your information to create a account
            </p>
          </div>

          <div className="p-6 space-y-2">
            <div>
              <Label labelName="First Name" />
              <Input reference={FirstNameRef} placeholder="Suvamoy" id="firstName" type="firstName" color="gray" />
            </div>

            <div>
              <Label labelName="Last Name" />
              <Input reference={LastNameRef} placeholder="Samanta" id="lastName" type="lastName" color="gray" />
            </div>
            < div>
              <Label labelName="Email" />

              <Input reference={EmailRef} placeholder="suvamoy@67gmail.com" id="email" type="email" color="gray" />
            </div>
            <div>
              <Label labelName="Password" />
              <Input reference={Password} placeholder="••••••••" id="password" type="password" color="gray" />
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="terms"
                  aria-describedby="terms"
                  className="w-4 h-4 rounded border  bg-gray-50 border-gray-300 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600   dark:focus:ring-primary-600
    ring-offset-gray-800"
                />

              </div>
              <div className="ml-3 text-sm  text-gray-500 ">
                <label>
                  I accept the
                  <a href="#" className="font-medium text-primary-600 hover:underline text-primary-500">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <Button2 onClick={signup} loading={loading} type="submit" text="Create a Account" />

            <BottomWarning label="  Already have a account ?" buttonText="Login" to="/signin" />

            {/* <div className="mt-4 text-xl text-solid  flex justify-center items-center">
            ? Login
            </div> */}

          </div>
        </div>
      </div>
    </form>
  )
}