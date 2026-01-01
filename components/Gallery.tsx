"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section className="w-full max-w-5xl px-4 py-16 mt-[-50px] relative">
      {/* Gallery Title */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/Gallery.svg"
          alt="Gallery"
          width={334}
          height={122}
        />
      </motion.div>
    </section>
  );
}
