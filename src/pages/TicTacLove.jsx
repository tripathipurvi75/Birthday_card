import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const HEART = "💖";
const STAR = "✨";

const wins = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6],
];

function checkWin(board, sym) {
  return wins.some(line => line.every(i => board[i] === sym));
}

function emptyCells(board) {
  return board.map((v,i)=> (v ? null : i)).filter(v => v !== null);
}

/**
 * "He wins always" trick:
 * - Computer never blocks a winning move
 * - Computer plays harmless cells
 * - If the player is not about to win naturally, we give a subtle "Cupid Bonus Heart"
 *   once, which guarantees a win within a few turns.
 */
export default function TicTacLove() {
  const nav = useNavigate();

  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("player"); // player -> cpu -> player
  const [winner, setWinner] = useState(null);
  const [usedBonus, setUsedBonus] = useState(false);

  const movesCount = useMemo(
    () => board.filter(Boolean).length,
    [board]
  );

  // CPU move (never blocks)
  useEffect(() => {
    if (winner) return;
    if (turn !== "cpu") return;

    const t = setTimeout(() => {
      setBoard(prev => {
        const b = [...prev];
        const empties = emptyCells(b);

        // Harmless priority: corners then edges (avoid center a bit)
        const priority = [0,2,6,8,1,3,5,7,4].filter(i => b[i] === "");
        const pick = priority[0] ?? empties[0];

        if (pick !== undefined) b[pick] = STAR;
        return b;
      });
      setTurn("player");
    }, 520);

    return () => clearTimeout(t);
  }, [turn, winner]);

  // Check win states after each board update
  useEffect(() => {
    if (winner) return;
    if (checkWin(board, HEART)) setWinner("player");
    else if (checkWin(board, STAR)) setWinner("cpu");
    else if (emptyCells(board).length === 0) setWinner("draw");
  }, [board, winner]);

  // Cupid bonus: if player isn't close to winning, add 1 extra heart once
  useEffect(() => {
    if (winner) return;
    if (usedBonus) return;

    // After player has placed 2 hearts, we ensure a near-certain win
    const hearts = board.filter(v => v === HEART).length;
    if (hearts < 2) return;

    // If player already can win next move, no need
    const empties = emptyCells(board);
    const canWinNext = empties.some(i => {
      const b2 = [...board];
      b2[i] = HEART;
      return checkWin(b2, HEART);
    });

    if (canWinNext) return;

    // Place bonus heart in a strategic spot (prefer center, else a corner)
    const t = setTimeout(() => {
      setBoard(prev => {
        const b = [...prev];
        const prefer = [4,0,2,6,8,1,3,5,7].find(i => b[i] === "");
        if (prefer !== undefined) b[prefer] = HEART;
        return b;
      });
      setUsedBonus(true);
    }, 520);

    return () => clearTimeout(t);
  }, [board, usedBonus, winner]);

  // After win, animate + auto navigate
  useEffect(() => {
    if (winner !== "player") return;
    const t = setTimeout(() => nav("/message"), 1600);
    return () => clearTimeout(t);
  }, [winner, nav]);

  const handleClick = (idx) => {
    if (winner) return;
    if (turn !== "player") return;
    if (board[idx]) return;

    setBoard(prev => {
      const b = [...prev];
      b[idx] = HEART;
      return b;
    });

    // If player just won, don't hand turn
    setTimeout(() => {
      setTurn("cpu");
    }, 120);
  };

  return (
    <div className="page">
      <div className="floating-hearts" />

      <div className="boardWrap">
        <h1 className="boardTitle">Tic-Tac-Love</h1>
        <p className="boardSub">Can you win my heart? 💗</p>

        <div className="grid">
          {board.map((v, i) => (
            <button key={i} className="cell" onClick={() => handleClick(i)}>
              {v}
            </button>
          ))}
        </div>

        <div className="hud">
          <div className="badge">You: {HEART}</div>
          <div className="badge">Computer: {STAR}</div>
          <div className="badge">Moves: {movesCount}</div>
        </div>
      </div>

      {winner === "player" && (
        <div className="winOverlay">
          <div className="winCard">
            <div className="sparkles">💖✨💖</div>
            <h2 style={{ margin: "10px 0 6px", fontFamily: "Playfair Display, serif" }}>
              You Win… obviously 😌
            </h2>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.75)", fontWeight: 700 }}>
              Because you deserve to win — always.
            </p>
          </div>
        </div>
      )}

      {winner === "draw" && (
        <div className="winOverlay">
          <div className="winCard">
            <div className="sparkles">😌💗</div>
            <h2 style={{ margin: "10px 0 6px", fontFamily: "Playfair Display, serif" }}>
              Okay okay… still your win.
            </h2>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.75)", fontWeight: 700 }}>
              Love rules say you win anyway.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}