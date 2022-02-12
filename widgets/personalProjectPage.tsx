import { faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useRef, useState } from "react"
import styles from './personalProjectPage.module.scss'
import Image from 'next/image'
import { AlarmAppProject } from "./alarmAppProjectPage"

export const PersonalProjectPage = () => {
    let [showAlarmPage, setShowAlarmPage] = useState(false)
    let [alarmPageShown, setAlarmPageShown] = useState(false)
    let alarmAppRef = useRef<HTMLDivElement>(null)

    function onLinkClick() {
        setShowAlarmPage(true)
        setTimeout(() => {
            console.log(alarmAppRef.current?.getBoundingClientRect().x)
            alarmAppRef.current?.scrollIntoView()
        }, 100)
    }

    useEffect(() => {
        if (showAlarmPage) {
            setAlarmPageShown(true)
        } else {
            let timeout = setTimeout(() => {
                setAlarmPageShown(false)
            }, 500)

            return () => clearTimeout(timeout)
        }
    }, [showAlarmPage])

    return (
        <React.Fragment>
            <div className={ styles.sections }>
                <section id='projects' className={ styles.projects }>
                    <header>
                        <h1 className={ styles.title }>
                            Personal projects
                        </h1>
                    </header>
                    <button className={ styles.project_button } onClick={ onLinkClick }>
                        <article className={ styles.project }>
                            <div className={ styles.project_description }>
                                <header>
                                    <h4>
                                        Alarm app
                                    </h4>
                                </header>

                                <p className={ styles.description }>Alarm app with english vocabulary challenge for Vietnamese</p>
                                <p className={ styles.technology }>Technology: flutter, Android, Firebase</p>
                            </div>

                            <aside className={ styles.icon }>
                                <FontAwesomeIcon  icon={ faClock } />
                            </aside>
                        </article>
                    </button>

                    <a href="#ecommerce">
                        <article className={ styles.project_reverse }>
                            <aside>
                                <img className={ styles.image } src="/webstore.png" alt="Ecommerce front page"></img>
                            </aside>
                            <div className={ styles.project_description }>
                                <header>
                                    <h4>
                                        Ecommerce website
                                    </h4>
                                </header>
                                <p className={ styles.description }>Ecommerce website for home business</p>
                                <p className={ styles.technology }>Technology: NodeJS, React, Typescript</p>
                            </div>
                        </article>
                    </a>
                </section>
                <section ref={ alarmAppRef } className={ styles.alarm_app } id="alarm-app" style={{ 
                    maxHeight: alarmPageShown? '500rem': '0rem',
                }}>
                    <AlarmAppProject onBack={() => setShowAlarmPage(false)}></AlarmAppProject>
                </section>
            </div>
        </React.Fragment>
    )
}