
import style from './style.module.css'


const Index = () => {

    const infoUser = {
        name: 'Ernesto',
        lastName: 'Pereira',
        email: 'aFtXa@example.com',
        phone: '123456789',
        address: 'Calle falsa 123',
        hijos: [
            {
                name: 'Hijo 1',
                lastName: 'Perez',
                email: 'aFtXa@example.com',
                phone: '123456789',
            },

        ]
    }


    const imagen = `https://pbs.twimg.com/media/E7aEcECWEAsWRwW?format=jpg&name=small`


    return (
        <>
            <div className={style.bgContainer}>
                <article className={style.articleRole}>
                    <div className={style.containerPicture}>
                        <img className={style.imgRole} src={imagen} alt="" />
                    </div>
                    <section className={style.infoUser}>
                        <div className={style.ContainerUserInfo}>
                            <div className={style.nameLastName}>
                                <p>{infoUser.name}</p>
                                <p>{infoUser.lastName}</p>
                            </div>
                            <div className={style.redireccionHijo}>
                                <p>{infoUser.hijos.map((hijo) => (hijo.name))}</p>
                                <p>{infoUser.hijos.map((hijo) => (hijo.email))}</p>
                                <button >
                                    Perfil del hijo
                                </button>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </>
    )
}
export default Index