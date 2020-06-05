import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <span className='footer_left'>
                <FacebookIcon />
                <InstagramIcon />
            </span>
            <span className='footer_right'>
                Privacy Policy &nbsp; &nbsp; &nbsp;
                Terms & Conditions
            </span>
        </div>
    )
}

export default Footer;