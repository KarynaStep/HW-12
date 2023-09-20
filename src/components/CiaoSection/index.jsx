import { Component, useState } from "react";
import CiaoList from "./CiaoList";
import CiaoSort from "./CiaoSort";
import { USERS } from "../../constants";

const CiaoSection = () => {
  const [users, setUsers] = useState(USERS);
  const [isSortIdUp, setIsSortIdUp] = useState(true);
  const [isSortFirstNameUp, setIsSortFirstNameUp] = useState(true);
  //написати функцію, яку передасте дитині, щоб дитина мала можливість змінювати стан батьківському елементу

  return (
    <>
      <CiaoSort
        // передасте пропсами функцію, яка дозволяє змінити стан
        users={users}
        isSortIdUp={isSortIdUp}
        isSortFirstNameUp={isSortFirstNameUp}
      />
      <CiaoList users={users} />
    </>
  );
};

export default CiaoSection;
