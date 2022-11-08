import React, { Fragment, useEffect, useState } from 'react'
import '../components/AboutComponents/About.scss'
const AboutMain = React.lazy(() => import('../components/AboutComponents/AboutMain')); // Lazy-loaded
const AboutBlack = React.lazy(() => import('../components/AboutComponents/AboutBlack')); // Lazy-loaded
const AboutServices = React.lazy(() => import('../components/AboutComponents/AboutServices')); // Lazy-loaded
const AboutTarget = React.lazy(() => import('../components/AboutComponents/AboutTarget')); // Lazy-loaded
const AboutLocations = React.lazy(() => import('../components/AboutComponents/AboutLocations')); // Lazy-loaded
const Tag = React.lazy(() => import('../components/LayoutComponents/Tag/Tag')); // Lazy-loaded




const AboutPage = () => {
  useEffect(() => {
    document.getElementsByTagName("header")[0].style.background = '#0867b5'
  }, [])

  const [height, setHeight] = useState()

  const scroll = () => {
    window.scrollTo({
      top: height,
      behavior:'smooth'
    })
  }
  
  return (
    <Fragment>
      <AboutMain scroll={scroll}/>
      <AboutBlack/>
      <AboutServices setHeight={setHeight}/>
      <AboutTarget/>
      <AboutLocations/>
      <Tag tags={['#sığorta,#təhsil,#huquq,#turizm,#ödəmə,#xeyriyyə']}/>
    </Fragment>
  )
}

export default AboutPage