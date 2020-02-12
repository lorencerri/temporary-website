import React from "react"
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
  <div
    style={{
      margin: `3rem auto`,
      maxWidth: 650,
      padding: `0 1rem`,
    }}
  >
    {helmet}
    <header style={{ marginBottom: `1.5rem` }}>
      <h3 style={{ display: `inline`, color: "lavenderblush" }}>
        Plexi Development
      </h3>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="https://discord.gg/plexidev">Discord</ListLink>
        <ListLink to="https://youtube.com/c/TrueXPixels">YouTube</ListLink>
        <ListLink to="https://twitter.com/twitter">Twitter</ListLink>
        <ListLink to="https://github.com/plexidev">GitHub</ListLink>
      </ul>
    </header>
    <div style={{ maxWidth: "75%" }}>
      <small style={{ color: "grey" }}>
        We're a community centered around writing open source packages and
        applications. If you'd like to get in contact with us, we recommend
        either email (<i>hello@plexidev.org</i>) or Twitter direct messages.
      </small>
    </div>
    <header style={{ margin: `1.5rem 0 1.5rem 0` }}>
      <h4 style={{ display: `inline`, color: "lavenderblush" }}>
        Our Projects
      </h4>
    </header>
    <small>
      <ul style={{ listStyle: `none` }}>
        <ListLink to="https://top.gg/bot/captcha">
          Server Captcha Bot for Discord
        </ListLink>
        <ListLink to="https://npmjs.org/quick.db">Quick.db</ListLink>
        <ListLink to="https://npmjs.org/quick.hook">Quick.hook</ListLink>
      </ul>
    </small>
  </div>
)

export default Home
