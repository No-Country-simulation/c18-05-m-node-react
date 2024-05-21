import SessionGoogle from "./SessionGoogle";
import style from "./login.module.css";

const FormLogin = () => {
  return (
   <section className={style.formContainer}>
    <SessionGoogle/>
   </section>
  )
}

export default FormLogin