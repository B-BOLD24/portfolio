import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center py-20">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-xs tracking-widest uppercase text-[#999999]">
            Projects
          </div>
        </motion.div>

        {loading ? (
          <div className="mt-16 text-[#999999]">Loading...</div>
        ) : projects.length === 0 ? (
          <div className="mt-16 text-[#999999]">No projects yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="border border-[#222222] p-8 hover:border-[#E8C547] transition-all"
              >
                <div className="text-lg font-semibold">{project.title}</div>
                <div className="mt-2 text-sm text-[#999999] leading-relaxed">
                  {project.description}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs border border-[#333333] px-2 py-1 text-[#999999]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4 text-sm">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#E8C547] hover:underline"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#E8C547] hover:underline"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
