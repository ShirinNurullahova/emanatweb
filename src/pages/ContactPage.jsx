import React, { Fragment } from 'react'
import '../components/ContactComponents/Contact.scss'
const ContactMain = React.lazy(() => import('../components/ContactComponents/ContactMain')); // Lazy-loaded
const ContactForm = React.lazy(() => import('../components/ContactComponents/ContactForm')); // Lazy-loaded
const Tag = React.lazy(() => import('../components/LayoutComponents/Tag/Tag')); // Lazy-loaded

const ContactPage = () => {
  return (
    <Fragment>
        <ContactMain/>
        <ContactForm/>
        <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali,#terminal']}/>
    </Fragment>
  )
}

export default ContactPage