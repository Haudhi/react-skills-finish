import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section id="contacts">
      <div className="container">
        <div className="title">
          <i className="fas fa-skull-crossbones"></i> Skills.id
        </div>
        <div className="link">
          <ul className="home">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">Privacy</a>
            </li>
            <li>
              <a href="#!">Term</a>
            </li>
            <li>
              <a href="#!">FAQ</a>
            </li>
          </ul>
          <ul class="sosmed">
            <li>
              <a href="#!">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="down">
          <div class="contact">
            <h5>Contact</h5>
            <p>Pt. Cemerlang Jaya</p>
            <p>Jl. Cibodas Raya no. 27 Kebayoran Lama, Jakarta Selatan</p>
            <p>
              <i class="fas fa-phone-alt"></i> 087722772277
            </p>
            <p>
              <i class="fas fa-envelope"></i> info@skills.id
            </p>
          </div>
          <div class="category">
            <h5>Category</h5>
            <div class="cate">
              <ul>
                <li>Music</li>
                <li>Food and Beverages</li>
                <li>Design</li>
                <li>Art and Craft</li>
              </ul>
              <ul>
                <li>Music</li>
                <li>Food and Beverages</li>
                <li>Design</li>
                <li>Art and Craft</li>
              </ul>
            </div>
          </div>
          <div class="branch">
            <h5>Branch</h5>
            <ul className="branch">
              <li>Jakarta</li>
              <li>Tangerang</li>
              <li>Bekasi</li>
              <li>Bogor</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
