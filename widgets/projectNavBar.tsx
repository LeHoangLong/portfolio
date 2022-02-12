import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './projectNavBar.module.scss'

export interface ProjectNavBarProps {
    prev?: string
    next?: string
    onBack?: () => void
}

export const ProjectNavBar = (props: ProjectNavBarProps) => {
    return <nav className={ styles.nav }>
        {
            (() => {
                if (props.prev) {
                    return <a onClick={ props.onBack } href={ '#' + props.prev } className={ styles.button_container }>
                        <div className={ styles.button }>
                            <FontAwesomeIcon width='1.6rem' height='1.6rem' icon={ faChevronLeft }></FontAwesomeIcon>
                        </div>
                        <span>{ props.prev }</span>
                    </a>
                }
            })()
        }

        {
            (() => {
                if (props.next) {
                    return <a href={ '#' + props.next } className={ styles.button }>
                        <span>{ props.prev }</span>
                        <FontAwesomeIcon width='1.6rem' height='1.6rem' icon={ faChevronRight }></FontAwesomeIcon>
                    </a>
                }
            })()
        }
    </nav>
}