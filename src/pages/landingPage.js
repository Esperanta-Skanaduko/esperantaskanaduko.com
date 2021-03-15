import * as React from "react"
import '../components/CSS/landingPage.css'

const LandingPage = () => (
  <>
<p data-item='Esperanto'> Esperanto </p>
<br/>
<p data-item='Skanaduko'> Skanaduko </p>
<br/>

<section>
  <div style={{fontSize: 30, color: "green"}}>Eldona grupo por literaturo en Esperanto</div>
  <nav>
    <ul class="menuItems">
      <li><a href='/landingPage/' data-item='Home' rel="noreferrer">Home</a></li>
      {/* <li><a href='#' data-item='About' rel="noreferrer">About</a></li> */}
      <li><a href='https://github.com/Esperanta-Skanaduko' data-item='Projects' rel="noreferrer">Projects</a></li>
      <li><a href='https://mangadex.org/group/18541/esperanta-skanaduko' target="_blank" data-item='Manga' rel="noreferrer">Manga</a></li>
      <li><a href='mailto:esperantaSkanaduko@gmail.com/' data-item='Contact' rel="noreferrer">Contact</a></li>
    </ul>
  </nav>

</section>

<footer>

  <div class="footer-copyright text-center">&copy; Developed with <span role='img' aria-label="heart">❤️</span> by
    <a href="https://vaporjawn.dev/" class="white-text" target="_blank" rel="noreferrer">Vaporjawn</a>. <a href="https://github.com/vaporjawn/" target="_blank" rel="noreferrer">Check out my Github </a>
  </div>

</footer>

  </>
)

export default LandingPage
