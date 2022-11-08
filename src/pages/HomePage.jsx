import React, { Fragment, useEffect } from 'react'
import '../components/HomeComponents/Home.scss'

const HomeBanner = React.lazy(() => import('../components/HomeComponents/HomeBanner')); // Lazy-loaded
const HomeEmekdasliqSection = React.lazy(() => import('../components/HomeComponents/HomeEmekdasliqSection')); // Lazy-loaded
const HomeBlackSection = React.lazy(() => import('../components/HomeComponents/HomeBlackSection')); // Lazy-loaded
const HomeFeaturesSection = React.lazy(() => import('../components/HomeComponents/HomeFeaturesSection')); // Lazy-loaded
const HomeJoinus = React.lazy(() => import('../components/HomeComponents/HomeJoinus')); // Lazy-loaded
const HomeNews = React.lazy(() => import('../components/HomeComponents/HomeNews')); // Lazy-loaded
const HomePaySection = React.lazy(() => import('../components/HomeComponents/HomePaySection')); // Lazy-loaded
const Tag = React.lazy(() => import('../components/LayoutComponents/Tag/Tag')); // Lazy-loaded





const HomePage = () => {
  useEffect(() => {
    document.getElementsByTagName("header")[0].style.background = ''
  }, [])
  return (
    <Fragment>
      <HomeBanner />
      <HomeBlackSection />
      <HomeFeaturesSection />
      <HomeEmekdasliqSection />
      <HomePaySection />
      <HomeJoinus />
      <HomeNews />
      <Tag tags={['#interfeys,#ödəmə,#xidmət,#vaxt,#ödəmə,#xeyriyyə']}/>
    </Fragment>
  )
}

export default HomePage