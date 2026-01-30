import React from "react";
import jatengupdates from '../assets/images/jatengupdates.png'
import arjuna from '../assets/images/thelagend.png'
import eclat from '../assets/images/eclat.png'
import smart from '../assets/images/smart.png'
import portofolio from '../assets/images/portofolio.png'
import mebelify from '../assets/images/mebelify.png'
import '../assets/styles/Project.css';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.jatengupdates.id/" target="_blank" rel="noreferrer"><img src={jatengupdates} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.jatengupdates.id/" target="_blank" rel="noreferrer"><h2>Website Berita Jatengupdates</h2></a>
                <p>Website berbasis ReactJS dengan backend Node.JS dan Express.JS. Menggunakan MongoDB untuk penyimpanan data berita dan pengguna serta menggunakan Cloudinary sebagain penyimpanan cloud untuk foto berita.</p>
            </div>
            <div className="project">
                <a href="https://deadlinerzz.itch.io/the-legend-of-arjuna" target="_blank" rel="noreferrer"><img src={arjuna} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://deadlinerzz.itch.io/the-legend-of-arjuna" target="_blank" rel="noreferrer"><h2>Game 2D The Legend Of Arjuna</h2></a>
                <p>Dikembangkan menggunakan Unity 2D dan C# serta menggunakan Firebase Realtime database untuk menyimpan data game. Game edukasi berbasis budaya lokal dengan konsep level dan storytelling interaktif.</p>
            </div>
            <div className="project">
                <a href="https://kostanpakdarsono.online/" target="_blank" rel="noreferrer"><img src={eclat} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://kostanpakdarsono.online/" target="_blank" rel="noreferrer"><h2>SI-KONTRAK</h2></a>
                <p>Sistem berbasis web ini dirancang untuk mengelola data penyewa, unit kontrakan, dan pencatatan transaksi pembayaran secara otomatis dengan integrasi analisis data mining. Website ini dikembangan dengan menggunakan bahasa php dan database mysql.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rizkyhdylt/smart.git" target="_blank" rel="noreferrer"><img src={smart} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rizkyhdylt/smart.git" target="_blank" rel="noreferrer"><h2>Smart System</h2></a>
                <p>Sistem penunjang keputusan pembagian kelas baru untuk siswa berdasarkan keseimbangan akademik dengan metode smart berbasis website dengan bahasa php dan database mysql. </p>
            </div>
            <div className="project">
                <a href="https://rizkyhdylt.cloud/" target="_blank" rel="noreferrer"><img src={portofolio} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://rizkyhdylt.cloud/" target="_blank" rel="noreferrer"><h2>Website Portofolio Pribadi</h2></a>
                <p>Portofolio Pribadi menampilkan koleksi proyek dan keahlian yang telah dikembangkan selama berkarir di dunia pemrograman. </p>
            </div>
            <div className="project">
                <a href="https://github.com/rizkyhdylt/30-2-aplikasi-toko-mebel.git" target="_blank" rel="noreferrer"><img src={mebelify} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rizkyhdylt/30-2-aplikasi-toko-mebel.git" target="_blank" rel="noreferrer"><h2>Website E-commerce (Mebelify)</h2></a>
                <p>Website e-commerce penjualan perabotan rumah tangga dengan menggunakan NextJs dan NodeJS serta MongoDB sebagai databasenya.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;