import InputBox from "../../components/Common/searchInput";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useState, useEffect } from "react";
import { UserBalance } from "./UsersLayout";
import { useUsers } from "../../Hooks/Featch_user.hooks";



export const Balance = () => {

    const [value, setValue] = useState<number | null>(null);
    const [filter, setFilter] = useState("");
  
    const { users} = useUsers(filter); // use custom hooks......

    const valuecheck = async () => {
        try {
            const response = await axios.get(
                `${BACKEND_URL}/api/v2/account/balance`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            // console.log(response.data);
            setValue(response.data.balance);

        } catch (error) {
            console.log(error);
        }
    };


     //console.log(users);

    // Balance load
    useEffect(() => {
        valuecheck();
    }, []);

    return (
        <div className="fixed top-20 left-0 w-full   bg-white shadow px-6 py-3 z-40">
            <div className="flex items-center">

                <div className="font-bold text-lg">
                    Your Balance
                </div>

                <div className="font-semibold ml-4 text-lg text-green-600">
                    ₹ {value?.toFixed(2)}
                </div>

            </div>
            <div className="mt-2">
                <InputBox
                    value={filter}
                    onChange={setFilter}
                    onReset={() => setFilter("")} />
            </div>

           {filter.trim() !== "" && (
                <div className="mt-8 bg-white rounded-md shadow">

                    {users.length === 0 ? (
                        <div className="p-4 text-gray-500">No users found</div>
                    ) : (
                        users.map((user: any) => (
                            <UserBalance key={user._id} user={user} />
                        ))
                    )}

                </div>
            )}

        </div>
    );
};
