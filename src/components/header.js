import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { rhythm } from "../utils/typography"

//import Logo from "./logo.js"

const ListLink = props => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`,
      color: `white`,
    }}
  >
    <Link
      style={{
        textDecoration: `none`,
        fontSize: `1.5rem`,
      }}
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div
    style={{
      margin: `0 auto`,
      padding: `${rhythm(2)}`,
      paddingTop: `${rhythm(1.5)}`,
    }}
  >
    <Link
      to="/"
      style={{
        textShadow: `none`,
        backgroundImage: `none`,
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <h1
        style={{
          marginLeft: `2rem`,
          display: `inline`,
        }}
      >
        {siteTitle}
      </h1>
    </Link>

    <ul
      style={{
        listStyle: `none`,
        float: `right`,
        marginTop: `0.5rem`,
      }}
    >
      <ListLink to="/about/">Acerca</ListLink>
      <ListLink to="/contact/">Contacto</ListLink>
    </ul>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `asdrome.digital`,
}

export default Header
