import { useState } from "react";
import style from './login.module.css'

const SlideLogin = () => {
  const [slide, setSlide] = useState(false);

  const handleChangeSlide = () => {
    setSlide(!slide)
  }

  return <section className={`${style.imgContainer} ${ !slide ? '' : `${style.red}` }`} onClick={ handleChangeSlide }>img aca</section>;
};

export default SlideLogin;
