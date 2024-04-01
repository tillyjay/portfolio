import * as React from "react"
import ContactForm from '../components/ContactForm';
import '../styles/pagesStyles/contactFormPage.scss'


const ContactPage = () => {
  return (
    <main className="container d-flex flex-column justify-content-center align-items-center ">
      <div className="formDiv d-flex flex-column justify-content-center align-items-center">
        <h1 className="sayHi headersFont text-center">Say hi.</h1>
        <ContactForm></ContactForm>
        </div>
    </main>
  )
}

export default ContactPage