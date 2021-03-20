import React from 'react';
// import './CSS/selector.css';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );




const switcher = () => {
  var pictureList = [
    "http://lorempixel.com/400/200/sports/1",
    "http://lorempixel.com/400/200/sports/2",
    "http://lorempixel.com/400/200/sports/3",
    "http://lorempixel.com/400/200/sports/4",
    "http://lorempixel.com/400/200/sports/5", ];

$('select').change(function () {
    var val = parseInt($('select').val());
    $('img').attr("src",pictureList[val]);
});
};

const Selector = () => {
  switcher();
    return(
        <div include="form-input-select()">
  <select id="select" required>
    <option value=""
            hidden
    >Example Placeholder</option>

    <option id="option" value="1">Option 1</option>
    <option id="option" value="2">Option 2</option>
    <option id="option" value="3">Option 3</option>
    <option id="option" value="4">Option 4</option>
    <option id="option" value="5">Option 5</option>
  </select>

  <img src="http://lorempixel.com/400/200/sports/1" />

</div>
    )
};

export default Selector;