import styles from './projectPage.module.scss'
import { ProjectNavBar } from './projectNavBar'

export interface DashboardProjectPageProp {
    onBack: () => void
}

export const DashboardProjectPage = (props: DashboardProjectPageProp) => {
    return (
        <div className={ styles.page }>
            <ProjectNavBar onBack={ props.onBack } prev='projects'></ProjectNavBar>
            <article>
                <header>
                    <h3>Dashboard web page</h3>
                </header>

                <div className={ styles.content }>
                    <aside className={ styles.images }>
                        <img className={ styles.image } src='/dashboard.png' alt='Dashboard front page'></img>
                    </aside>

                    <div className={ styles.main_content }>
                        <p className={ styles.description }>
                            A dashboard I made for fun following a design I found on dribbble. 
                            This was to test implementing responsive design on Flutter as well as trying out
                            Flutter web.
                            Unfortunately, there was some part of the design I did not understand so I could not implement
                            it fully.
                        </p>
                        <ul className={ styles.features }>
                            <li>
                                <p>
                                    Demo page <a target='_blank' href='https://dashboard.lehoanglong.net'>https://dashboard.lehoanglong.net</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Github page <a target='_blank' href='https://github.com/LeHoangLong/dashboard_fun'>https://github.com/LeHoangLong/dashboard_fun</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Credit to AR Shakir for their design <a target='_blank' href='https://dribbble.com/shots/16959094-learning-platform-dashboard-ui-concept'>https://dribbble.com/shots/16959094-learning-platform-dashboard-ui-concept</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

            </article>
        </div>
    )
}