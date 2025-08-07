import React, { useState, useEffect } from 'react';
import styles from './Counter.module.css';


// یه باکس کوچک برای شمارش
function Counter({ value, onChange }) {
  const [internalCount, setInternalCount] = useState(value ?? 1);

  useEffect(() => {
    if (value !== undefined) {
      setInternalCount(value);
    }
  }, [value]);

  const increase = () => {
    const newCount = internalCount + 1;
    setInternalCount(newCount);
    onChange?.(newCount); 
  };

  const decrease = () => {
    if (internalCount > 1) {
      const newCount = internalCount - 1;
      setInternalCount(newCount);
      onChange?.(newCount);
    }
  };

  return (
    <div className='d-flex'>
      <button onClick={increase} className={`${styles.counterSign} rounded-3 bg-white border-muted my-green`}>+</button>
      <button disabled className={`${styles.counter} rounded-3 border-0 mx-1`}>{internalCount}</button>
      <button onClick={decrease} className={`${styles.counterSign} rounded-3 bg-white border-muted text-muted`}>-</button>
    </div>
  );
}

export default Counter;
