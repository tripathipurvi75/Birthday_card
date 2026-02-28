import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();

  return (
    <div className="page">
      <div className="floating-hearts" />
      <div className="card center">
        <h1 className="title">Let’s Play Something Special… 🎀</h1>
        <p className="subtitle">A tiny game made just for you 💗</p>

        <button className="btn" onClick={() => nav("/game")}>
          Start Game 💖
        </button>

        <div className="smallNote">Hint: This game is for you😌</div>
      </div>
    </div>
  );
}