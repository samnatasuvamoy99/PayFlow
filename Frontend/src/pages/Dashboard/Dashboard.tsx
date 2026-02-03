import { Balance } from "../../components/LayOut/Balance";
import { Header} from "../../components/LayOut/Header";
import { Users } from "../../components/LayOut/UsersLayout";


export  function Dashboard(){
   return(
     <div  className="flex  bg-gray-50 w-screen h-screen flex-col ">
         <Header/>
          <div className=" mt-3">
            <Balance value={500000.0}/>
          </div>
          <div>
             <Users/>
          </div>

     </div>
   )
}