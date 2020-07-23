import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { useColorMode, Button } from "theme-ui"
import Img from "gatsby-image"
import { graphql } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

const ListLink = props => (
  <li
    sx={{
      display: "inline-block",
      marginRight: "0.5rem",
    }}
  >
    <Link
      sx={{
        fontWeight: "bold",
        color: "white",
        textDecoration: "none",
        fontSize: "4vw",
      }}
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
)

const ThemeButton = props => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "images/logo128.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Button
      sx={{
        backgroundColor: "transparent",
        display: "inline-block",
        border: "none",
        verticalAlign: "sub"
      }}
      onClick={e => {
        setColorMode(colorMode === "dark" ? "default" : "dark")
      }}
    >
      <Img fixed={data.file.childImageSharp.fixed} alt="Dark mode" />
      {/* {colorMode === "default" ? "Dark" : "Light"} */}
    </Button>
  )
}

const Header = ({ siteTitle }) => (
  <header
    sx={{
      fontSize: "3vw",
      fontFamily: "heading",
      background: "#121212",
      position: "fixed",
      top: "0",
      right: "0",
      left: "0",
    }}
  >
    <Link
      to="/"
      sx={{
        textDecoration: "none",
      }}
    >
      <h1
        sx={{
          color: "white",
          marginLeft: ".5em",
          display: "inline",
        }}
      >
        {siteTitle}
      </h1>
    </Link>

    <ul
      sx={{
        display: "inline-block",
        textAlign: "right",
        position: "relative",
        left: "15vw"
      }}
    >
      <ListLink to="/about/">Acerca</ListLink>
      <ListLink to="/contact/">Contacto</ListLink>
      <ThemeButton />
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `asdrome.digital`,
}

export default Header
