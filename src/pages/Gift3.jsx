import React from "react";
import { useNavigate } from "react-router-dom";
import kissesGif from "../assets/kisses.gif";

export default function Gift3() {
  const nav = useNavigate();

  return (
    <div className="page">
      <div className="floating-hearts" />

      <div className="card center" style={{ maxWidth: 900 }}>
        <h1 className="title" style={{ fontSize: "clamp(36px, 4.6vw, 56px)" }}>
          Gift 3 💋
        </h1>

        <img
          src={kissesGif}
          alt="kisses gif"
          style={{
            width: "min(360px, 78vw)",
            borderRadius: 26,
            border: "1px solid rgba(255,255,255,0.32)",
            boxShadow: "0 22px 50px rgba(255,120,170,0.22)",
            margin: "10px 0 16px"
          }}
        />

        <p className="subtitle" style={{ maxWidth: 760, whiteSpace: "pre-line" }}>
{`Sending you unlimited kisses and all the happiness in the world 💖
And yes…
Those cute cheeks?
Permanantly Booked by me . No returns. No exchange 😌💋`}
        </p>

        <button className="btn" onClick={() => nav("/final")}>
          Next ➜
        </button>
      </div>
    </div>
  );
}