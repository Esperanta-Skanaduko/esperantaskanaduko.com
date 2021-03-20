import * as React from "react"
import '../components/CSS/landingPage.css'
// import Skanadukoj from '../components/skanadukoj';
// import login from '../components/api/login'

const LandingPage = () => (
  <>
<p data-item='Esperanta'> Esperanta </p>
<br/>
<p data-item='Skanaduko'> Skanaduko </p>
<br/>

<section>
  <div style={{fontSize: 30, color: "green"}}>Eldona grupo por literaturo en Esperanto</div>
  <nav>
    <ul className="menuItems">
      <li><a href='/landingPage/' data-item='Hejmo' rel="noreferrer">Hejmo</a></li>
      {/* <li><a href='/about/' data-item='Pri Ni' rel="noreferrer">Pri Ni</a></li> */}
      <li><a href='/releases/' data-item='Eldonoj' rel="noreferrer">Eldonoj</a></li>
      <li><a href='https://mangadex.org/group/18541/esperanta-skanaduko' target="_blank" data-item='MangaDex' rel="noreferrer">MangaDex</a></li>
      <li><a href='https://twitter.com/Skanaduko' data-item='Twitter' target="_blank" rel="noreferrer">Twitter</a></li>
      <li><a href='https://www.paypal.com/donate?business=FSQHDN6NA2AJA&item_name=financado+por+Esperanta+Skanaduko&currency_code=USD' data-item='Donaci' target="_blank"  rel="noreferrer">Donaci</a></li>
      <li><a href='mailto:esperantaSkanaduko@gmail.com/' data-item='Kontakto' target="_blank" rel="noreferrer">Kontakto</a></li>
    </ul>
  </nav>

</section>

<footer>
  <div className="footer-copyright text-center">&copy; Developed with <span role='img' aria-label="heart">❤️</span> by
    <a href="https://vaporjawn.dev/" className="white-text" target="_blank" rel="noreferrer">Vaporjawn</a>. <a href="https://github.com/vaporjawn/" target="_blank" rel="noreferrer">Check out my Github </a>
  </div>

</footer>

  </>
)

export default LandingPage
