import { faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useRef, useState } from "react"
import styles from './personalProjectPage.module.scss'
import Image from 'next/image'
import { AlarmAppProject } from "./alarmAppProjectPage"
import { EcommerceProjectPage } from "./ecommerceProjectPage"
import { AppearOnScroll } from "./appearOnScroll"
import { DashboardProjectPage } from "./dashboardProjectPage"

export const PersonalProjectPage = () => {
    let [projectsPageShown, setProjectsPageShown] = useState(true)

    /// need to delay the effect of scrolling because 
    /// if do instantly, the scroll doesn't work properly
    let [showAlarmPage, setShowAlarmPage] = useState(false)
    let [alarmPageShown, setAlarmPageShown] = useState(false)
    let alarmAppRef = useRef<HTMLDivElement>(null)

    let [showEcommercePage, setShowEcommercePage] = useState(false)
    let [ecommercePageShown, setEcommercePageShown] = useState(false)
    let ecommercePageRef = useRef<HTMLDivElement>(null)

    let [showDashboardPage, setShowDashboardPage] = useState(false)
    let [dashboardPageShown, setDashboardPageShown] = useState(false)
    let dashboardPageRef = useRef<HTMLDivElement>(null)

    function onLinkClick(setter: (arg:boolean) => void, ref: React.RefObject<HTMLDivElement>) {
        setter(true)
        setTimeout(() => {
            ref.current?.scrollIntoView()
        }, 100)
    }

    function generateUseEffect(show: boolean, shownSetter: (arg: boolean) => void) {
        useEffect(() => {
            if (show) {
                shownSetter(true)
                let timeout = setTimeout(() => {
                    setProjectsPageShown(false)
                }, 1000)
                return () => {
                    clearTimeout(timeout)
                }
            } else {
                setProjectsPageShown(true)
                let timeout = setTimeout(() => {
                    shownSetter(false)
                }, 500)

                return () => clearTimeout(timeout)
            }
        }, [show])
    }

    generateUseEffect(showAlarmPage, setAlarmPageShown)
    generateUseEffect(showEcommercePage, setEcommercePageShown)
    generateUseEffect(showDashboardPage, setDashboardPageShown)


    return (
        <React.Fragment>
            <div className={ styles.sections }>
                <section id='projects' className={ styles.projects } style={{
                    maxHeight: projectsPageShown? '5000rem' : '0rem',
                    overflowY: projectsPageShown? 'auto' : 'hidden',
                }}>
                    <header>
                        <h1 className={ styles.title }>
                            Personal projects
                        </h1>
                    </header>
                    <button className={ styles.project_button } onClick={ () =>  onLinkClick(setShowAlarmPage, alarmAppRef) }>
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

                    <button className={ styles.project_button } onClick={ () =>  onLinkClick(setShowEcommercePage, ecommercePageRef) }>
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
                    </button>

                    <AppearOnScroll>
                        <button className={ styles.project_button } onClick={ () =>  onLinkClick(setShowDashboardPage, dashboardPageRef) }>
                            <article className={ styles.project }>
                                <div className={ styles.project_description }>
                                    <header>
                                        <h4>
                                            Responsive dashboard
                                        </h4>
                                    </header>
                                    <p className={ styles.description }>Some responsive dashboard I made for fun</p>
                                    <p className={ styles.technology }>Technology: Flutter web</p>
                                </div>
                                <aside>
                                    <img className={ styles.image } src="/dashboard.png" alt="Dashboard front page"></img>
                                </aside>
                            </article>
                        </button>
                    </AppearOnScroll>
                </section>
                <section ref={ alarmAppRef } className={ styles.project_page } id="alarm-app" style={{ 
                    display: alarmPageShown? 'block': 'none',
                }}>
                    <AlarmAppProject onBack={() => setShowAlarmPage(false)}></AlarmAppProject>
                </section>

                <section ref={ ecommercePageRef } className={ styles.project_page } id="ecommerce" style={{ 
                    display: ecommercePageShown? 'block': 'none',
                }}>
                    <EcommerceProjectPage onBack={() => setShowEcommercePage(false)}></EcommerceProjectPage>
                </section>

                <section ref={ dashboardPageRef } className={ styles.project_page } id="dashboard" style={{ 
                    display: dashboardPageShown? 'block': 'none',
                }}>
                    <DashboardProjectPage onBack={() => setShowDashboardPage(false)}></DashboardProjectPage>
                </section>
            </div>
        </React.Fragment>
    )
}