import styles from "../CharacterContainer.module.css";

const BluePulseButton = () => {
  return (
    <button
      className={`${styles.floating_button} bg-blue-500 text-white px-4 py-2 rounded cursor-pointer font-medium animate-pulse`}
    >
      B
    </button>
  );
};

export default BluePulseButton;
