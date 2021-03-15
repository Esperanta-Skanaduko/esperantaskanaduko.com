import * as React from "react"
import PropTypes from "prop-types"
import "./CSS/menu.css"

const Menu = () => {
    return (
        <>
            <input type="checkbox" id="myInput"/>
            <label for="myInput">
                <span className="bar top"></span>
                <span className="bar middle"></span>
                <span className="bar bottom"></span>
                <input className="hidden"></input>
            </label>
            <aside>
                <div id="aside-section" className="aside-section aside-left hidden">
                <div className="aside-content">
                    <p> Legu eldonojn ĉe MangaDex </p>
                    <button className="button" onclick="window.location='https://mangadex.org/group/18541/esperanta-skanaduko/';"> Iru al MangaDex </button>
                </div>
                </div>
                <div id="aside-section" className="aside-section aside-right hidden">
                <ul className="aside-list">
                    <li><a href="https://github.com/Esperanta-Skanaduko" className="aside-anchor" target="_blank" rel="noreferrer">Nia Github</a></li>
                    <li><a href="https://twitter.com/Vaporjawn" className="aside-anchor" target="_blank" rel="noreferrer">Twitter</a></li>
                    <li><a href="https://learn.esperanto.com/en/" className="aside-anchor" target="_blank" rel="noreferrer">Lerni Esperanton</a></li>
                    <li><a href="https://mangadex.org/group/18541/esperanta-skanaduko/" className="aside-anchor" target="_blank" rel="noreferrer">MangaDex</a></li>
                </ul>
                </div>
            </aside>
        </>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Menu
