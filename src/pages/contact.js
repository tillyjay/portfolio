import * as React from "react"
import ContactForm from '../components/ContactForm';



const ContactPage = () => {
  return (
    <main className="container">
        <h1 className="headersFont">Say hi.</h1>
        <ContactForm></ContactForm>
    </main>
  )
}

export default ContactPage