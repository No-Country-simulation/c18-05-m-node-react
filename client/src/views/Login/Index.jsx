import React from 'react'
import style from './style.module.css'

export const Login = () => {
    return (
        <>
            <main className={style['background-login']}>

                <div className={style["flex-login"]}>
                    <section>
                        <form action="" className={style["form"]}>

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                            <input type="password" name="email" id="email" />

                        </form>
                    </section>
                    <section>
                        Imagen
                    </section>
                </div>
            </main>
        </>
    )
}
