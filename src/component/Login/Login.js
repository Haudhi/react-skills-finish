import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function loginn(e) {
    e.preventDefault();

    let item = { username, password };
    fetch("https://tasklogin.herokuapp.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    })
      // .then((response) => response.json())
      .then((result) => {
        if (result.ok) {
          alert("You are logged in.");
        } else {
          alert("Please check your login information.");
        }
      });
  }

  return (
    <section className="loginn">
      <div className="main">
        <p className="top">Silahkan masuk ke akun anda</p>
        <form id="form">
          <label id="email">Email</label>
          <br />
          <input class="input" type="email" onChange={(e) => setUsername(e.target.value)} placeholder="Masukkan Email Anda" required />
          <br />
          <label id="email">Password</label>
          <br />
          <input class="input" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password Anda" required />
        </form>
        <p className="lupa">Lupa Password?</p>
        <br />
        <label className="cekbok">
          <input className="checkbox" type="checkbox" />
          Remember me
          <br />
        </label>
        <button className="btnLogin" onClick={loginn}>
          Masuk
        </button>
        <p className="belum">
          Belum Punya Akun? <span>daftar sekarang</span>
        </p>
      </div>
    </section>
  );
}
