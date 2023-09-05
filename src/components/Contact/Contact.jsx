import "./Contact.scss";
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

import {
    faPython,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Contact(props) {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
            'service_3p167bj',
            'template_4a0l0nx',
            form.current,
            'NYIsoDXQTIRe-fPHJ'
            )
            .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
            )
    }
    return (
        <div className='page'>
                <div className="contactGrid">
                    <div className='contactFlex'>
                        <h1 className="title2">Contact Me</h1>
                        <p className="pText">I am interested in full-stack internships and co-ops. However, if you have a request or further questions do not hesitate to contact me.</p>
                        <div className="contact-form">
                            <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                <input placeholder="Name" type="text" name="from_name" required />
                                </li>
                                <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                                </li>
                                <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                                </li>
                                <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                                </li>
                                <li>
                                <input type="hidden" name="to_name" value="Chris" />
                                <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                            </form>
                        </div>
                    </div>
                    <div className="stage-cube-cont">
                        <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPython} color="#0753F7" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                        </div>
                    </div>
                </div>
        </div>

    )
}