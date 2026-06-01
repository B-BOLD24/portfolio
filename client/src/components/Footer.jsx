import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-8 px-20 flex justify-between items-center border-t border-[#222222]">
      <span className="text-sm text-[#999999]">© 2025 Karan Telgad</span>
      <div className="flex gap-6">
        <a
          href="https://github.com/B-BOLD24"
          target="_blank"
          rel="noreferrer"
          className="text-[#999999] hover:text-[#E8C547] transition-colors"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/karan-telgad-b05697359?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
          className="text-[#999999] hover:text-[#E8C547] transition-colors"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
