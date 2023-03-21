import React from 'react';
import './hero.css';

export default function Hero() {
  return (
    <>
      <main>
        <div class="container">
          <div class="isi">
            <h1 class="text-light">Berita Hari Ini</h1>
            <p class="text-light fw-bold">Aktual, Tajam, dan Terdepan</p>
            <h3 class="tombol">
              <a href="#">Baca Seakrang</a>
            </h3>
          </div>
        </div>
      </main>
    </>
  );
}
