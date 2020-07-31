import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './Header.less'

const Header = ({ siteTitle }) => (
  <header>
      <h1 >
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
