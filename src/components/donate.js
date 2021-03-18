import React from 'react';

const Donate = () => {
    return (
        <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="business" value="FSQHDN6NA2AJA" />
        <input type="hidden" name="item_name" value="financado por Esperanta Skanaduko" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
    )
};
export default Donate;