// 例: components/CharacterContainer.jsx
import Image from "next/image";
import monPro1 from "../../../public/images/monPro1.png";
import styles from "./CharacterContainer.module.css";

const CharacterContainer = () => {
  return (
    <div className={styles.character_container}>
      <Image src={monPro1} alt="MonPro1" className={styles.character_image} />
      <button
        className={`${styles.floating_button} bg-blue-500 text-white px-4 py-2 rounded cursor-pointer font-medium animate-pulse`}
      >
        B
      </button>
    </div>
  );
};

export default CharacterContainer;
