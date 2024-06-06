'use client'

import React from 'react'
import './footer.scss'
import Image from 'next/image';
import Logo from '../../../../public/assets/icons/logo.png'
import AppStore from '../../../../public/assets/icons/app-store.png'
import GooglePlay from '../../../../public/assets/icons/google-play.png'
import Telegram from '../../../../public/assets/icons/telegram.png'
import Instagram from '../../../../public/assets/icons/instagram.png'
import Facebook from '../../../../public/assets/icons/facebook.png'
import Link from 'next/link'

const FooterComponent = () => {
  return (
    <footer className="footer">
    <div className="footer__container">
      <div className="footer__section footer__section--brand">
        <Image src={Logo} alt="SendNOW" width={160} height={160} />
        <p>Transfer money empower and effortlessly <br /> with SendNOW</p>
        <div className="footer__apps">
          <Image src={GooglePlay} alt="Google Play" width={120} height={36} />
          <Image src={AppStore} alt="App Store" width={120} height={36} />
        </div>
      </div>
      <div className="footer__section">
        <h4>Company</h4>
        <ul>
        <Link href="/about">About</Link>
          <li>Reviews</li>
        </ul>
      </div>
      <div className="footer__section">
        <h4>Support</h4>
        <ul>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer__section">
        <h4>Trust & Legal</h4>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
    <div className="footer__bottom">
      <p>© 2023 SendNOW. All Rights Reserved.</p>
      <div className="footer__social">
        <Image src={Instagram} alt="Instagram" width={24} height={24} />
        <Image src={Telegram} alt="Telegram" width={24} height={24} />
        <Image src={Facebook} alt="Facebook" width={24} height={24} />
      </div>
    </div>
  </footer>
  )
}

export default FooterComponent