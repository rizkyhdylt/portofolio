import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram'; // Tambah Ikon IG
import EmailIcon from '@mui/icons-material/Email'; // Tambah Ikon Email
import '../assets/styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-socials">
          {/* GitHub */}
          <a href="https://github.com/rizkyhdylt" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/rizky-hidayatullah-74994b2ab/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/rizky.hdylt" target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>

          {/* Email */}
          <a href="mailto:rizkyhdylt@gmail.com" aria-label="Email">
            <EmailIcon />
          </a>
        </div>
        
        <div className="footer-info">
          <p>© 2024 <span>Rizky Hidayatullah</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;