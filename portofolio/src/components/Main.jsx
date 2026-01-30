import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Rizky from '../assets/images/dayat.png';
import '../assets/styles/Main.css';

function Main() {
  return (
    <div className="container">
      <section className="about-section">
        <div className="hero-content">
          <div className="image-wrapper-outer">
            <div className="image-wrapper">
              <img src={Rizky} alt="Avatar Rizky" />
            </div>
            {/* Efek pendaran di belakang foto */}
            <div className="image-glow"></div>
          </div>
          
          <div className="content">
            <h1>Rizky <span>Hidayatullah</span></h1>
            <p className="title-job">IT Programmer</p>
            <p className="description">
              Portofolio ini menampilkan proyek dan kontribusi saya sebagai pengembang di bidang teknologi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;