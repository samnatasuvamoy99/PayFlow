import { Balance } from "../../components/LayOut/Balance";
import { Header} from "../../components/LayOut/Header";
import { Users } from "../../components/LayOut/UsersLayout";


export  function Dashboard(){
   return(
     <div  className="flex gap-12 mt-4 bg-gray-50 w-screen-fixed h-screen-fixed  flex-col ">
         <div >
             <Header/>
         </div>
        
          <div className=" mt-3">
            <Balance />
          </div>
           

          <div >
             <Users/>
          </div>

     </div>
   )
}