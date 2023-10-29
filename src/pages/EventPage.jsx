import React from 'react';
import image from "../assets/img/event/event 1.png"
import style from "../assets/css/style.css"

const EventPage = () => {
  return (
    <div className="event-detail-container">
      <div className="image-container">
        <img src={image} alt="Event" />
      </div>
      <div className="description-container">
        <h1>Seminar Bisnis</h1>
        <p><span className='fw-bold'>Tanggal Event:</span> 07 November 2023</p>
        <p><span className='fw-bold'>Deskripsi Event:</span> Acara ini bertujuan untuk memberikan wawasan dan strategi terbaru dalam bisnis, termasuk tren terkini dalam inovasi, teknologi, dan manajemen serta memberikan peserta pengetahuan dan keterampilan yang praktis. Seminar ini akan menginspirasi peserta dengan kisah sukses dan wawasan dari para pemimpin bisnis terkemuka dengan pemaparan cara mengatasi tantangan yang dihadapi bisnis mereka, serta mengambil langkah-langkah yang dibutuhkan untuk pertumbuhan dan keberhasilan jangka panjang.</p>
        <button type="button" className="btn btn-primary">Daftar Sekarang</button>
      </div>
    </div>
  );
}

export default EventPage;
