import { useState } from "react";
import style from "./login.module.css";

const SlideLogin = () => {
  const [select, setSelect] = useState(1);

  return (
    <div className={style.containerSlider}>
      <div className={style.slider}>
        <input type="radio" name="slider" id="slideOne" defaultChecked />
        <input type="radio" name="slider" id="slideTwo" />
        <input type="radio" name="slider" id="slideThree" />

        <div className={style.buttons}>
          <label htmlFor="slideOne" onClick={() => setSelect(1)}></label>
          <label htmlFor="slideTwo" onClick={() => setSelect(2)}></label>
          <label htmlFor="slideThree" onClick={() => setSelect(3)}></label>
        </div>

        <div className={style.contentSlider}>
          {select === 1 && (
            <div className={style.firstslide}>
              <h1>SLIDE 1</h1>
            </div>
          )}
          {select === 2 && (
            <div className={style.secondslide}>
              <h1>SLIDE 1</h1>
            </div>
          )}
          {select === 3 && (
            <div className={style.thirdslide}>
              <h1>SLIDE 1</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideLogin;
