import React, { Fragment, useEffect} from 'react'
const ServicesAbout = React.lazy(() => import('../components/ServicesComponents/ServicesAbout/ServicesAbout')); // Lazy-loaded
const ServicesBlue = React.lazy(() => import('../components/ServicesComponents/ServicesBlue/ServicesBlue')); // Lazy-loaded
const ServicesDark = React.lazy(() => import('../components/ServicesComponents/ServicesDark/ServicesDark')); // Lazy-loaded
const ServicesMain = React.lazy(() => import('../components/ServicesComponents/ServicesMain/ServicesMain')); // Lazy-loaded
const ServicesSecond = React.lazy(() => import('../components/ServicesComponents/ServicesSecond/ServicesSecond')); // Lazy-loaded
const ServicesThree = React.lazy(() => import('../components/ServicesComponents/ServicesThree/ServicesThree')); // Lazy-loaded
const Tag = React.lazy(() => import('../components/LayoutComponents/Tag/Tag')); // Lazy-loaded




const ServicesPage = () => {
    useEffect(() => {
      document.getElementsByTagName("header")[0].style.background = '#0867b5'
    }, [])
  return (
    <Fragment>
      <ServicesMain/>
      <ServicesSecond/>
      <ServicesThree/>
      <ServicesDark/>
      <ServicesBlue/>
      <ServicesAbout/>
      <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali,#terminal']}/>
    </Fragment>
  )
}

export default ServicesPage