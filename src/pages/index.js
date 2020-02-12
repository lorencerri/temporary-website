import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li
    style={{ textShadow: `none`, display: `inline-block`, marginRight: `1rem` }}
  >
    <a href={props.to}>{props.children}</a>
  </li>
)

const Home = () => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline`, color: "lavenderblush" }}>
          Plexi Development
        </h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="https://discord.gg/plexidev">Discord</ListLink>
      </ul>
    </header>
    <p style={{ color: "lavenderblush" }}>Coming soon...</p>
  </div>
)

export default Home
