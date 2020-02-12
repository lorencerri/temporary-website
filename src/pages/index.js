import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const ListLink = props => (
  <li style={{ marginRight: `1rem` }}>
    <a href={props.to}>{props.children}</a>
  </li>
)

const helmet = (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Plexi Development</title>
  </Helmet>
)

const Home = () => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    {helmet}
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ backgroundImage: `none` }}>
        <h3 style={{ display: `inline`, color: "lavenderblush" }}>
          Plexi Development
        </h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="https://discord.gg/plexidev">Discord</ListLink>
        <ListLink to="https://youtube.com/c/TrueXPixels">YouTube</ListLink>
        <ListLink to="https://twitter.com/twitter">Twitter</ListLink>
        <ListLink to="https://github.com/plexidev">GitHub</ListLink>
      </ul>
    </header>
    <p style={{ color: "lavenderblush" }}>Coming soon...</p>
  </div>
)

export default Home
