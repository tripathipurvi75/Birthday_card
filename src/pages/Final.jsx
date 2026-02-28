import React from "react";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";

export default function Final() {
  return (
    <div className="page">
      <div className="floating-hearts" />

      <div className="card center" style={{ maxWidth: 980 }}>
        <h1 className="title" style={{ fontSize: "clamp(36px, 4.8vw, 64px)" }}>
          Happiest Birthday my love… 💗
        </h1>

        <p className="subtitle" style={{ maxWidth: 820 }}>
          You make my world softer, brighter, and a little more magical — every single day.
          I’m so proud of you. Today and always… you’re my favorite person. 😌✨
        </p>

        {/* ✅ FINAL IMAGE GRID (uses global.css) */}
        <div className="pic-grid">
          <div className="pic">
            <img src={pic1} alt="pic1" />
          </div>

          <div className="pic">
            <img src={pic2} alt="pic2" />
          </div>

          <div className="pic big">
            <img src={pic3} alt="pic3" />
          </div>
        </div>

        <div className="smallNote" style={{ marginTop: 16 }}>
          Made with too much love 😌💗
        </div>
      </div>
    </div>
  );
}