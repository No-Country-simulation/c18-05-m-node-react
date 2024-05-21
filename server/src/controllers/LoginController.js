import {checkPassword} from '../utils/hasPassword.js'

export const login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
     
      //chequeamos el SELECT
     
      const respuestaDBusuario = await Usuario.findByPk(email, {
       
      });
 
      const respuestaDBprofesional = await Profesional.findOne({
        where: { email: email },
       
      });
      
      const respuestaDBadmin = await Admin.findByPk(email);
      
    
      //si no existe respuesta.
      if (!respuestaDBusuario && !respuestaDBadmin && !respuestaDBprofesional)
        return res
          .status(401)
          .send({ message: "El usuario no se encontró con ese email." });
      let respuestaDB;
      if (respuestaDBusuario) respuestaDB = respuestaDBusuario;
      if (respuestaDBadmin) respuestaDB = respuestaDBadmin;
      if (respuestaDBprofesional) respuestaDB = respuestaDBprofesional;
      const passwordCorrecto = await checkPassword(
        password,
        respuestaDB.password
      );
  
      //si el password es correcto manda usuario y token
      if (passwordCorrecto) {
        
        res.status(200).send({ usuario: respuestaDB });
      } else {
        //password incorrecto
        res.status(401).send({
          message: `El usuario ${email} no está autorizado a ingresar password erróneo.`,
        });
      }
    } catch (e) {
      next(e);
    }
  };