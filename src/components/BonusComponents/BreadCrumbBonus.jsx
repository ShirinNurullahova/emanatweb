import React from 'react'
import {Link} from "react-router-dom"
import "./BonusNews.scss";

function BreadCrumbBonus() {
  return (
    <div className='Bonus-BreadCrumb'>
      <Link to='/'>
        <div className='homePath'>Ana səhifə </div>
      </Link>
      <Link to='/homeNews'>
        <div className='homePath'> / Xəbərlər</div>
      </Link>

     
        <div className='bonusPath'>/ Bonusların istifadəsi</div>
      
    </div>
  )
}

export default BreadCrumbBonus