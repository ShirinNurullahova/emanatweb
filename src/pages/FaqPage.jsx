import React, {Fragment, useEffect} from 'react'
import '../components/FaqComponents/Faq.scss'
import FaqAccordion from '../components/FaqComponents/FaqAccordion'
import FaqBreadcrumb from '../components/FaqComponents/FaqBreadcrumb'
import FaqHeader from '../components/FaqComponents/FaqHeader'
import Tag from '../components/LayoutComponents/Tag/Tag'
const FaqPage = () => {
  useEffect(() => {
    document.getElementsByTagName("header")[0].style.background = '#0867b5'
  }, [])

  return (
    <Fragment>
      <FaqBreadcrumb/>
      <FaqHeader/>
      <FaqAccordion/>
      <Tag tags={['#emanat,#fintech,#terminal,#odenisterminali,#terminal']}/>
    </Fragment>
  )
}

export default FaqPage