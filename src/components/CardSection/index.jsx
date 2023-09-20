import React, { Component, useState } from "react";
import { USERS } from "../../constants";
import CardList from "./CardList";
import CardSelectList from "./CardSelectList";

const CardSection = () => {
  const [users, setUsers] = useState(
    USERS.map((user) => ({ ...user, isSelect: false }))
  );

  const setSelectUsers = (newUsers) => {
    setUsers({ users: newUsers });
  };

  return (
    <>
      <CardSelectList users={users} />
      <CardList users={users} setSelectUsers={setSelectUsers} />
    </>
  );
};

export default CardSection;
