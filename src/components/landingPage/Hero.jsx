import React from 'react';
import { Link } from 'react-router-dom';
import './heroStyle.css';
import data from '../createProduct/dataProduct';
import imgHero from '../../assets/hero-img.png';
export default function Hero() {
  return (
    <>
      <main>
        <div className="container-main">
          <div className="container-kiri">
            <h1 className="text-hero">Better Solutions For Your Business</h1>
            <p className="text-keterangan">We are team of talented designers making websites with Boostrap</p>
            <div className="tombol">
              <a href="#" id="tombol-kiri">
                Get Started
              </a>
              <a href="#" id="tombol-kanan">
                Watch Video
              </a>
            </div>
          </div>
          <div className="container-kanan">
            <img src={imgHero} />
          </div>
        </div>
        <div className="container mb-4">
          <h1>Product List</h1>
          <div className="flex d-flex">
            {data.map((item) => (
              <div className="card w-25 m-5" key={item.id}>
                <img src={item.image} />
                <div className="card-body">
                  <h3>{item.productName}</h3>
                  <p className="card-text">{item.productDescription}</p>
                  <div className="d-flex">
                    <Link to={`/${item.id}`} className=" border-opacity-50  text-secondary-emphasis text-decoration-none card-link border border-success p-1">
                      Detail View
                    </Link>
                    <p style={{ marginLeft: 100 }}>9 Min</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/createproduct" className="text-white p-2 bg-primary text-decoration-none card-link border border-success p-1">
            Create Product
          </Link>
          <Link to="/createproduct" className="text-white p-2 bg-primary text-decoration-none card-link border border-success p-1" style={{ marginLeft: 1000 }}>
            Load More...
          </Link>
        </div>
        <div className="subsribe">
          <div className="subsribe-text">
            <h2>Join Our Newsletter</h2>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="">
              <input type="text" required="" />
              <button className="buttonSubscribe" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <footer>
          <div className="footer-deskripsi">
            <div className="deskripsi-alamat">
              <h1>ARSHA</h1>
              <p>
                A108 Adam Street <br />
                New York, NY 535022 <br />
                United States <br /> <br />
                <span>Phone:</span> +1 5589 55488 55 <br />
                <span>Email:</span> info@example.com
              </p>
            </div>
            <div className="useful">
              <h2>Useful Links</h2>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="services">
              <h2>Our Services</h2>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
            <div className="social">
              <h2>Our Social Networks</h2>
              <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
              <div className="social-account">
                <a href="" />
                <a href="" />
                <a href="" />
                <a href="" />
                <a href="" />
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className=" copyright-deskripsi">
              <div className="copyright-kiri">
                Copyright <span>Arsha.</span> All Rights Reserved
              </div>
              <div className="copyright-kanan">
                Designed by <a href="#">BootstrapMade</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
