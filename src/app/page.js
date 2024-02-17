"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import useMousePosition from "./utils/useMousePosition";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;
  return (
    <main className=" h-[100vh] text-[#ec4e39] bg-black ">
      <motion.div
        className="mask bg-[#ec4e39] text-gray-400 absolute w-full h-full flex items-center justify-center font-bold  text-6xl leading-16 cursor-default"
        style={{
          maskImage: "url('/assets/mask.svg')",
          maskRepeat: "no-repeat",
          maskSize: "10px",
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          className="w-[1000px] p-[30xp] font-bold"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          A visual designer - with skills that haven't been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-afa18f text-4xl leading-16 cursor-default">
        <p className="w-[1000px] p-[30xp] text-gray-400 font-bold text-6xl">
          I'm a <span className="text-red-500">selectively skilled</span>{" "}
          product designer with strong focus on producing high quality &
          impactful digital experience.
        </p>
      </div>
    </main>
  );
}
