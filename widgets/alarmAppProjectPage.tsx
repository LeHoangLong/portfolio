import styles from './projectPage.module.scss'
import { ProjectNavBar } from './projectNavBar'

export interface AlarmAppProjectProps {
    onBack: () => void
}

export const AlarmAppProject = (props: AlarmAppProjectProps) => {
    return (
        <div className={ styles.page }>
            <ProjectNavBar onBack={ props.onBack } prev='projects'></ProjectNavBar>
            
            <article>
                <header>
                    <h3>Alarm app</h3>
                </header>

                <div className={ styles.content }>
                    <aside>
                        <img className={ styles.image } src='/alarm_app.png' alt='Alarm app'></img>
                    </aside>

                    <div className={ styles.main_content }>
                        <p className={ styles.description }>
                            An alarm app that I made for fun. Being a heavy sleeper myself, I often
                            find myself needing to use an alarm app with challenging math question 
                            to help me wake up. Then I ask myself what if solving some purposeless
                            math questions, I solve an English question, thereby improving my English
                            in the process. And thus, I came up with this app. Some features and technologies
                            used are:
                        </p>
                        <ul className={ styles.features }>
                            <li>
                                <p>
                                    60FPS alarm app for Vietnamese made in Flutter
                                </p>
                            </li>
                            <li>
                                <p>
                                    English challenge for heavy sleepers
                                </p>
                            </li>
                            <li>
                                <p>
                                    Selectable custom ringtone
                                </p>
                            </li>
                            <li>
                                <p>
                                    Firebase backend for question and feedback database and Crashlytics for crash reporting
                                </p>
                            </li>
                            <li>
                                <p>
                                    Android integration testing
                                </p>
                            </li>
                            <li>
                                <p>
                                    Admin app for creating questions
                                </p>
                            </li>
                            <li>
                                <p>
                                    Available for download at <a target='_blank' href='https://play.google.com/store/apps/details?id=com.learn_english_alarm'>https://play.google.com/store/apps/details?id=com.learn_english_alarm</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Main app github <a target='_blank' href='https://github.com/LeHoangLong/alarm-app'>https://github.com/LeHoangLong/alarm-app</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Admin app github <a target='_blank' href='https://github.com/LeHoangLong/alarm_app_admin'>https://github.com/LeHoangLong/alarm_app_admin</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    )
}