import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'
import Loader from 'react-loaders'
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
          'service_1l8njvh',
          'template_8gsc9mr',
          formRef.current,
          'SyWV0VdCCCADX-ErX'
        )
        .then((res) => {
            console.log(res.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

  return (
    <>
      <div className="container contact-page div">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={formRef} onSubmit={sendEmail}>
              <ul>
                <li className="tag-li">
                  <input placeholder="Name" type="text" name="name" required />
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
                  <input
                    type="submit"
                    className="contact-button"
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227159.681145667!2d77.8399241900679!3d27.176104915971635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1671100329875!5m2!1sen!2sin"
        ></iframe>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact;