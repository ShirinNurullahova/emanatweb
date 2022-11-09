import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from '../../../assets/img/logo.svg'
import dropdown from '../../../assets/img/shirin/dropdown.png'
import SearchIcon from '../../../assets/img/search.svg'
import Modal from '../Modal/Modal'
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggle = () => {
    if (menuOpen) {
      setMenuOpen(false)

    } else {
      setMenuOpen(true)
      document.getElementsByTagName('body')[0].style.overflow='hidden'

    }
  }
  const dropEnter=()=>{
    document.getElementsByClassName('header-container-navbar-li-div')[0].style.transition='0.2s'
    document.getElementsByClassName('header-container-navbar-li-div')[0].style.visibility='visible'

   document.getElementsByClassName('header-container-navbar-li-dropdown')[0].style.transform='rotateX(180deg)' 
  }

  const dropLeave=()=>{
    document.getElementsByClassName('header-container-navbar-li-div')[0].style.transition='0.2s'
    document.getElementsByClassName('header-container-navbar-li-div')[0].style.visibility='hidden'

    document.getElementsByClassName('header-container-navbar-li-dropdown')[0].style.transform='rotateX(360deg)' 
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
              <Link to='/'>Ana səhifə</Link>
            </li>
            {/* <li><Link to={'/coorperative'}>Terminal xəritəsi</Link></li> */}

            <li className='header-container-navbar-li' onMouseEnter={dropEnter} onMouseLeave={dropLeave}>
              <Link to={'/service'}>Əməkdaşlıq <img  className='header-container-navbar-li-dropdown' src={dropdown}/></Link>
              <div className='header-container-navbar-li-div'>
                  <p>Marketing</p>
                  <p>Biznes</p>
                  <p>Terminal quraşdırılması</p>
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
