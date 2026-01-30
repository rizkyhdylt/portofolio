import React from 'react';
import '../assets/styles/Contact.css'; // Pastikan path ini benar
// Import ikon yang dibutuhkan
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram'; // Jika ingin pakai Instagram
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Contoh tambahan ikon WhatsApp

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Mari terhubung dan berkolaborasi! Jangan ragu untuk menghubungi saya melalui platform di bawah ini.</p>
          
          <div className="contact-icons-grid">
            {/* GitHub */}
            <a href="https://github.com/rizkyhdylt" target="_blank" rel="noreferrer" className="contact-icon-item">
              <GitHubIcon />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/rizky-hidayatullah-74994b2ab/" target="_blank" rel="noreferrer" className="contact-icon-item">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>

            {/* Email */}
            <a href="mailto:rizkyhdylt@gmail.com" className="contact-icon-item">
              <EmailIcon />
              <span>Email</span>
            </a>

            {/* Instagram (Opsional) */}
            <a href="https://www.instagram.com/rizky.hdylt" target="_blank" rel="noreferrer" className="contact-icon-item">
              <InstagramIcon />
              <span>Instagram</span>
            </a>

            {/* Tambahkan ikon lain jika diperlukan, misalnya WhatsApp atau Dribbble */}
            <a href="https://wa.me/6285757175734" target="_blank" rel="noreferrer" className="contact-icon-item">
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;