import { motion } from "framer-motion";
const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "HTML", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "SQL"],
  },
  {
    category: "Other",
    items: ["Python", "C++", "Java"],
  },
];

function Skills() {
  return (
    <div className="  min-h-screen flex flex-col justify-center py-20">
      <motion.div
        className="max-w-4xl "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className=" text-xs tracking-widest uppercase text-[#999999]">
          SKILLS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16 ">
          {skills.map((group) => (
            <div key={group.category}>
              <div className="text-lg font-semibold text-[#E8C547] ">
                {group.category}
              </div>

              <ul className="mt-4 space-y-2 text-[#999999] text-sm   ">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
