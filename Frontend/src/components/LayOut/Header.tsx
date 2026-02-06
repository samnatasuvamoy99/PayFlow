
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

type TokenPayload = {
  id: string;
  firstName: string;
};

export const Header = () => {

  const [initial, setInitial] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwtDecode<TokenPayload>(token);

      setInitial(decoded.firstName[0].toUpperCase());
      setName(decoded.firstName);
    }
  }, []);

  return (
    <div className="shadow h-20 flex fixed top-0 left-0 w-full justify-between items-center bg-white px-4 z-50">

      <div className="flex font-bold text-xl items-center">
        PlayFlow
      </div>

      <div className="flex items-center">
        <div className="mr-4   gap-2 flex font-medium">
           <div>
                 Hello 
           </div>
         
          <div className=" text-xl shadow-2xl font-bold">
              {name} 
          </div>
          
        </div>

        <div className="rounded-full h-12 w-12 border border-black bg-slate-200 flex justify-center items-center">
          <span className="text-2xl font-bold">
            {initial}
          </span>
        </div>
      </div>

    </div>
  );
};

