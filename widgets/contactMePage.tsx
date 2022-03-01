import React, { useState } from "react"
import container from "../container"
import { ContactServiceI } from "../services/contactServiceI"
import { Symbols } from "../symbols"
import styles from './contactMePage.module.scss'

export const ContactMePage = () => {
    let [errorMessage, setErrorMessage] = useState('')
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [message, setMessage] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    let [thankyouMessageClass, setThankyouMessageClass] = useState(styles.thank_message_hide)

    function verifyName(name: string) {
        let pattern = /^[\w\s]+$/
        return name.match(pattern) !== null
    }
    
    function verifyEmail(email: string) {
        let pattern = /^.+@(\w+\.)+\w+$/
        return email.match(pattern) !== null
    }
    
    async function sendContact(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        let service = container.get<ContactServiceI>(Symbols.CONTACT_SERVICE)

        if (name.length == 0) {
            setErrorMessage('Please leave your name')
            return
        } else if (!verifyName(name)) {
            setErrorMessage('Invalid name')
            return
        }

        if (email.length == 0) {
            setErrorMessage('Please leave your email')
            return
        } else if (!verifyEmail(email)) {
            setErrorMessage('Invalid email')
            return
        }

        try {
            setIsLoading(true)
            /// wait 2s to showcase our fancy loading text :P
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true)
                }, 2000)
            })
            await service.sendContact({
                name: name,
                email: email,
                message: message,
            })
            setErrorMessage('')
            setThankyouMessageClass(styles.thank_message)
            setTimeout(() => {
                setThankyouMessageClass(styles.thank_message_hide)
            }, 2000)
        } catch (exception) {
            setErrorMessage('Sorry, something went wrong')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <React.Fragment>
            <section className={ styles.section }>
                <header>
                    <h1 className={ styles.title }>
                        Contact me
                    </h1>
                </header>

                <article className={ styles.contact_me_form_container } style={{ visibility: isLoading? 'hidden' : 'visible' }}>
                    <header>
                        <h6 className={ styles.form_title }>
                            If you are interested, please leave me a message here
                        </h6>
                    </header>
                    <form className={ styles.contact_me_form } onSubmit={ sendContact } >
                        <div className={ styles.form_row }>
                            <label htmlFor="name" className="required_input">
                                Name
                            </label>
                            <input value={name} onChange={e => setName(e.target.value)} id="name"></input>
                        </div>

                        <div className={ styles.form_row }>
                            <label htmlFor="email" className="required_input">
                                Email
                            </label>
                            <input value={email} onChange={e => setEmail(e.target.value)} id="email"></input>
                        </div>

                        <div className={ styles.form_row }>
                            <label htmlFor="message">
                                Message
                            </label>
                            <textarea value={message} onChange={e => setMessage(e.target.value)} rows={5} id="message"></textarea>
                        </div>

                        <p className={ styles.error_message } style={{
                            maxHeight: errorMessage === ''? '0rem' : '15rem'
                        }}>
                            { errorMessage }
                        </p>

                        <button className={ styles.submit_button }>
                            Send
                        </button>
                    </form>

                    <div className={ styles.loading_container } style={{ visibility: isLoading? 'visible' : 'hidden' }}>
                        <div className={ styles.loading }>
                        </div>
                        <p className={ styles.sending_text }>
                            <span>Sending</span>
                            <span className={ styles.dot_1 }>.</span>
                            <span className={ styles.dot_2 }>.</span>
                            <span className={ styles.dot_3 }>.</span>
                        </p>
                    </div>

                    <div className={ thankyouMessageClass }>
                        <p>
                            Thank you for leaving your contact.
                        </p>
                        <p>
                            I will respond to you as soon as possible.
                        </p>
                    </div>
                </article>
            </section>
        </React.Fragment>
    )
}