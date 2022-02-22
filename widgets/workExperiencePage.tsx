import React from 'react';
import { AppearOnScroll } from './appearOnScroll';
import styles from './workExperiencePage.module.scss';

export const WorkExperiencePage = () => {
    return (
        <React.Fragment>
            <section>
                <header>
                    <h1 className={ styles.title }>
                        Work experience
                    </h1>
                </header>

                <AppearOnScroll>
                    <article className={ styles.job }>
                        <header>
                            <div className={ styles.job_title_and_company }>
                                <h4 className={ styles.job_title }>Software Engineer</h4>
                                <h4>Moovita</h4>
                            </div>
                            <h6 className={ styles.job_period }>May 2021 - Now</h6>
                        </header>

                        <ul>
                            <li>Develop multithreaded pipeline to fuse lidar and camera and track objects</li>
                            <li>Develop pub/sub library for interprocess communication using TCP / shared memory and protobuf</li>
                            <li>Explore deployment of machine learning model on new hardware platform</li>
                        </ul>
                    </article>
                </AppearOnScroll>

                <AppearOnScroll>
                    <article className={ styles.job }>
                        <header>
                            <div className={ styles.job_title_and_company }>
                                <h4 className={ styles.job_title }>Embedded Software Engineer</h4>
                                <h4>GT Robots</h4>
                            </div>
                            <h6 className={ styles.job_period }>Jul 2018 - May 2021</h6>
                        </header>

                        <ul>
                            <li>Develop drivers on STM32 microcontroller for mobile robot</li>
                            <li>Wrote GUI test tool with PyQT to download firmware and perform hardware testing</li>
                            <li>Develop ROS modules to control the robot</li>
                            <li>Maintain and fix bug on existing ROS modules</li>
                        </ul>
                    </article>
                </AppearOnScroll>
            </section>


            <AppearOnScroll>
                <section>
                    <header>
                        <h1 className={ styles.title }>
                            Education
                        </h1>
                    </header>

                    <AppearOnScroll>
                        <article className={ styles.job }>
                            <header>
                                <div className={ styles.job_title_and_company }>
                                    <h5 className={ styles.job_title }>Bachelor of Engineering</h5>
                                    <h5>National University of Singapore</h5>
                                </div>
                                <h6 className={ styles.job_period }>Jun 2014 - Jun 2018</h6>
                            </header>

                            <ul>
                                <li>First class's honours</li>
                                <li>CAP: 4.63 / 5.00</li>
                            </ul>
                        </article>
                    </AppearOnScroll>
                    
                </section>
            </AppearOnScroll>
        </React.Fragment>
    )
}