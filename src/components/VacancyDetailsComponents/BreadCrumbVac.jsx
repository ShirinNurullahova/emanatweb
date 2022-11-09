import React from 'react'
import { Link } from 'react-router-dom';
import "./VacancyDetails.scss";

function BreadCrumbVac() {
  return (
    <div className='Vacancy-BreadCrumb'>
      <Link to='/'>
        <div className='homePath'>Ana səhifə </div>
      </Link>
      <Link to='/newVacancies'>
        <div className='allVacPath'> / Bütün vakansiyalara qayıt</div>
      </Link>
    </div>
  )
}

export default BreadCrumbVac