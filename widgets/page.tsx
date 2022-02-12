import React, { ReactElement } from 'react';
import styles from './page.module.scss';

export interface PageProps {
    title: string
    show: boolean
    children: ReactElement | ReactElement[]
}

export const Page = (props: PageProps) => {
    let sectionClassName = props.show ? styles.section_shown : styles.section_hidden
    return (
        <section className={ sectionClassName }>
            { props.children }
        </section>
    )
}