import React, { useState, useEffect } from "react";

const TimerModal = ({ isOpen, setIsOpen }) => {
  const [timeLeft, setTimeLeft] = useState(() => parseInt(localStorage.getItem("timeLeft") || "300", 10));
  const [isRunning, setIsRunning] = useState(() => localStorage.getItem("isRunning") === "true");

  useEffect(() => {
    localStorage.setItem("timeLeft", timeLeft.toString());
    localStorage.setItem("isRunning", isRunning.toString());
  }, [timeLeft, isRunning]);

  useEffect(() => {
    if (!isRunning) return;
    if (timeLeft <= 0) {
      setIsRunning(false);
      return;
    }
    const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg w-96 relative">
          <div className="text-center text-4xl font-bold mb-4">{formatTime(timeLeft)}</div>
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => setIsRunning(!isRunning)}
            >
              {isRunning ? "Pausar" : "Iniciar"}
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => {
                setTimeLeft(300);
                setIsRunning(false);
              }}
            >
              Resetar
            </button>
          </div>
          <button
            className="absolute top-2 right-2 text-xl text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>
      </div>
    )
  );
};

export default TimerModal;
