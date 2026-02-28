import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast.jsx";

export default function MessagePlotTwist() {
  const nav = useNavigate();
  const [toast, setToast] = useState({ show: false, msg: "" });

  const messages = useMemo(
    () => [
      "Love you babe 💖",
      "You are pure magic ✨",
      "Happy birthday handsome 😌🎂",
      "You are my world 🌍💗",
      "My day starts with you, ends with you 💞"
    ],
    []
  );

  const randomMsg = () => messages[Math.floor(Math.random() * messages.length)];

  const onPageClick = (e) => {
    // If click is inside the Next button, do nothing here.
    // We'll mark the button with data-next="true".
    const isNext = e.target.closest?.('[data-next="true"]');
    if (isNext) return;

    const msg = randomMsg();
    setToast({ show: true, msg });
    // retrigger
    setTimeout(() => setToast({ show: false, msg }), 10);
  };

  return (
    <div className="page" onClick={onPageClick}>
      <div className="floating-hearts" />

      <div className="card center">
        <h1 className="title" style={{ fontSize: "clamp(36px, 4.6vw, 58px)" }}>
          Happy Birthday bae ❤️
        </h1>
        <p className="subtitle" style={{ maxWidth: 720 }}>
          I just want you to win always.
        </p>

        <button
          className="btn"
          data-next="true"
          onClick={() => nav("/gifts")}
        >
          Next ➜
        </button>

        <div className="smallNote">
          Plot twist: click anywhere else 😌
        </div>
      </div>

      <Toast message={toast.msg} show={toast.show} />
    </div>
  );
}