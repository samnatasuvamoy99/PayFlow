import { Button2 } from "../../components/Common/Button2";
import { Input } from "../../components/Common/Input";
import { Label } from "../../components/Common/Label";
import { BottomWarning } from "../../components/Common/BottomWarning";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export function SignIn() {

  const [loading, setLoading] = useState(false);
  const EmailRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const signin = async () => {
    const email = EmailRef.current?.value;
    const password = PasswordRef.current?.value;

    if (!email || !password) {
      alert("please fill the full information correctly!!");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(`${BACKEND_URL}/api/v1/user/auth/signin`, {
        email,
        password
      })

      const jwt = response.data.token;
      localStorage.setItem("token", jwt);

      console.log(response);
      alert("Welcome you successfully login.....!");
      navigate("/dashboard")
    } catch (err: any) {
      console.error("Signin error:", err);
      alert(err.response?.data?.message || "Signin failed. Please try again.");
    }
    finally {
      setLoading(false);
    }

  }


  return (
    <form>
      <div className="flex bg-gray-500 w-screen h-screen flex-col items-center justify-center ">
        <div className=" w-96   bg-gray-100 rounded-lg shadow border">
          <div className=" flex  flex-col justify-center items-center">
            <div className="text-3xl p-2  font-bold leading-tight tracking-tight text-gray-900 ">
              Sign In
            </div>
            <p className="text-decoration-solid text-lg">
              Enter your  credentials to access your
              <br />
              <p className="text-decoration-solid text-lg flex justify-center items-center">
                account
              </p>
            </p>
          </div>
          <div className="p-6 space-y-2">
            < div>
              <Label labelName="Email" />

              <Input reference={EmailRef} placeholder="suvamoy@67gmail.com" id="email" type="email" color="gray" />
            </div>

            <div className="pb-2" >
              <Label labelName="Password" />
              <Input reference={PasswordRef} placeholder="••••••••" id="password" type="password" color="gray" />
            </div>

            <Button2 onClick={signin} loading={loading} type="submit" text="Sign In" />

            <BottomWarning label=" Don't have a account ?" to="/signup" buttonText="Sign Up" />
          </div>

        </div>
      </div>
    </form>
  )
}