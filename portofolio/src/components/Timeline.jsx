import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap, faCode } from "@fortawesome/free-solid-svg-icons"; // Tambah faCode
import "../assets/styles/Timeline.css"; 

const Timeline = () => {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Riwayat & Pengalaman</h1>
        
        <div className="vertical-timeline">
          
          {/* Item 1: Pengalaman Kerja (Sisi Kiri) */}
          <div className="vertical-timeline-element">
            <div className="vertical-timeline-element-icon">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div className="vertical-timeline-element-content">
              <h3 className="vertical-timeline-element-title">Web Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">PT Blora Digital Media</h4>
              <p>Pengembangan dan pemeliharaan website berbasis konten menggunakan React.js, Node.js, dan MongoDB. Terlibat dalam perancangan fitur interaktif serta integrasi API.</p>
              <span className="vertical-timeline-element-content-arrow"></span>
            </div>
            <span className="vertical-timeline-element-date">Des 2024 - Sep 2025</span>
          </div>

          {/* Item 2: Bootcamp (Sisi Kanan) */}
          <div className="vertical-timeline-element">
            <div className="vertical-timeline-element-icon" style={{ background: '#f39c12' }}> {/* Warna ikon berbeda untuk Bootcamp */}
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="vertical-timeline-element-content">
              <h3 className="vertical-timeline-element-title">Game Developer MSIB</h3>
              <h4 className="vertical-timeline-element-subtitle">PT. Kinema System Multimedia</h4>
              <p>Mengembangkan prototipe game menggunakan Unity dan C#, termasuk desain level,
                gameplay, dan sistem interaksi dasar. Berpartisipasi dalam tim pengembangan dengan
                metode Agile/Scrum, termasuk daily stand-up, sprint planning, dan presentasi hasil
                kerja. </p>
              <span className="vertical-timeline-element-content-arrow"></span>
            </div>
            <span className="vertical-timeline-element-date">Agus 2023 - Des 2023</span>
          </div>

          {/* Item 3: Pendidikan (Sisi Kiri) */}
          <div className="vertical-timeline-element">
            <div className="vertical-timeline-element-icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div className="vertical-timeline-element-content">
              <h3 className="vertical-timeline-element-title">Sarjana Teknik Informatika</h3>
              <h4 className="vertical-timeline-element-subtitle">Universitas Pamulang</h4>
              <p>Fokus pada pengembangan perangkat lunak khususnya di bidang pemrograman web, game dan jaringan komputer.</p>
              <span className="vertical-timeline-element-content-arrow"></span>
            </div>
            <span className="vertical-timeline-element-date">2021 - 2025</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Timeline;