import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#216869`,
      // marginBottom: `1.45rem`,
      height: '50px',
    }}
  >
    <div
      style={{
        margin: `0`,
        maxWidth: 960,
        // padding: `0.5rem 0.5rem`,
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
        <a href='#about'>About</a>
        <a href='#showreel'>Showreel</a>
      </h3>
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
