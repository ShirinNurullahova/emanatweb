import React from 'react'
import { Link } from 'react-router-dom'
const ContactMain = () => {
  return (
    <main className='random-main'>
      <div className='random-main-one' >
        <h1 className='random-main-one-h1'>
          Müştərİlərİnİzə xİdmət ödənİşlərİnİ etmələrİ üçün
          <span className='random-main-one-h1-span'> ən effektİv vasİtə</span> təqdİm etmək İstəyİrsİnİz?
        </h1>
        <p className="random-main-one-p">
          O zaman yüksək keyfiyyətli, etibarlı və
          təhlükəsiz eManat nağd ödəniş terminalını seçin
        </p>
        <div className="random-main-one-btn">
         <Link to='/hr'>
         <button>Bizə qoşulun</button>
         </Link> 
        </div>
      </div>

    </main>
  )
}

export default ContactMain