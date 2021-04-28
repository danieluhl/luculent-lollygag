import styles from './toggle.module.css';
import {useState} from 'react';
import classNames from 'classnames';

const ToggleButton = ({onDarkmodeToggle}) => {
  const [toggle, setToggle] = useState(true);

  const triggerToggle = () => {
    onDarkmodeToggle(!toggle);
    setToggle(!toggle);
  };

  const toggleClasses = classNames(
    styles.toggle,
    {
      [styles.toggleChecked]: toggle
    }
  );

  return (
    <div onClick={triggerToggle} className={toggleClasses}>
      <div className={styles.toggleContainer}>
        <div className={styles.toggleCheck}>
          <span>🌜</span>
        </div>
        <div className={styles.toggleUncheck}>
          <span>🌞</span>
        </div>
      </div>
      <div className={styles.toggleCircle}></div>
      <input
        onChange={triggerToggle}
        type="checkbox"
        aria-label="Toggle Button"
        className={styles.toggleInput}
      />
    </div>
  );
};

export default ToggleButton;
