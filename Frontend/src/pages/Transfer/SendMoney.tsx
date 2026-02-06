import { PayButton } from "../../components/Common/PayButton";
import { Input } from "../../components/Common/Input";
import { Label } from '../../components/Common/Label';
import HoverButton from "../../components/Common/MoneyTransferstyle";
import { BottomWarning } from "../../components/Common/BottomWarning";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect ,useState } from "react";


interface UserData {
  firstName: string;
  lastName: string;
}

interface Moneyprops {
  userFirstLatter: string,
  userFirstName: string,
  userLastName: string,
  money: Number

}
export function TransferMoney() {
   const { id } = useParams();
  const navigator = useNavigate();
   const amountRef = useRef<HTMLInputElement>(null);
      const [user, setUser] = useState<UserData | null>(null);

    useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}/api/v1/user/auth/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) fetchUser();
  }, [id]);

  // ⭐ Send Money Function
  const sendMoney = async () => {
    const amount = Number(amountRef.current?.value);

    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    try {
      await axios.post(
        `${BACKEND_URL}/api/v2/account/money-transfer`,
        {
          to: id,
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Money Sent Successfully 💸");
      navigator("/dashboard");

    } catch (error) {
      console.log(error);
      alert("Transfer Failed");
    }
  };

  if (!user) {
    return <div className="p-10 text-center">Loading...</div>;
  }


  return (
    <form>
      <div className="flex bg-white w-screen h-screen flex-col items-center justify-center ">
        <div className=" w-96  border-1 shadow-2xl bg-gray-50 rounded-lg  border">
          <div className=" flex  flex-col justify-center items-center">
            <div className="text-3xl p-2 pt-4  font-bold leading-tight tracking-tight text-gray-900 ">
              Send Money
            </div>

          </div>


          <div className="p-6 space-y-2">

            <div className="flex " >
              <div className="flex gap-1">
                <HoverButton name={user.firstName} firstLatter={user.firstName[0]} />
                < div className="font-mono flex gap-3 font-semibold p-2 mt-1 text-xl">
                  <h2> {user.firstName}</h2>
                  <h2> {user.lastName}</h2>
                </div>
              </div>

            </div>
            <div className="pb-1" >
              <Label labelName="Amount in (Rs)" />
              <Input reference={amountRef} placeholder="₹ Enter amount" id="MoneySend" type="number" color="green" />
            </div>
            <div className=" flex justify-center items-center pb-2">
              <PayButton onClick={sendMoney} />
            </div>

            <BottomWarning label="Cancel Payment ?" buttonText="Back-To-Dashboard" to="/dashboard" />
          </div>


        </div>
      </div>
    </form>
  )
}