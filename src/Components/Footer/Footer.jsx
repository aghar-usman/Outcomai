import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div>
        <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-logo">
            <h2>Outcom<span>.ai</span></h2>
            <p>Turning data into actionable outcomes.</p>
            </div>

            <div class="footer-links">
            <h4>Company</h4>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>

            <div class="footer-links">
            <h4>Resources</h4>
            <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Documentation</a></li>
            </ul>
            </div>

            <div class="footer-social">
            <h4>Follow Us</h4>
            <div class="social-icons">
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
            </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© 2025 Outcom.ai. All rights reserved.</p>
        </div>
        </footer>

    </div>
  )
}

export default Footer;
