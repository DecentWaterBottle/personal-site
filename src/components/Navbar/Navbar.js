import { HashLink as Link } from 'react-router-hash-link'
import React, { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <Link
              to='/#projects'
              smooth
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </Link>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <Link
              to='/#skills'
              smooth
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </Link>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <Link
              to='/#contact'
              smooth
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </Link>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
