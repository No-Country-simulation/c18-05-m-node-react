import style from './login.module.css'
import FormLogin from "./formLogin";
import SlideLogin from "./slideLogin";

const index = () => {
  return (
    <>
      <div className={style.containerLogin2}>
        <FormLogin />

        <SlideLogin />
      </div>
    </>
  );
};

export default index;