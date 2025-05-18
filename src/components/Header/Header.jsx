import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
import { tr } from 'framer-motion/client'

const Header = () => {

  const mobile = window.innerWidth <= 786 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className='header'>
      <img src={Logo} className='logo' alt="" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: '0.5rem',
            borderRadius: "5px"
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars}
            style={{
              width: '1.5rem',
              height: '1.5rem',
            }} alt="" />
        </div>
      ) :
        <ul className='header-menu'>
          <li>
            <Link
              to='home'
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >Home</Link>

          </li>
          <li>
            <Link
              to='programs'
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}>Programs</Link>
          </li>
          <li>
            <Link
              to='reasons'
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >Why Us</Link>
          </li>
          <li >
            <Link
              to='plans'
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >Plans</Link>
          </li>
          <li>
            <Link to='testimonials'
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >Testimonials</Link>
          </li>
        </ul>
      }
    </div>
  )
}

export default Header