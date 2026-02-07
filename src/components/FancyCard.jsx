import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function FancyCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={cn(
        "relative w-full max-w-md rounded-2xl p-[2px]",
        "bg-gradient-to-r from-pink-500 via-red-400 to-rose-500"
      )}
    >
      <div className="relative rounded-2xl bg-white p-6 text-center">
        {/* Glow */}
        <div className="absolute inset-0 -z-10 rounded-2xl blur-xl opacity-40 
                        bg-gradient-to-r from-pink-400 to-red-400" />

        <h2 className="text-2xl font-bold text-pink-600">
          {title}
        </h2>

        <p className="mt-3 text-gray-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
}