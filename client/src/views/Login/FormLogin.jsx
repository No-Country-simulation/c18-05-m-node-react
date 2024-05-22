import style from "./LoginForm.module.css";
import style2 from "./container.module.css";
import SvgComponent from './SvgIconGoogleLogin'

const FormLogin = () => {

  return (
    <section className={style2.formContainer}>

      <div className={style.formContainer_welcome}>

        <h1 className={style.titleLogin}>EduSync</h1>
        <b className={style.RegisterLogin}>Registrate por acá</b>
        <p className={style.welcomeLogin}>Bienvenido a esta plataforma!</p>
      </div>

      <div className={style.GoogleLogin} >
        <SvgComponent />
      </div>
      <div className={style.divisorLoginGoogle__email_password}>
        <hr />
        <b>O continua con email</b>
        <hr />
      </div>
      <form className={style.formLogin} action="">
        <input type="email" name="" id="Email" placeholder="Email" />
        <input type="password" name="" id="password" placeholder="Contraseña" />

        <section className={style.section_checkbox_rememberme}>
          <div className={style.div_checkBox_recuerdame}>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label style={{ cursor: "pointer", paddingLeft: " 5px " }}
              htmlFor="checkbox">Recuerdame</label>
          </div>
          <div className={style.div_checkBox_recurdame}>
            <p>Olvidaste la contaseña?</p>
          </div>
        </section>

        <input onClick={(e) => e.preventDefault()} type="submit" value="Accede" />
        <section className={style.section_createAccount}>
          <div className={style.div_section_createAccount_noHaveAccount}>
            <p>No tienes una cuenta?</p>
          </div>
          <div className={style.div_section_noHaveAccount}>
            <p>Crear una cuenta</p>
          </div>
        </section>
      </form>
    </section>
  )
}

export default FormLogin