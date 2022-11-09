import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from '../../../assets/img/logo.svg'
import dropdown from '../../../assets/img/shirin/dropdown.png'
import SearchIcon from '../../../assets/img/search.svg'
import Modal from '../Modal/Modal'
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drop , setDrop]=useState(false)
  const toggle = () => {
    if (menuOpen) {
      setMenuOpen(false)

    } else {
      setMenuOpen(true)
      document.getElementsByTagName('body')[0].style.overflow='hidden'

    }
  }
  const dropDown =()=>{
    if (drop) {
      setDrop(false)
      document.getElementsByClassName('header-container-navbar-li-div')[0].style.transition='0.2s'
       document.getElementsByClassName('header-container-navbar-li-div')[0].style.visibility='hidden'

       document.getElementsByClassName('header-container-navbar-li-dropdown')[0].style.transform='rotateX(360deg)' 

    } else {
      setDrop(true)
      document.getElementsByClassName('header-container-navbar-li-div')[0].style.transition='1s'
      document.getElementsByClassName('header-container-navbar-li-div')[0].style.visibility='visible'

     document.getElementsByClassName('header-container-navbar-li-dropdown')[0].style.transform='rotateX(180deg)' 
    }
  }
  return (
    <header>
      <div className="header-container">
        <div className="header-container-logo">
          <Link to='/'>
            <img src={Logo} alt="emanat-logo" loading="lazy" />

          </Link>
        </div>

        <div className="header-container-search">
          <label>
            <input type="text" />

            <img onClick={toggle} src={SearchIcon} alt="emanat-axtaris" loading="lazy" />
          </label>
        </div>

        <nav className='header-container-navbar'>
          <ul>
            <li>
              <Link to='/about'>Haqqımızda</Link>
            </li>
            {/* <li><Link to={'/coorperative'}>Terminal xəritəsi</Link></li> */}

            <li className='header-container-navbar-li' onClick={dropDown}>
              <Link to={'/service'}>Əməkdaşlıq <img  className='header-container-navbar-li-dropdown' src={dropdown}/></Link>
              <div className='header-container-navbar-li-div'>
                <Link to='/newVacancies'>
                  <p>yeni vakansiya</p>
                </Link>
                <Link to='/vacancyDetails'>
                  <p>vakansiya detal</p>
                </Link>
                <Link to='/bonus'>
                  <p>bonus</p>
                </Link>
                <Link to='/all-vacancies'>
                  <p>butun vakansiyalar</p>
                </Link>
                <Link to='/terminal-map'>
                  <p>terminal xeritesi</p>
                </Link>
                <Link to='/terminal-usage-rules'>
                <p>terminal istifade qaydasi</p>

                </Link>

              </div>

            </li>

            <li><Link to='/career'>Karyera</Link></li>
            <li><Link to={'/contact'}>Əlaqə</Link></li>
            <li><Link>AZ</Link></li>

          </ul>
        </nav>
      </div>
      <Modal menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  )
}

export default Header
