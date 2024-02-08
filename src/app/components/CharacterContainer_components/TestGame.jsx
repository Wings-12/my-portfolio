import Image from "next/image";
import monPro1 from "../../../../public/images/monPro1.png";
import styles from "../CharacterContainer.module.css";

const TestGame = () => {
  return (
    <div
      className={`${styles.character_image} controller aos-init aos-animate`}
      data-aos="fade-up"
      data-aos-delay="750"
      data-aos-duration="700"
    >
      <Image src={monPro1} alt="MonPro1" layout="fill" objectFit="cover" />
      {/* <svg
        style={{ isolation: "isolate" }}
        viewBox="0 0 300 200"
        width="300"
        height="200"
      >
        <path
          d=" M 271.317 173.993 C 262.656 180.269 249.129 179.804 240.801 171.884 C 231.963 163.481 226.485 153.311 218.193 143.15 Q 214.26 138.338 201.633 138.554 Q 165.267 139.172 147.132 138.77 Q 132.369 138.653 98.328 138.77 Q 85.704 138.548 81.774 143.366 C 73.479 153.524 68.004 163.688 59.163 172.097 C 50.841 180.011 37.311 180.482 28.647 174.2 C 16.302 165.257 13.497 157.637 16.65 145.694 C 21.603 126.923 31.233 89.303 36.012 70.484 C 45.516 33.068 54.084 26.972 87.663 25.328 C 95.424 24.95 105.561 24.899 112.02 35.408 C 114.876 40.058 119.718 39.314 124.257 39.305 L 175.707 39.305 C 180.249 39.314 185.082 39.848 187.947 35.198 C 194.4 24.689 204.534 24.734 212.298 25.115 C 245.877 26.762 254.487 32.843 263.952 70.274 C 270.291 95.366 276.12 118.901 283.314 145.481 C 286.545 157.409 283.665 165.047 271.317 173.993 Z "
          fillRule="evenodd"
          fill="rgb(255,255,255)"
        ></path>
      </svg>
      <div id="color-switch">
        <div id="led-btn-red" className="btn btn-floating pulse">
          R
        </div>
        <div id="led-btn-green" className="btn btn-floating pulse on">
          G
        </div>
        <div id="led-btn-blue" className="btn btn-floating pulse">
          B
        </div>
      </div>
      <div id="four-way-button">
        <div id="top-key">
          <i className="material-icons">arrow_drop_up</i>
        </div>
        <div id="left-key">
          <i className="material-icons">arrow_drop_up</i>
        </div>
        <div id="right-key">
          <i className="material-icons">arrow_drop_up</i>
        </div>
        <div id="bottom-key">
          <i className="material-icons">arrow_drop_down</i>
        </div>
        <div id="center-key">
          <i className="material-icons">fiber_manual_record</i>
        </div>
      </div>
      <div id="start-button"></div> */}
    </div>
  );
};

export default TestGame;
