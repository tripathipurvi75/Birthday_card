export default function FloatingHearts() {
  return (
    <div className="float-layer">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="float-item"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 3}s`
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
}