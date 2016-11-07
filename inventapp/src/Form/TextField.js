import React from 'react';
import styles from './TextField.scss';

const TextField = ({ id, name, label, value, focused, handleChange }) =>  (
  <div className={styles.fieldGroup} >
    <label htmlFor={id} className={styles.label} >{label}</label>
    <input id={id} name={name} type="text" defaultValue={value} className={styles.field} onChange={handleChange}
      autoFocus={focused} spellCheck="false" />
  </div>
);

export default TextField;
