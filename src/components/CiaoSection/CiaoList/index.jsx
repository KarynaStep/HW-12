import React, { Component } from "react";
import Ciao from "../Ciao";
import styles from "./CiaoList.module.scss";

const CiaoList = () => {
  const createList = ({ firstName, lastName, id }, index) => (
    <Ciao key={id} id={id} name={firstName} lname={lastName} />
  );
  return (
    <section className={styles.container}>{users.map(createList)}</section>
  );
};

export default CiaoList;
