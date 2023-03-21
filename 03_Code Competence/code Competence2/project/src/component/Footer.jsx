import React from 'react';
import logo from '../assets/slpposedit.png';
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container ">
          <div className="row pt-4 pb-4 ">
            <div className="col-4 ">
              <img className="w-100 pt-1" src={logo} alt="logo" />
              <div className="pt-2 ps-3">
                <p className="fs-6 fw-bold">
                  Jalan Mawar NO.100 A DKI Jakarta <br />
                  INDONESIA
                </p>
                <i className="bi bi-telephone-fill"> (62323)283723</i>
              </div>
            </div>
            <div className="col-4 ">
              <h5 className="">Category</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <a className="" href="#">
                    Berita
                  </a>
                </li>
                <li className="list-group-item">
                  <a className="" href="#">
                    Makanan
                  </a>
                </li>
                <li className="list-group-item">
                  <a className="" href="#">
                    Politik
                  </a>
                </li>
              </ul>
              <p className=" fw-semibold">
                Contact US : <a href="#">admin@selatpanjang.com</a>
              </p>
            </div>
            <div className="col-4">
              <h4 className="">FOLLOW US</h4>
              <div className="row  pt-1">
                <h4>
                  <i className="bi bi-instagram" />{' '}
                  <a className="" href="https://instagram.com/ajivdy">
                    Instagram{' '}
                  </a>
                </h4>
                <h4>
                  <i className="bi bi-telegram" />{' '}
                  <a className="" href="https://t.me/ajivdy">
                    Telegram{' '}
                  </a>
                </h4>
                <h4>
                  <i className="bi bi-tiktok" />{' '}
                  <a style={{ textDecoration: 'none' }} className="" href="https://tiktok.com/@rinehax">
                    Tiktok{' '}
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
