import React from "react"
import styles from './personalProjectPage.module.scss'

export const PersonalProjectPage = () => {
    return (
        <React.Fragment>
            <article className={ styles.project }>
                <div>
                    <header>
                        Alarm app in flutter
                    </header>
                </div>
            </article>

            <article className={ styles.project }>
                <div>
                    <header>
                        Ecommerce website
                    </header>
                </div>
            </article>
        </React.Fragment>
    )
}