"use client";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  refs: string;
  image: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function ProductCard({
  id,
  name,
  refs,
  image,
  selected = false,
  onClick,
}: ProductCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`cursor-pointer bg-white bor p-4 flex flex-col items-center border ${
        selected ? "border-black/80" : "border-black/20"
      }`}
    >
      <img src={image} alt={name} className="w-40 h-40 object-contain mb-4" />
      <h3 className="font-medium text-center">{name}</h3>
      <p className="font-semibold mt-2">{refs}</p>
    </motion.div>
  );
}
