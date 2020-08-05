import React from "react";
import UserComponent from "./UserComponent";

const UserList = ({ users, usersAreLoading }) => {
  let content = <h3>Loading users...</h3>;

  if (!usersAreLoading && users) {
    content = (
      <div>
        {users.map((user) => (
          <UserComponent key={user.id} user={user} />
        ))}
      </div>
    );
  }

  return content;
};

export default UserList;
