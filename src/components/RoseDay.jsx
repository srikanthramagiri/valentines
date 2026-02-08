import { motion } from "framer-motion";
import { useMemo } from "react"
import { useNavigate } from "react-router-dom";

export default function RoseBackdrop() {
   const navigate = useNavigate();
  const roses = useMemo(() => {
    return Array.from({ length: 350 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 22 + Math.random() * 38,
      rotate: Math.random() * 360,
    }))
  }, [])
 const goToPropose = () => {
    navigate("/propose-day");
  };
  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-gradient-to-br from-rose-200 via-pink-300 to-red-400">
      {/* 🌹 Scattered Roses */}
      {roses.map((rose, i) => (
        <span
          key={i}
          className="absolute select-none opacity-80"
          style={{
            top: `${rose.top}%`,
            left: `${rose.left}%`,
            fontSize: `${rose.size}px`,
            transform: `rotate(${rose.rotate}deg)`,
          }}
        >
          🌹
        </span>
      ))}

      {/* 🌫 Soft dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* 💖 Center Text */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl"  style={{ fontFamily: "'Playfair Display', serif" }}>
            Happy🌹 Day
          </h1>

          <p className="mt-4 text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-200 via-pink-200 to-white bg-clip-text text-transparent drop-shadow-lg">
            Lavanya 🌹
          </p>
          <div
            className="text-6xl md:text-8xl text-red-300 mb-4 "
            style={{ fontFamily: "'Sacramento', cursive" }}
          >
            ♥
          </div>
            <div className="flex gap-4 mt-4">
          <button
            onClick={goToPropose}
            className="flex-1 rounded-xl bg-rose-500 text-white py-2 font-semibold hover:bg-rose-600"
          >
            Yes 😍
          </button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={goToPropose}
            className="flex-1 rounded-xl bg-pink-200 text-rose-700 py-2 font-semibold"
          >
            No… where is it? 😏
          </motion.button>
        </div>
        </div>
      </div>
       {roses.map((rose, i) => (
        <span
          key={i}
          className="absolute select-none opacity-80"
          style={{
            top: `${rose.top}%`,
            left: `${rose.left}%`,
            fontSize: `${rose.size}px`,
            transform: `rotate(${rose.rotate}deg)`,
          }}
        >
          🌹
        </span>
      ))}
    </div>
  )
}