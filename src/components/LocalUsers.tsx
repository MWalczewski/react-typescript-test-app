import React from "react";
import { User } from "../types/types";
import { LocalUsers_URL } from "../mocks/URLs";
import { useAxiosGet } from "../hooks/useAxiosGet";

const LocalUsers = () => {
  const [users] = useAxiosGet<User[] | null>(`${LocalUsers_URL}`, []);
  return (
    <>
      <h2>Users List</h2>
      <ul>
        {users?.map((user) => {
          return (
            <li key={user.id}>
              <pre>{JSON.stringify(user)}</pre>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LocalUsers;
