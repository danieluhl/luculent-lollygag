import styles from './toggle.module.css';
import classNames from 'classnames';

const ToggleButton = ({ onDarkmodeToggle, isDarkMode }) => {
  const triggerToggle = () => {
    onDarkmodeToggle(!isDarkMode);
  };

  const toggleClasses = classNames(styles.toggle, {
    [styles.toggleChecked]: isDarkMode,
  });

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
        type='checkbox'
        aria-label='Toggle Button'
        className={styles.toggleInput}
      />
    </div>
  );
};

export default ToggleButton;
