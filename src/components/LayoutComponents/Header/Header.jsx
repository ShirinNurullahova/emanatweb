import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from '../../../assets/img/logo.svg'
import SearchIcon from '../../../assets/img/search.svg'
import Modal from '../Modal/Modal'
const Header = () => {
  const [menuOpen , setMenuOpen] = useState(false);
    
  const toggle= () =>{
      if(menuOpen){
        setMenuOpen(false)
          // console.log("salam")
      }else{
       setMenuOpen(true)
        // console.log("sagol")
      }
   }
  return (
    <header>
      <div className="header-container">
        <div className="header-container-logo">
          <Link to='/'>
          <img src={Logo} alt="emanat-logo" loading="lazy"/>

          </Link>
        </div>

        <div className="header-container-search">
          <label>
            <input type="text" />

            <img onClick={toggle} src={SearchIcon} alt="emanat-axtaris" loading="lazy"/>
          </label>
        </div>

        <nav className='header-container-navbar'>
          <ul>
          <li><Link to='/about'>Haqqımızda</Link></li>
          {/* <li><Link to={'/coorperative'}>Terminal xəritəsi</Link></li> */}
          <li><Link to={'/service'}>Əməkdaşlıq</Link></li>
          <li><Link to='/career'>Karyera</Link></li>
          <li><Link to={'/contact'}>Əlaqə</Link></li>
          <li><Link>AZ</Link></li>

          </ul>
        </nav>
      </div>
      <Modal menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </header>
  )
}

export default Header