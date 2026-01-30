import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import '../assets/styles/Profile.css';

function Profile() {
    return (
        <div className="profile-container" id="profile">
            <div className="items-container">
                <h1>About Me</h1>
                <div className="profile-grid">
                    <div className="profile-column">
                        <h2>IT Programmer & Lulusan Sistem Informasi</h2>
                        <p>
                            Saya adalah seorang IT Programmer dengan pengalaman dalam pengembangan 
                            solusi perangkat lunak berbasis web. Fokus utama saya adalah merancang 
                            sistem yang efisien, terukur, dan stabil menggunakan full-stack development.
                        </p>
                        <h2>Kontribusi Profesional</h2>
                        <p>
                            Saya bertanggung jawab penuh atas siklus pengembangan sistem informasi 
                            internal perusahaan, mencakup pembuatan ERP, Sistem E-Learning, hingga Dashboard Monitoring.
                        </p>
                    </div>

                    <div className="profile-column">
                        <h2>Spesialisasi & Tech Stack</h2>
                        <ul className="tech-list">
                            <li><strong>Bahasa:</strong> PHP, C#, Javascript, ReactJs, NextJs, NodeJS.</li>
                            <li><strong>Framework:</strong> Unity(2D), Tailwind CSS, Bootstrap.</li>
                            <li><strong>Basis Data:</strong> Mysql/MariaDB, MongoDB, Firebase.</li>
                        </ul>

                        <h2>Mari Terkoneksi</h2>
                        <p>Silakan hubungi saya melalui jaringan profesional di bawah ini.</p>
                        <div className="social-links">
                            <a href="https://github.com/rizkyhdylt" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/rizky-hidayatullah-74994b2ab/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://www.instagram.com/rizky.hdylt" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="mailto:rizkyhdylt@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                            <a href="https://wa.me/6285757175734" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;