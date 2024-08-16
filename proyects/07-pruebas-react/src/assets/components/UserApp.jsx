import { useState } from "react";
import UsersList from "./UsersList";
const UserApp = () => {
  const [endpoint, setEndpoint] = useState(false);
  const handleFetch = () => {
    setEndpoint(!endpoint);
  };

  const endpoints = endpoint ? "comments" : "users";
  return (
    <>
      <h1>Lista de usuarios</h1>
      <UsersList endpoint={endpoints} />
      <button onClick={handleFetch}>Cambiar</button>
    </>
  );
};

export default UserApp;
