import * as React from "react"
import PropTypes from "prop-types"
import "./CSS/menu.css"

const Menu = () => {
    return (
        <>
            <input type="checkbox" id="myInput"/>
            <label for="myInput">
                <span class="bar top"></span>
                <span class="bar middle"></span>
                <span class="bar bottom"></span>
                <input class="hidden"></input>
            </label>
            <aside>
                <div id="aside-section" class="aside-section aside-left hidden">
                <div class="aside-content">
                    <p> Legu eldonojn ĉe MangaDex </p>
                    <button class="button" onclick="window.location='https://mangadex.org/group/18541/esperanta-skanaduko/';"> Iru al MangaDex </button>
                </div>
                </div>
                <div id="aside-section" class="aside-section aside-right hidden">
                <ul class="aside-list">
                    <li><a href="https://github.com/Esperanta-Skanaduko" class="aside-anchor" target="_blank" rel="noreferrer">Nia Github</a></li>
                    <li><a href="https://twitter.com/Vaporjawn" class="aside-anchor" target="_blank" rel="noreferrer">Twitter</a></li>
                    <li><a href="https://learn.esperanto.com/en/" class="aside-anchor" target="_blank" rel="noreferrer">Lerni Esperanton</a></li>
                    <li><a href="https://mangadex.org/group/18541/esperanta-skanaduko/" class="aside-anchor" target="_blank" rel="noreferrer">MangaDex</a></li>
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