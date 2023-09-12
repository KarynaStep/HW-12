import React, { Component } from 'react';
import Ciao from '../Ciao';
import styles from './CiaoList.module.scss';

class CiaoList extends Component {
  createList = ({ firstName, lastName, id }, index) => (
    <Ciao key={id} id={id} name={firstName} lname={lastName} />
  );
  render() {
    const { users } = this.props;
    return <section className={styles.container}>{users.map(this.createList)}</section>;
  }
}

export default CiaoList;
