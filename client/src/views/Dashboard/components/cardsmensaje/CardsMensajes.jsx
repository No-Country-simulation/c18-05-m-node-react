import CardMensaje from "../cardmensaje/CardMensaje";
import style from'./CardsMensajes.module.css';

const CardsMensajes = () => {

  const dataFalsa = [
    {
      "message": "mensajeAlgo",
      "date": "24/05/2024",
      "teacherName": "profes",
      "course": "2"
    },
    {
      "message": "mensajeAlgo2",
      "date": "24/05/2025",
      "teacherName": "profe2",
      "course": "4"
    },
    {
      "message": "mensajeAlgo3",
      "date": "24/05/2025",
      "teacherName": "profe3",
      "course": "4"
    }
  ];

  console.log(dataFalsa);
  return (
    <div className={style.cardsContainer}>
        {dataFalsa.map((datfal) => (
            <CardMensaje
                key={datfal.id}
                message={datfal.message}
                date={datfal.date}
                teacherName={datfal.teacherName}
                course={datfal.course}
                img={datfal.img}
            />
        ))}
    </div>
  )
}

export default CardsMensajes;