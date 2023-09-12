import React from 'react';
import styles from './Error.module.scss';
//import errorPic from './error.png';
const Error = () => {
  return (
    <div className={styles.error}>
      {/* <img src={errorPic} alt="error" /> */}
      <img src="/images/error.png" alt="error" />
    </div>
  );
};

export default Error;
