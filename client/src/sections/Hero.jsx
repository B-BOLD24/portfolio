import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="min-h-screen  flex flex-col pt-24 justify-center text-[#F0EEE8] ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0 }}
        viewport={{ once: true }}
        className="italic text-[#999999] font-normal mt-0"
      >
        Hi, I'm
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className=" text-5xl md:text-8xl lg:text-9xl  font-black leading-none tracking-tight mt-2"
      >
        Bhushan Wadikar
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className=" text-2xl font-normal text-[#E8C547] mt-4"
      >
        Full Stack Developer
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className=" text-2xl font-normal text-[#999999] mt-6"
      >
        I build full stack web apps and teach machines to read between lines
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex gap-4   justify-start mt-10  "
      >
        <a href="#projects" className=" border border-[#F0EEE8] hover:bg-[#E8C547] hover:border-[#E8C547] hover:text-[#0C0C0C] transition-all px-8 py-4 font-normal">
          View Work
        </a>
        <a href="#contact" className="border border-[#F0EEE8] hover:bg-[#E8C547] hover:border-[#E8C547] hover:text-[#0C0C0C] transition-all px-8 py-4 font-normal">
          Contact Me
        </a>
      </motion.div>
    </div>
  );
}

export default Hero;
