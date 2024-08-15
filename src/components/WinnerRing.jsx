import { motion } from "framer-motion";

export default function WinnerRing() {
  return (
    <motion.div
      className="absolute w-[140px] h-[140px] -top-[15px] -left-[15px] rounded-full shadow-[0_0_40px_10px_rgba(245,245,244,0.6)]
        lg:w-[200px] lg:h-[200px] lg:-top-[25px] lg:-left-[25px]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
    />
  )
}