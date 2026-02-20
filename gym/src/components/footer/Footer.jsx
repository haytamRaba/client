import './Footer.css'
import React from 'react';
function Footer(){
    return(
   <footer className='footer'>
    <div className='footer-container'>
      {/*colone 1*/}
        <div className='footer-section'>
          <h2>GYM POWER</h2>
          <p>Votre transformation commence ici.</p>
          <div className='social-media'>
            <ul>
              <li><a href='#'>Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">TikTok</a></li>
            </ul>
          </div>
        </div>
      {/*colone 2*/}
      <div className='footer-section'>
        <h3>liens rapides</h3>
        <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/abonnements">Abonnements</a></li>
            <li><a href="/cours">Cours</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
      </div>
      {/*colone 3*/}
      <div className='footer-section'>
        <h3>Contact</h3>
          <p>📍 07 Rue du Ras Lefaa</p>
          <p>📞 06 65 33 77 69</p>
          <p>🕒 Lun - Dim : 7h - 22h</p>
      </div>
      
    </div>

    <div className="footer-bottom">
        <p>Copyright © 2026 Football History Archives. All Rights Reserved.</p>
      </div>
   </footer>

    );
}
export default Footer