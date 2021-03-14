import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const LandingPage = () => (
  <>
<div>Filling the text on hover</div>
<p data-item='Rohit'>Rohit</p>

<section>
  <div>Real time example, Navbar:</div>
  <nav>
    <ul class="menuItems">
      <li><a href='#' data-item='Home'>Home</a></li>
      <li><a href='#' data-item='About'>About</a></li>
      <li><a href='#' data-item='Projects'>Projects</a></li>
      <li><a href='#' data-item='Blog'>Blog</a></li>
      <li><a href='#' data-item='Contact'>Contact</a></li>
    </ul>
  </nav>

</section>

<footer>

  <div class="footer-copyright text-center">&copy; Developed with ❤️ by
    <a href="https://grohit.com/" class="white-text" target="_blank">G Rohit</a>. <a href="https://codepen.io/grohit/" target="_blank">Check my other pens </a>
  </div>

</footer>

  </>
)

export default LandingPage
