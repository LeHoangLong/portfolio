import styles from './fadeIn.module.scss';

export interface FadeInProps {
    show: boolean
    children: React.ReactNode | React.ReactNode[]
}

export const FadeIn = (props: FadeInProps) => {
    return (
        <div className={ props.show? styles.show : styles.hide }>
            { props.children }
        </div>
    )
}