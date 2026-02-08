import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function ProposeDay() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showLove, setShowLove] = useState(false);
    const moveButton = () => {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        setPosition({ x, y });
    };
    const yesHandler = () => {
        setShowLove(true)
    }
    return (
        <div className="grid grid-cols-12 min-h-screen bg-pink-100 place-items-center">
  {/* Center column */}
  <div className="col-span-12 md:col-span-6 lg:col-span-4">
    <div className="bg-white p-6 rounded-2xl shadow-xl text-center space-y-6">

      {/* Title */}
      <h1 className="text-3xl font-bold text-rose-600">
        Propose Day 💍
      </h1>

      {/* Question */}
      <p className="text-lg text-gray-700">
        Will you be mine forever? ❤️
      </p>

      {/* Buttons */}
      <div className="relative flex justify-center items-center gap-4 h-16">
        {/* YES */}
        <button
          onClick={yesHandler}
          className="px-6 py-2 rounded-xl bg-rose-500 text-white font-semibold hover:bg-rose-600"
        >
          YES 💖
        </button>

        {/* NO (runs away) */}
        <motion.button
          onMouseEnter={moveButton}
          animate={position}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-6 py-2 rounded-xl bg-gray-300 text-gray-700 cursor-not-allowed select-none"
        >
          NO 😏
        </motion.button>
      </div>

      {/* LOVE MESSAGE + VIDEO */}
      {showLove && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-4 pt-4"
        >
          <div className="flex flex-col items-center gap-2 text-2xl font-bold text-pink-600">
            I love you too ❤️
            <Heart className="w-10 h-10 text-rose-500 fill-rose-500" />
          </div>

          {/* Video */}
          <video
            className="w-full rounded-xl shadow-lg"
            controls
            playsInline
          >
            <source src="../../../public/vedios/prepose.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}

    </div>
  </div>
</div>

    );
}