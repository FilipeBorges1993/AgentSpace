"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <>
      {/* Gradient transition with Gallery title centered inside */}
      <div
        className="w-full h-[50px] flex items-center justify-center"
        style={{
          background: "linear-gradient(to bottom, #eef0f300 0%, #1a1a2e 100%)"
        }}
      >
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >

        </motion.div>
      </div>

      {/* Fixed Dark Zone - continues after gradient */}
      <div className="w-full bg-[#1a1a2e] min-h-[200px] relative flex justify-center ">
        <Image
          src="/Gallery.svg"
          alt="Gallery"
          width={334}
          height={122}
        />
      </div>
    </>
  );
}
