import React from 'react'
import vector from "../../assets/img/Vector-AllVac.png"
import "./NewVacancies.scss";

function AllVacanciesPath() {
  return (
    <div className='AllVacanciesPath'>
        <div className='AllVacancies'>
            <div className='AllVacancies-text'>
                <p>Bütün vakansiyalar</p>
            </div>
           <div className='AllVacancies-icon'>
                <img src={vector}></img>
           </div>
        </div>

    </div>
  )
}

export default AllVacanciesPath