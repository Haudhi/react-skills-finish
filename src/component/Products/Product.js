import React from "react";
import "./Product.css";

export default function Product() {
  return (
    <section id="products">
      <div class="row">
        <div id="items">
          <img
            className="imgProduct"
            src="https://media.istockphoto.com/photos/asian-malay-woman-with-dental-braces-confidently-presenting-to-her-picture-id1329317944?b=1&k=20&m=1329317944&s=170667a&w=0&h=s5QwlvDD2B_59Zb3IiIgDOwTBt2a3NK0tSeXWA1FouU="
            alt="imgpr"
          />
          <h2 className="productTitle">Fundamental Web Programming</h2>
          <p id="price">
            <i class="fas fa-dollar-sign"></i> 500
          </p>
          <button className="buy">Buy</button>
        </div>
        <div id="items">
          <img
            className="imgProduct"
            src="https://media.istockphoto.com/photos/asian-malay-woman-with-dental-braces-confidently-presenting-to-her-picture-id1329317944?b=1&k=20&m=1329317944&s=170667a&w=0&h=s5QwlvDD2B_59Zb3IiIgDOwTBt2a3NK0tSeXWA1FouU="
            alt="imgpr"
          />
          <h2 className="productTitle">Fundamental Web Programming</h2>
          <p id="price">
            <i class="fas fa-dollar-sign"></i> 500
          </p>
          <button className="buy">Buy</button>
        </div>
        <div id="items">
          <img
            className="imgProduct"
            src="https://media.istockphoto.com/photos/asian-malay-woman-with-dental-braces-confidently-presenting-to-her-picture-id1329317944?b=1&k=20&m=1329317944&s=170667a&w=0&h=s5QwlvDD2B_59Zb3IiIgDOwTBt2a3NK0tSeXWA1FouU="
            alt="imgpr"
          />
          <h2 className="productTitle">Fundamental Web Programming</h2>
          <p id="price">
            <i class="fas fa-dollar-sign"></i> 500
          </p>
          <button className="buy">Buy</button>
        </div>
        <div id="items">
          <img
            className="imgProduct"
            src="https://media.istockphoto.com/photos/asian-malay-woman-with-dental-braces-confidently-presenting-to-her-picture-id1329317944?b=1&k=20&m=1329317944&s=170667a&w=0&h=s5QwlvDD2B_59Zb3IiIgDOwTBt2a3NK0tSeXWA1FouU="
            alt="imgpr"
          />
          <h2 className="productTitle">Fundamental Web Programming</h2>
          <p id="price">
            <i class="fas fa-dollar-sign"></i> 500
          </p>
          <button className="buy">Buy</button>
        </div>
      </div>
    </section>
  );
}
