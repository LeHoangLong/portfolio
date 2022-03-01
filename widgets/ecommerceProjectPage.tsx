import styles from './projectPage.module.scss'
import { ProjectNavBar } from './projectNavBar'

export interface EcommerceProjectPageProp {
    onBack: () => void
}

export const EcommerceProjectPage = (props: EcommerceProjectPageProp) => {
    return (
        <div className={ styles.page }>
            <ProjectNavBar onBack={ props.onBack } prev='projects'></ProjectNavBar>
            <article>
                <header>
                    <h3>Ecommerce web page</h3>
                </header>

                <div className={ styles.content }>
                    <aside className={ styles.images }>
                        <img className={ styles.image } src='/webstore.png' alt='Ecommerce front page'></img>
                        <img className={ styles.image } src='/ecommerce-product.png' alt='Product page'></img>
                    </aside>

                    <div className={ styles.main_content }>
                        <p className={ styles.description }>
                            My mom is a small business owner. I wanted to help her improve
                            her sales as well as make a portfolio project. And thus this project
                            is commenced. However, being a rather low-tech person, she is currently unable to
                            make use of it &#128542;. I will support her on using this webpage once I&apos;m back
                            to my home. Some features and technologies include:
                        </p>

                        <ul className={ styles.features }>
                            <li>
                                <p>
                                    Ecommerce webpage made with NextJS for front end, NodeJS 
                                    for backend, Postgresql for database and Google file storage
                                    for image storage
                                </p>
                            </li>

                            <li>
                                <p>
                                    Product listing and product searching by name
                                </p>
                            </li>

                            <li>
                                <p>
                                    Send email to notify of customers&apos; request
                                </p>
                            </li>

                            <li>
                                <p>
                                    Github action and Docker for continuous delivery
                                </p>
                            </li>

                            <li>
                                <p>
                                    Demo Website located at <a rel="noopener noreferrer" target='_blank' href='https://ecommerce-demo.lehoanglong.net'>https://ecommerce-demo.lehoanglong.net/</a>
                                </p>
                            </li>

                            <li>
                                <p>
                                    Data modeling available at <a rel="noopener noreferrer" target='_blank' href='https://dbdiagram.io/d/60918ee5b29a09603d135ccd'>https://dbdiagram.io/d/60918ee5b29a09603d135ccd</a>
                                </p>
                            </li>

                            <li>
                                <p>
                                    Backend github available at <a rel="noopener noreferrer" target='_blank' href='https://github.com/LeHoangLong/kim_thi_backend'>https://github.com/LeHoangLong/kim_thi_backend</a>
                                </p>
                            </li>

                            <li>
                                <p>
                                    User frontend github available at <a rel="noopener noreferrer" target='_blank' href='https://github.com/LeHoangLong/kim_thi_frontend_user'>https://github.com/LeHoangLong/kim_thi_frontend_user</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

            </article>

            <article>
                <header>
                    <h3>Admin page</h3>
                </header>

                <div className={ styles.content }>
                    <aside className={ styles.images }>
                        <img className={ styles.image } src='/admin-page.png' alt='Admin page'></img>
                    </aside>

                    <div className={ styles.main_content }>
                        <p className={ styles.description }>
                            A CMS for product creation / updating, made with ReactJS
                        </p>

                        <ul className={ styles.features }>
                            <li>
                                <p>
                                    Github available at <a target='_blank' rel="noopener noreferrer" href='https://github.com/LeHoangLong/kim_thi_frontend_admin'>https://github.com/LeHoangLong/kim_thi_frontend_admin</a>
                                </p>
                            </li>

                            <li>
                                <p>
                                    Demo Website located at <a rel="noopener noreferrer" target='_blank' href='https://ecommerce-demo.lehoanglong.net/admin'>https://ecommerce-demo.lehoanglong.net/admin</a><br/>
                                    - Username: &nbsp;&nbsp;&nbsp;user123456<br/>
                                    - Password: &nbsp;&nbsp;&nbsp;password123456
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

            </article>
        </div>
    )
}