import { Admin, Students,  } from "../models/index.js";


//*********************************DAR DE BAJA O DE ALTA**************************** */

export const debajaOdealta = async (req, res, next) => {
    try {
      let bajaOalta = null;
      const { email } = req.params;
      const { select } = req.body;
  
      //chequeamos el SELECT y damos de baja el usuario
  
      if (select === "student") {
        var resDB = await Students.findByPk(email);
      } 
    //   else if (select === "parents") {
    //     var resDB = await Parents.findByPk(email);
    //   }
    //   else if (select === "teacher") {
    //     var resDB = await Teacher.findOne({ where: { email: email } });
    //   } 
      else if (select === "administrador") {
        var resDB = await Admin.findByPk(email);
      } else {
        return res.status(404).send({
          message: `el select debe ser 'usuario', 'profesional' o 'administrador' el valor fue ${select}`,
        });
      }
  
      if (!resDB) {
        return res.status(404).send({
          message: `Usted esta buscando a un ${select} que no se encuentra con ese email.`,
        });
      } else {
        resDB.active === true
          ? (bajaOalta = "eliminado")
          : (bajaOalta = "recuperado");
        await resDB?.update({ active: !resDB.active });
        res
          .status(200)
          .send({ message: `El ${select} fue ${bajaOalta} con éxito.` });
      }
    } catch (e) {
      next(e);
    }
  };