import React, { useState } from 'react';
import styles from './Accordion.module.scss';

const Accordion = props => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <div className={styles.accordionTitle} onClick={() => setIsActive(!isActive)}>
        <h4>{props.title}</h4>
        <div className={styles.accordionOpening}>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className={styles.accordionContent}>{props.content}</div>}
    </div>
  );
};

export default Accordion;