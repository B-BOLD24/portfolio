import { motion } from "framer-motion";
function Education() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-20">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-xs tracking-widest uppercase text-[#999999]  ">
          EDUCATION
        </div>
        <div className="mt-4 text-2xl font-semibold">
          B.E. Computer Engineering
        </div>

        <ul className="mt-6 flex gap-8 text-sm text-[#999999] tracking-wide">
          <li>PCCOER, Pune</li>
          <li>·</li>

          <li>2023-27 (Expected)</li>
        </ul>
        <div className="mt-10 text-2xl font-semibold">
          Data Science for Engineering-NPTEL
        </div>

        <ul className="mt-6 flex gap-8 text-sm text-[#999999] tracking-wide">
          <li>8 Week Certification</li>
          <li>·</li>

          <li>2025 </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Education;
