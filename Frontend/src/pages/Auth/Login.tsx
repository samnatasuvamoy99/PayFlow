import { Button2 } from "../../components/Common/Button2";
import { Input } from "../../components/Common/Input";
import { Label } from "../../components/Common/Label";
import { BottomWarning} from "../../components/Common/BottomWarning";



export function SignIn() {
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

              <Input placeholder="suvamoy@67gmail.com" id="email" type="email" color="gray" />
            </div>
            
            <div className="pb-2" >
              <Label labelName="Password" />
              <Input placeholder="••••••••" id="password" type="password"  color="gray"/>
            </div>

            <Button2 type="submit" text="Sign In" />

             <BottomWarning label=" Don't have a account ?" to="/signup" buttonText="Sign Up" />
          </div>

        </div>
      </div>
    </form>
  )
}