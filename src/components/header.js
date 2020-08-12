import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className='navbar'>
      <a href='#about'>About</a>
      <a href='#cv'>CV</a>
      <a href='#projects'>Projects</a>
      <a href='#contact'>Contact</a>
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
