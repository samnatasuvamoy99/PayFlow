import { useState } from "react";
import InputBox from "../Common/searchInput";
import { Button } from "../Common/Button";

type UserType = {
  firstName: string;
  lastName: string;
  _id: number;
};

export const Users = () => {
  const [users, setUsers] = useState<UserType[]>([
    {
      firstName: "Harkirat",
      lastName: "Singh",
      _id: 1,
    },
  ]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>

      <div className="my-2">
        <InputBox/>
      </div>

      <div>
        {users.map((user) => (
          <UserBalance key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

type UserProps = {
  user: UserType;
};

const UserBalance: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="flex justify-between py-2">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>

        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full">
       <Button/>
      </div>
    </div>
  );
};
