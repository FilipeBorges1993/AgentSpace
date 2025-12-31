"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ChatDebug() {
  return (
    <section className="w-full max-w-5xl px-4 py-16 relative min-h-[400px]">
      {/* Left text */}
      <motion.p
        className="absolute left-[15%] top-[10%] text-2xl md:text-3xl max-w-[200px] -rotate-[5deg]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        .. and you never know if you never Chat ...&quot;
      </motion.p>

      {/* Right text */}
      <motion.div
        className="absolute right-[10%] top-[20%] max-w-[200px] text-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-xl rotate-3">&quot;footprints are cool ...</p>
        <p className="text-lg italic mt-2 rotate-3">
          tracing back<br />
          sometimes is more<br />
          that caring&quot;
        </p>
      </motion.div>

      {/* Paw print icon */}
      <motion.div
        className="absolute left-[60%] -translate-x-1/2 bottom-[-10%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
            times: [0, 0.5, 1]
          }}
        >
<Image
            src="/footprint.svg"
            alt="Footprint"
            width={400}
            height={100}
          />
        </motion.div>
      </motion.div>

      {/* Footprint 2 - Plan mode illustration */}
      <motion.div
        className="absolute left-[28%] bottom-[-56%]"
        initial={{ opacity: 0, y: 50, rotate: 6 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          animate={{
            y: [0, -2, 0],
            rotate: [0, 0, 0, 0, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
            times: [0, 0.25, 0.5, 0.75, 1]
          }}
        >
          <Image
            src="/footprint2.svg"
            alt="Plan mode illustration"
            width={450}
            height={300}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
