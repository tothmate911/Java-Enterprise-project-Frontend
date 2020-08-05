import React from "react";
import UserList from "../components/UserList";
import useApiCall from "../hooks/ApiCall";

function Admin() {
  const urlAllUsers = "http://localhost:8080/books/admin";
  const [users, usersAreLoading] = useApiCall(urlAllUsers);

  return (
    <React.Fragment>
      <h1 className="m-3">Users and their rented books</h1>
      <UserList users={users} usersAreLoading={usersAreLoading} />
    </React.Fragment>
  );
}

export default Admin;
