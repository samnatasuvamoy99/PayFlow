import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import type { UserType } from "../components/LayOut/UsersLayout";



export const useUsers = (filter: string) => {
const [users, setUsers] = useState<UserType[]>([]);

  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${BACKEND_URL}/api/v1/user/auth/usersFilter?filter=${filter}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setUsers(response.data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchUsers();
    }, 400);

    return () => clearTimeout(timeout);
  }, [filter]);

  return { users, loading };
};
