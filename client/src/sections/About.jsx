import { motion } from "framer-motion";
function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center  py-20  ">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-xs tracking-widest uppercase text-[#999999]  ">
          ABOUT ME
        </div>
        <p className="mt-4 text-lg leading-relaxed">
          Hi, I'm Bhushan Wadikar — a Computer Engineering student from Pune who
          specializes in building full stack web applications with the MERN
          stack, with a growing interest in machine learning and how it can make
          applications smarter.
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          Currently in my third year, open to internships and full time roles. I
          like building things that work well and look good.
        </p>
        <ul className="mt-10 flex gap-8 text-sm text-[#999999] tracking-wide">
          <li>Based in Pune</li>
          <li>·</li>
          <li className="text-[#E8C547]">Open to Work</li>
          <li>·</li>
          <li>MERN Stack</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default About;
