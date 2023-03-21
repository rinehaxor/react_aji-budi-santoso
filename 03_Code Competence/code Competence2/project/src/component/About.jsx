import React from 'react';
import about from '../assets/about.png';

export default function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img style={{ width: 500 }} src={about} alt="about" />
          </div>
          <div style={{ margin: 'auto' }} className="col-6">
            <h5 className="">ABOUT US</h5>
            <p className=" fs-6 fw-light">Selatpost adalah sebuah website yang menyajikan informasi, berita, teknlogi terkini hingga semua orang dapat mendapatkan informasi secara cepat dan akurat.</p>
          </div>
        </div>
      </div>
    </>
  );
}
