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
                                <h4>Shopee</h4>
                            </div>
                            <h6 className={ styles.job_period }>Aug 2022 - Oct 2022</h6>
                        </header>

                        <ul>
                            <li>Implement feature for new project</li>
                            <li>Implement API for integration of new component into existing framework</li>
                        </ul>
                    </article>
                </AppearOnScroll>

                <AppearOnScroll>
                    <article className={ styles.job }>
                        <header>
                            <div className={ styles.job_title_and_company }>
                                <h4 className={ styles.job_title }>Software Engineer</h4>
                                <h4>Moovita</h4>
                            </div>
                            <h6 className={ styles.job_period }>May 2021 - Aug 2022</h6>
                        </header>

                        <ul>
                            <li>Develop C++ multithreaded pipeline to fuse lidar and camera and track objects</li>
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
                            <li>Develop sensor and motor driver using I2C, UART, GPIO, ADC,  DMA and timer on FreeRTOS on STM32 platform for mobile robot in C</li>
                            <li>Wrote GUI test tool with PyQT to download firmware and perform hardware testing</li>
                            <li>Develop ROS module to control mobile robot in C++.</li>
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
                                <li>First class&apos;s honours</li>
                                <li>CAP: 4.63 / 5.00</li>
                            </ul>
                        </article>
                    </AppearOnScroll>
                    
                </section>
            </AppearOnScroll>
        </React.Fragment>
    )
}