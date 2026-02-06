import { useState } from "react";
import { useUsers } from "../../Hooks/Featch_user.hooks";
import { Button } from "../Common/Button";
import { useNavigate } from "react-router-dom";

export type UserType = {
  firstName: string;
  lastName: string;
  _id: string;
};

export const Users = () => {
      const [filter, setFilter] = useState("");
   const { users} = useUsers(filter);

  

  return (
    <div className="flex min-h-screen flex-col bg-white px-4 pt-4">
      <div className="font-bold text-lg mb-2">Users</div>

      <div className="flex-1">
        {users.map((user) => (
          <UserBalance key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export const UserBalance: React.FC<{ user: UserType }> = ({ user }) => {
 
const navigate = useNavigate();
  
  return (
    <div className="flex mt-2 justify-between items-center py-3 border-b">
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full ml-3 shadow-2xl bg-slate-200 flex items-center justify-center mr-3">
          <span className="text-xl font-semibold">
            {user.firstName[0]}
          </span>
        </div>

        <span className="text-sm font-medium">
          {user.firstName} {user.lastName}
        </span>
      </div>

      <Button 
      label="Send Money"
      onClick={() => navigate(`/money-transfer/${user._id}`)} />
    </div>
  );
};


