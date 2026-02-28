import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Gift1() {
  const nav = useNavigate();
  const [blown, setBlown] = useState(false);

  useEffect(() => {
    if (!blown) return;
    const t = setTimeout(() => nav("/gifts"), 5000);
    return () => clearTimeout(t);
  }, [blown, nav]);

  return (
    <div className="page">
      <div className="floating-hearts" />

      <div className="card center" style={{ maxWidth: 900 }}>
        <h1 className="title" style={{ fontSize: "clamp(36px, 4.6vw, 56px)" }}>
          Gift 1 🎂
        </h1>
        <p className="subtitle">Make a wishh by blowing candle</p>

        <div style={{ margin: "10px 0 22px" }}>
          <Cake blown={blown} />
        </div>

        <button className="btn" onClick={() => setBlown(true)} disabled={blown}
          style={{
            opacity: blown ? 0.75 : 1,
            cursor: blown ? "not-allowed" : "pointer"
          }}
        >
          Blow me
        </button>

        {blown && (
          <div className="smallNote">
            Candle off… wish locked in 💗 (going back in 5s)
          </div>
        )}
      </div>
    </div>
  );
}

function Cake({ blown }) {
  return (
    <div style={{ width: 300, maxWidth: "78vw", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 8 }}>
        {[0,1,2].map((i) => (
          <div key={i} style={{ position: "relative", width: 14, height: 62 }}>
            <div
              style={{
                width: 12,
                height: 42,
                margin: "16px auto 0",
                borderRadius: 8,
                background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(255,255,255,0.45)",
                boxShadow: "0 10px 18px rgba(255,120,170,0.15)"
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 16,
                height: 22,
                borderRadius: "999px 999px 999px 999px",
                background: blown
                  ? "rgba(255,255,255,0.18)"
                  : "radial-gradient(circle at 40% 35%, rgba(255,255,255,0.95), rgba(255,160,80,0.85), rgba(255,90,160,0.55))",
                filter: blown ? "blur(0.5px)" : "drop-shadow(0 10px 18px rgba(255,160,80,0.35))",
                opacity: blown ? 0.2 : 1,
                transition: "opacity .35s ease, transform .35s ease",
                animation: blown ? "none" : "flame 0.9s ease-in-out infinite"
              }}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          height: 160,
          borderRadius: 34,
          background: "linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.18))",
          border: "1px solid rgba(255,255,255,0.35)",
          boxShadow: "0 22px 50px rgba(255,120,170,0.18)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 22,
            left: 24,
            right: 24,
            height: 10,
            borderRadius: 999,
            background: "rgba(255,120,170,0.25)"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 24,
            right: 24,
            height: 10,
            borderRadius: 999,
            background: "rgba(255,120,170,0.18)"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 74,
            left: 24,
            right: 24,
            height: 10,
            borderRadius: 999,
            background: "rgba(255,120,170,0.12)"
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 54,
            background: "rgba(255,255,255,0.12)"
          }}
        />
      </div>

      <style>{`
        @keyframes flame{
          0%,100%{ transform: translateX(-50%) translateY(0) scale(1); }
          50%{ transform: translateX(-50%) translateY(-3px) scale(1.06); }
        }
      `}</style>
    </div>
  );
}