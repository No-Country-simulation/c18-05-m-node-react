import style1 from "./login.module.css";
import style2 from "./LoginForm.module.css";
import SvgComponent from "./SvgLoginGoogle";

const FormLogin = () => {

  return (
    <section className={style1.formContainer}>

      <div className={style2.formContainer_welcome}>

        <h1 className={style2.titleLogin}>EduSync</h1>
        <b className={style2.RegisterLogin}>Registrate por acá</b>
        <p className={style2.welcomeLogin}>Bienvenido a esta plataforma!</p>
      </div>

      <div className={style2.GoogleLogin} >
        <SvgComponent />
      </div>
      <div className={style2.divisorLoginGoogle__email_password}>
        <hr />
        <b>O continua con email</b>
        <hr />
      </div>
      <form className={style2.formLogin} action="">
        <input type="email" name="" id="Email" placeholder="Email" />
        <input type="password" name="" id="password" placeholder="Contraseña" />

        <section className={style2.section_checkbox_rememberme}>
          <div className={style2.div_checkBox_recuerdame}>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label style={{ cursor: "pointer", paddingLeft: " 5px " }}
              htmlFor="checkbox">Recuerdame</label>
          </div>
          <div className={style2.div_checkBox_recurdame}>
            <p>Olvidaste la contaseña?</p>
          </div>
        </section>

        <input onClick={(e) => e.preventDefault()} type="submit" value="Accede" />
        <section className={style2.section_createAccount}>
          <div className={style2.div_section_createAccount_noHaveAccount}>
            <p>No tienes una cuenta?</p>
          </div>
          <div className={style2.div_section_noHaveAccount}>
            <p>Crear una cuenta</p>
          </div>
        </section>
      </form>
    </section>
  )
}

export default FormLogin