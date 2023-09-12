import React from 'react';
import PropTypes from 'prop-types';
import styles from './Note.module.scss';
import { COLORS } from '../../constants';

const Note = ({ children, title, bgColor }) => {
  return (
    <article className={styles.note} style={{ borderColor: bgColor }}>
      <h2 className={styles.note__h2} style={{ color: bgColor }}>
        {title}
      </h2>
      {children}
    </article>
  );
};

Note.defaultProps = {
  title: 'Note',
  bgColor: COLORS.MAIN,
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Note;
