import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#216869`,
      // marginBottom: `1.45rem`,
      height: '50px',
      width: '100%',
    }}
  >
    <div
      style={{
        margin: `0px`,
        width: '100%',
        height: '100%',
        // padding: `0 25px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <div
      style={{
        display: 'flex',
        width: '25%',
        justifyContent: 'space-evenly'
      }}>
      <a href='#about'>About</a>
      <a href='#showreel'>Showreel</a>
      </div>
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
