import { PayButton } from "../../components/Common/PayButton";
import { Input } from "../../components/Common/Input";
import { Label } from '../../components/Common/Label';
import HoverButton from "../../components/Common/MoneyTransferstyle";
import { BottomWarning } from "../../components/Common/BottomWarning";




interface Moneyprops {
  userFirstLatter: string,
  userFirstName: string,
  userLastName: string,
  money: Number

}
export function TransferMoney() {
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
                <HoverButton name="suvamoy" firstLatter="S" />
                < div className="font-mono font-semibold p-2 mt-1 text-xl">
                  Suvamoy Samanta
                </div>
              </div>

            </div>
            <div className="pb-1" >
              <Label labelName="Amount in (Rs)" />
              <Input placeholder="₹ Enter amount" id="MoneySend" type="number" color="green" />
            </div>
            <div className=" flex justify-center items-center pb-2">
              <PayButton />
            </div>

            <BottomWarning label="Cancel Payment ?" buttonText="Back-To-Dashboard" to="/dashboard" />
          </div>


        </div>
      </div>
    </form>
  )
}