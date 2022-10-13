import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "../scss/slide.module.scss";
import JSONDATA from "../MOCK_DATA.json";

const Slider = () => {
  return (
    <div className={styles.container}>
      <Slide>
        {JSONDATA.map((val, index) => (
          <>
            <img
              key={index}
              style={{ backgroundImage: `url(${val.image})` }}
              src={val.image}
              alt=""
            />
          </>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
