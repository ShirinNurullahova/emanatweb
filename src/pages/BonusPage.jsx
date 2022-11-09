import React,{useEffect}from 'react'
import BonusComponent from '../components/BonusComponents/BonusComponent'
import BreadCrumbBonus from '../components/BonusComponents/BreadCrumbBonus'
import Tag from '../components/LayoutComponents/Tag/Tag'
function BonusPage() {
    useEffect(() => {
        document.getElementsByTagName("header")[0].style.background = '#0867b5'
      }, [])
  return (
    <div>
        <BreadCrumbBonus/>
        <BonusComponent/>
      <Tag tags={['#Fusce nec,#Sit,#mauris aenea,#Pulvinar,#Faq,#Sapien cursus']}/>

    </div>
  )
}

export default BonusPage