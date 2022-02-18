import Head from "next/head"
import React, { useEffect, useRef, useState } from "react"
import styles from './home.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { clearInterval } from "timers"
import { Page } from "./page"
import { PersonalProjectPage } from "./personalProjectPage"
import { WorkExperiencePage } from "./workExperiencePage"
import { Icon } from "./icon"

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

const Link = (props: LinkProps) => {
    let words = props.name.split(' ')
    let wordsElm: React.ReactNode[] = []
    let letterCount = 0
    let [wordLength, setWordLength] = useState(0)
    let firstLetterRef = useRef<HTMLSpanElement>(null)

    words.forEach((word: string, index) => {
        for (let i = 0; i < word.length; i++) {
            if (letterCount == 0) {
                wordsElm.push(<span key={letterCount} ref={ firstLetterRef }>{ word[i] }</span>)
            } else {
                wordsElm.push(<span key={letterCount}>{ word[i] }</span>)
            }
            letterCount += 1
        }

        if (index != words.length - 1) {
            wordsElm.push(<span key={letterCount}>&nbsp;</span>)
            letterCount += 1
        }
    })

    useEffect(() => {
        if (firstLetterRef.current) {
            if (props.isContracted) {
                setWordLength(firstLetterRef.current.getBoundingClientRect().width)
            } else {
                setWordLength(250)
            }
        }
    }, [props.isContracted, props.width, firstLetterRef])

    let [isContractedDone, setIsContractedDone] = useState(false)
    useEffect(() => {
        if (props.isContracted) {
            let timeout = setTimeout(() => {
                setIsContractedDone(true)
            }, 1000)
            return () => clearTimeout(timeout)
        } else {
            setIsContractedDone(false)
        }
    }, [props.isContracted])

    let linkClassName = isContractedDone? styles.contracted_link : styles.expanded_link
    let wordClassName = props.isContracted? props.isSelected ? styles.selected_word : styles.contracted_words : styles.words
    
    return <li style={{
        top: props.top,
        left: props.left,
        width: props.width + 'rem',
        height: props.height + 'rem',
        zIndex: props.zIndex,
        justifyContent: props.justifyContent,
    }}  className={linkClassName} onClick={props.onClick}>
        <div className={ wordClassName } style={{
        }}>
            <div style={{ 
                maxWidth: wordLength + 'px', 
                transition: 'max-width 1s',
                overflow: 'hidden',
                display: 'inline-block'
            }}>
                { wordsElm }
            </div>
        </div>
    </li>
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

    let contractedSize = 9
    let normalHeight = 5

    let [iconClass, setIconClass] = useState(styles.icon)
    let [iconZoom, setIconZoom] = useState(1)
    let [iconContainerSize, setIconContainerSize] = useState('100%')
    let [mainClass, setMainClass] = useState(styles.main_child_hidden)
    let persistentIconRef = useRef<HTMLDivElement>(null)
    let [iconTop, setIconTop] = useState(0)
    let [iconLeft, setIconLeft] = useState(0)
    let [displayPersistentIcon, setDisplayPersistentIcon] = useState(false)

    function onIconAnimationFinished() {
        setMainClass(styles.main_child)
        setIconContainerSize('12rem')
        setIconZoom(0.5)
        setIconTop(persistentIconRef.current!.getBoundingClientRect().top)
        setIconLeft(persistentIconRef.current!.getBoundingClientRect().left)
        setTimeout(() => {
            setDisplayPersistentIcon(true)
        }, 2000)
    }

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
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={ styles.home }>
            <div className={ iconClass } style={{
                width: iconContainerSize,
                height: iconContainerSize,
                top: `${iconTop}px`,
                left: `${iconLeft}px`,
                opacity: isShowChild? 0: 1,
            }}>
                <div style={{transform: `scale(${iconZoom}, ${iconZoom})`}}>
                    <Icon durationMs={2000} onAnimationFinished={onIconAnimationFinished}></Icon>
                </div>
            </div>
            <div  className={ mainClass }>
                <header className={ isShowChild? styles.contracted_header : styles.expanded_header } style={{
                    maxHeight: isShowChild ? `${contractedSize}rem` : '50rem',
                }}>
                    <div className={ styles.banner } style={{
                        marginLeft: '2rem',
                    }}>
                        <p className={ styles.hello }>Hi, I'm</p>
                        <h1 className={ styles.name }>Le Hoang Long</h1>
                        <p>I'm a Software Engineer from Vietnam who loves coding, especially C++, Flutter, and Typescript</p>
                    </div>

                    <button onClick={ homeIconClickHandler } className={ styles.home_icon } style={{ width: '5rem', height: `${contractedSize}rem` }}>
                        <div>
                            <FontAwesomeIcon icon={ faHome }></FontAwesomeIcon>
                        </div>
                    </button>
                </header>


                <nav className={ styles.nav }>
                    <ul className={ styles.navigation }>
                        <div style={{ minHeight: `${isShowChild ? contractedSize * 3 : contractedSize}rem`}}></div>
                        <Link justifyContent='left' zIndex={ 100 } isSelected={ selectedLinkIndex === 0 } height={ isShowChild? normalHeight: contractedSize  } isContracted={ isShowChild } top={`${linkTop * 0 + (isShowChild? 1 : 0)}rem`} onClick={() => linkClickHandler(0) } width={linkWidth} left={`${isShowChild? 1: linkWidth * 0 + 2}rem`} name="Work experience"></Link>
                        <Link justifyContent='center' zIndex={ 100 } isSelected={ selectedLinkIndex === 1 } height={ isShowChild? normalHeight: contractedSize  } isContracted={ isShowChild } top={`${linkTop * 1 + (isShowChild? 5: 0)}rem`} onClick={() => linkClickHandler(1) } width={linkWidth} left={`${isShowChild? 1: linkWidth * 1 + 2}rem`} name="Personal projects"></Link>
                        <Link justifyContent='right' zIndex={ 100 } isSelected={ selectedLinkIndex === 2 } height={ isShowChild? normalHeight: contractedSize  } isContracted={ isShowChild } top={`${linkTop * 2 + (isShowChild? 9: 0)}rem`} onClick={() => linkClickHandler(2) } width={linkWidth} left={`${isShowChild? 1: linkWidth * 2 + 2}rem`} name="Contact me"></Link>
                    </ul>
                </nav>

                <div className={ styles.page_container } style={{ zIndex: 0 }}>
                    <div style={{width: `${5 * 1.5}rem`}}></div>
                    <div className={ styles.page_canvas }>
                        <Page title="Work experience" show={ isShowChild && selectedLinkIndex === 0 }>
                            <WorkExperiencePage/>
                        </Page>
                        <Page title="Personal projects" show={ isShowChild && selectedLinkIndex === 1 }>
                            <PersonalProjectPage></PersonalProjectPage>
                        </Page>
                    </div>
                </div>

                <footer className={ styles.footer }>
                    <div className={ styles.persistent_icon } ref={ persistentIconRef }>
                        <div style={{zoom: 0.5, visibility: 'hidden'}}>
                            <Icon durationMs={0} onAnimationFinished={onIconAnimationFinished}></Icon>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    </React.Fragment>
}