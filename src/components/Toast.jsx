import React, { useEffect, useState } from "react";

export default function Toast({ message, show }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!show) return;
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(t);
  }, [show, message]);

  if (!visible) return null;

  return (
    <div className="toastWrap">
      <div className="toast">{message}</div>
    </div>
  );
}