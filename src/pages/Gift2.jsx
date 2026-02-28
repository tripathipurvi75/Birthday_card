import React from "react";
import { useNavigate } from "react-router-dom";
import hugGif from "../assets/hug.gif";

export default function Gift2() {
  const nav = useNavigate();

  return (
    <div className="page">
      <div className="floating-hearts" />

      <div className="card center" style={{ maxWidth: 900 }}>
        <h1 className="title" style={{ fontSize: "clamp(36px, 4.6vw, 56px)" }}>
          Gift 2 🤗
        </h1>

        <img
          src={hugGif}
          alt="hug gif"
          style={{
            width: "min(360px, 78vw)",
            borderRadius: 26,
            border: "1px solid rgba(255,255,255,0.32)",
            boxShadow: "0 22px 50px rgba(255,120,170,0.22)",
            margin: "10px 0 16px"
          }}
        />

        <p className="subtitle" style={{ maxWidth: 760, whiteSpace: "pre-line" }}>
{`I’m going to hug you thisssss tightly 🤗
And then annoy you forever and ever 😌
Because that’s my full-time job now.
Congratulations… you’re stuck with me 💖`}
        </p>

        <button className="btn" onClick={() => nav("/gifts")}>
          Back to Gifts
        </button>
      </div>
    </div>
  );
}