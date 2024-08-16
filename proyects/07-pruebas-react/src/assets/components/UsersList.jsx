import React, { useState, useEffect } from "react";

const UsersList = ({ endpoint }) => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${endpoint} `
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [endpoint]);
  return (
    <>
      <ul>
        {users.slice(0, 15).map((user) => (
          <li key={user.id}>
            ID: {user.id} - Nombre: {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
