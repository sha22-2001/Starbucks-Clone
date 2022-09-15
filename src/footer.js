import React from 'react'
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function footer() {
  return (
    <>
    <div className='footer'>

    <div className='SocialMedia'>
    <a href='/'><FacebookIcon className='social' sx={{ fontSize: 50 }}/></a>
    <a href='/'><TwitterIcon className='social' sx={{ fontSize: 50 }}/></a>
    <a href='/'><InstagramIcon className='social' sx={{ fontSize: 50 }}/></a>
    </div>
    <div classname='clone'>
    <img classname='Clone_project' src='https://www.starbucks.in/media/wordmark_footer_tcm87-397.png' alt='' style={{ width: "9px" }}/>
    </div>
    </div>
    </>
  )
}

export default footer