import React from "react";
import { useNavigate } from "react-router-dom";

export default function GiftsMenu() {
  const nav = useNavigate();

  return (
    <div className="page">
      <div className="floating-hearts" />

      <div className="card center">
        <h1 className="title" style={{ fontSize: "clamp(40px, 5vw, 62px)" }}>
          Gifts Menu 🎀
        </h1>
        <p className="subtitle">Pick one… but open all 😌💗</p>

        <div className="giftsGrid">
          <div className="giftCard">
            <div className="giftIcon">🎂</div>
            <button className="btn" onClick={() => nav("/gift/1")}>
              Open me 🎂
            </button>
          </div>

          <div className="giftCard">
            <div className="giftIcon">🧸</div>
            <button className="btn" onClick={() => nav("/gift/2")}>
              Open me 🎂
            </button>
          </div>

          <div className="giftCard">
            <div className="giftIcon">💌</div>
            <button className="btn" onClick={() => nav("/gift/3")}>
              Open me 🎂
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}