import React from 'react';
import './CSS/selector.css';

const Selector = () => {
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
</div>
    )
};

export default Selector;