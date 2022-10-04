import Head from "next/head"
import React, { useCallback, useEffect, useRef, useState } from "react"
import styles from './home.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { clearInterval } from "timers"
import { Page } from "./page"
import { PersonalProjectPage } from "./personalProjectPage"
import { WorkExperiencePage } from "./workExperiencePage"
import { Icon } from "./icon"
import { ContactMePage } from "./contactMePage"
import { FadeIn } from "./fadeIn"
import { Hero, TransitionProvider } from "react-hero-transition"

interface LinkProps {
    name: string
    left: string
    width: number
    height: number
    top: string
    onClick: () => void
    isContracted: boolean
    isSelected: boolean
    zIndex: number
    justifyContent: string
}

interface LinkHeroProps {
    child1: React.ReactNode
    child2: React.ReactNode
    child1Or2: boolean
}

enum LinkHeroState {
    showChild1,
    showChild2,
    heroAnimation
}

export const Home = () => {
    let [expandedLinkWidth, setExapandedLinkWidth] = useState(0)
    let [isShowChild, setIsShowChild] = useState(false)
    let [linkWidth, setLinkWidth] = useState(0)
    let [linkTop, setLinkTop] = useState(0)
    let [selectedLinkIndex, setSelectedLinkIndex] = useState(0)

    useEffect(() => {
        if (window !== undefined) {
            setExapandedLinkWidth(window.innerWidth / 30 - 2);
            let handler = () => {
                setExapandedLinkWidth(window.innerWidth / 30 - 2);
            }
            window.addEventListener('resize', handler)

            return () => window.removeEventListener('resize', handler)
        }
    }, [])

    useEffect(() => {
        if (isShowChild) {
            setLinkWidth(5)
            setLinkTop(4)
        } else {
            setLinkWidth(expandedLinkWidth)
            setLinkTop(0)
        }
    }, [expandedLinkWidth, isShowChild])

    function linkClickHandler(index: number) {
        setIsShowChild(true)
        setSelectedLinkIndex(index)
    }

    function homeIconClickHandler() {
        setIsShowChild(false)
    }

    let [displayPersistentIcon, setDisplayPersistentIcon] = useState(false)
    let [iconZoom, setIconZoom] = useState(1)
    let [iconContainerSize, setIconContainerSize] = useState('100%')
    let persistentIconRef = useRef<HTMLDivElement>(null)
    let [iconTop, setIconTop] = useState(0)
    let [iconLeft, setIconLeft] = useState(0)
    let [displayFrontPage, setDisplayFrontPage] = useState(false)

    let onIconAnimationFinished = useCallback(() => {
        setIconContainerSize('12rem')
        setIconZoom(0.5)
        setIconTop(persistentIconRef.current!.getBoundingClientRect().top)
        setIconLeft(persistentIconRef.current!.getBoundingClientRect().left)
        setDisplayFrontPage(true)
        setTimeout(() => {
            setDisplayPersistentIcon(true)
        }, 3000)
    }, [])

    return <React.Fragment>
        <Head>
            <title>Le Hoang Long</title>
            <meta name="description" content="Le Hoang Long's portfolio" />
            <link
                rel="preload"
                href="/fonts/Roboto/Roboto-Black.ttf"
                as="font"
                crossOrigin=""
            />
            <link rel="icon" href="/logo.png" />
        </Head>
        <main className={ styles.home }>
            <TransitionProvider>
                <div className={ styles.icon } style={{
                    width: iconContainerSize,
                    height: iconContainerSize,
                    top: `${iconTop}px`,
                    left: `${iconLeft}px`,
                    opacity: isShowChild? 0: 1,
                    visibility: displayPersistentIcon? 'hidden' : 'visible',
                }}>
                    <div style={{transform: `scale(${iconZoom})`}}>
                        <Icon durationMs={2000} onAnimationFinished={onIconAnimationFinished}></Icon>
                    </div>
                </div>

                <FadeIn show={ !isShowChild }>
                    <section className={ styles.front_page } style={{ opacity: displayFrontPage? 1 : 0 }}>
                        <header className={ styles.header }>
                            <div className={ styles.banner }>
                                <p className={ styles.hello }>Hi, I&apos;m</p>
                                <h1 className={ styles.name }>Le Hoang Long</h1>
                                <p>I&apos;m a Software Engineer from Vietnam who loves coding, especially C++, Golang, Flutter, and Typescript</p>
                            </div>
                        </header>

                        <nav className={ styles.nav_2 }>
                            <ul className={ styles.navigation_2 }>
                                <li>
                                    {(() => {
                                        if (!isShowChild) {
                                            return <Hero id='0'><button onClick={() => linkClickHandler(0)}>Work experience</button></Hero>
                                        } else {
                                            return <button style={{ visibility: 'hidden' }} onClick={() => linkClickHandler(0)}>Work experience</button>
                                        }
                                    })()}
                                </li>

                                <li>
                                    {!isShowChild && <Hero id='1'><button onClick={() => linkClickHandler(1)}>Personal projects</button></Hero>}
                                </li>

                                <li>
                                    {!isShowChild && <Hero id='2'><button onClick={() => linkClickHandler(2)}>Contact me</button></Hero>}
                                </li>
                            </ul>
                        </nav>

                        <footer className={ styles.footer }>
                            <div className={ styles.persistent_icon } ref={ persistentIconRef } style={{
                                visibility: displayPersistentIcon? 'visible' : 'hidden',
                                transform: "scale(0.5)",
                            }}>
                                <Icon durationMs={0} onAnimationFinished={onIconAnimationFinished}></Icon>
                            </div>

                            <div className={ styles.contact_icons }>
                                <div className={ styles.contact_icon }>
                                    <a rel="noopener noreferrer" target='_blank' href='https://github.com/LeHoangLong?tab=repositories'>
                                        <img alt="Github icon" className={ styles.svg } src='/github.svg' />
                                    </a>
                                </div>

                                <div className={ styles.contact_icon }>
                                    <a rel="noopener noreferrer" target='_blank' href='https://linkedin.com/in/hoang-long-le-3a6255a3'>
                                        <img alt="LinkedIn icon" className={ styles.svg } src='/linkedin.svg' />
                                    </a>
                                </div>
                            </div>
                        </footer>
                    </section>
                </FadeIn>

                    
                <FadeIn show={ isShowChild }>
                    <div className={ styles.page_container } style={{ zIndex: 0 }}>
                        <div className={ styles.side_bar }>
                            <button onClick={ homeIconClickHandler } className={ styles.home_icon }>
                                <div>
                                    <FontAwesomeIcon icon={ faHome }></FontAwesomeIcon>
                                </div>
                            </button>

                            {(() => {
                                if (isShowChild) {
                                    return <Hero id='0'>
                                        <button className={ selectedLinkIndex === 0? styles.selected_page_initial : styles.page_initial } onClick={() => linkClickHandler(0)}>W</button>
                                    </Hero>
                                } else {
                                    return <button style={{ visibility: 'hidden' }} className={ selectedLinkIndex === 0? styles.selected_page_initial : styles.page_initial } onClick={() => linkClickHandler(0)}>W</button>
                                }
                            })()}
                            {isShowChild && <Hero id='1'><button className={ selectedLinkIndex === 1? styles.selected_page_initial : styles.page_initial } onClick={() => linkClickHandler(1)}>P</button></Hero>}
                            {isShowChild && <Hero id='2'><button className={ selectedLinkIndex === 2? styles.selected_page_initial : styles.page_initial } onClick={() => linkClickHandler(2)}>C</button></Hero>}
                        </div>
                        <div className={ styles.page_canvas }>
                            <Page title="Work experience" show={ isShowChild && selectedLinkIndex === 0 }>
                                <WorkExperiencePage/>
                            </Page>
                            <Page title="Personal projects" show={ isShowChild && selectedLinkIndex === 1 }>
                                <PersonalProjectPage></PersonalProjectPage>
                            </Page>
                            <Page title="Contact me" show={ isShowChild && selectedLinkIndex === 2 }>
                                <ContactMePage></ContactMePage>
                            </Page>
                        </div>
                    </div>
                </FadeIn>
            </TransitionProvider>
        </main>
    </React.Fragment>
}