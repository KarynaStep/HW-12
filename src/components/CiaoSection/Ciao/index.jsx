import { Component, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Ciao.module.scss';

const Ciao = () => {
const [isHi, setIsHi] = useState(true);
const { name, lname, id } = this.props;
 
  const handleBtn = () => setIsHi(!isHi);
  
  return (
      <h2 className={styles.container}>
        <span>{isHi ? 'hi' : 'bye'}, {name} {lname} (id = {id})</span>
        <button onClick={handleBtn}>switch</button>
      </h2>
    );
  }

Ciao.propTypes = {
  name: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

Ciao.defaultProps = {
  name: 'noname',
  lname: 'noname',
  id: 0,
}

export default Ciao;
