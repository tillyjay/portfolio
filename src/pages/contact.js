import * as React from "react"
import ContactForm from '../components/ContactForm';



const ContactPage = () => {
  return (
    <main className="contact-main container d-flex flex-column justify-content-center align-items-center">
      <div className="formDiv d-flex flex-column justify-content-center align-items-center">
        <h1 className="sayHi headersFont text-center">Say hi.</h1>
        <ContactForm></ContactForm>
        </div>
    </main>
  )
}


export const Head = () => (
  <>
    <title>Contact</title>
    <meta name="description" content="Send me a message and let's chat!" />
  </>
)

export default ContactPage