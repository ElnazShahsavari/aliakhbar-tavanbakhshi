import React, { useState } from "react";
import styles from './CheckBtn.module.css';

// دکمه برای فعال یا غیرفعال کردن
const PureBootstrapSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={`d-flex align-items-center gap-2 ${styles.btn}`}>
      <div className="form-check form-switch m-0">
        <input
          type="checkbox"
          className="form-check-input bg-white border-muted"
          role="switch"
          checked={isOn}
          onChange={() => setIsOn(!isOn)}
        />
      </div>
    </div>
  );
};

export default PureBootstrapSwitch;