import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className='navbar'>
      <a href='#about'>About</a>
      <a href='#cv'>CV</a>
      <a href='#showreel'>Showreel</a>
      <a href='#contact'>Contact</a>
      <a href="mailto:adam.r.harper@gmail.com">adam.r.harper@gmail.com</a>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
