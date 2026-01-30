import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.css';

const labelsWeb = ["PHP", "Laravel", "ReactJs", "NextJs", "Tailwind", "JavaScript"];
const labelsData = ["MySQL", "MariaDB", "MongoDB", "Firebase", "API Design"];
const labelsTools = ["Unity 2D", "Git", "C#", "Postman", "SDLC"];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>Membangun sistem informasi kompleks (ERP/E-Learning) menggunakan Laravel dan ReactJs untuk solusi yang responsif.</p>
                    <div className="flex-chips">
                        {labelsWeb.map((label, i) => <Chip key={i} className='chip' label={label} />)}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Database & Architecture</h3>
                    <p>Perancangan struktur data yang efisien dan optimasi query untuk sistem skala besar di lingkungan perusahaan.</p>
                    <div className="flex-chips">
                        {labelsData.map((label, i) => <Chip key={i} className='chip' label={label} />)}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLayerGroup} size="3x"/>
                    <h3>Software Engineering</h3>
                    <p>Penerapan Clean Code dan pengembangan aplikasi lintas platform, termasuk pembuatan game 2D dengan Unity.</p>
                    <div className="flex-chips">
                        {labelsTools.map((label, i) => <Chip key={i} className='chip' label={label} />)}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;