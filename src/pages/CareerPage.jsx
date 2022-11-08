import React, { Fragment, useEffect } from 'react'
const CareerBlue = React.lazy(() => import('../components/CareerComponents/CareerBlue/CareerBlue')); // Lazy-loaded
const CareerMain = React.lazy(() => import('../components/CareerComponents/CareerMain/CareerMain')); // Lazy-loaded
const CareerWhite = React.lazy(() => import('../components/CareerComponents/CareerWhite/CareerWhite')); // Lazy-loaded
const CareerDark = React.lazy(() => import('../components/CareerComponents/CareerDark/CareerDark')); // Lazy-loaded
const Tag = React.lazy(() => import('../components/LayoutComponents/Tag/Tag')); // Lazy-loaded





const CareerPage = () => {
  useEffect(() => {
    document.getElementsByTagName("header")[0].style.background = '#0867b5'
  }, [])
  return (
    <Fragment>
      <CareerMain />
      <CareerDark />
      <CareerWhite />
      <CareerBlue />
      <Tag tags={['#əməliyatlar,#maliyə,#satış,#analitika,#idarəetmə ,#hesabatlılıq']}/>
    </Fragment>
  )
}

export default CareerPage