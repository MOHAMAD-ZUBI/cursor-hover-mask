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
          {" "}
          Hi, my name is Mohamad Zubi, I Build things for the web. I’m a
          software engineer specialized in building Web & Mobile Apps.
        </p>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-afa18f text-4xl leading-16 cursor-default">
        <p className="w-[1000px] p-[30xp] text-gray-400 font-bold text-6xl">
          I'm a <span className="text-red-500">Mohamad Zubi</span> My main focus
          these days is building accessible, inclusive digital experiences for
          my clients.
        </p>
      </div>
    </main>
  );
}
