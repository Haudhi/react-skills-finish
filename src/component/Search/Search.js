import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <section id="search">
      <h1 className="searchTitle">Find Courses</h1>;
      <div className="searchTwo">
        <input className="search-input" type="text" placeholder="search here...." required />
        <button className="search-btn">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </section>
  );
}
