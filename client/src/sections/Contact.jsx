import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields");
      return;
    }
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_API_URL}/api/messages`, formData);
      setSubmitted(true);

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    } finally {
      setLoading(false); // ← always runs
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center  py-20   ">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-xs tracking-widest uppercase text-[#999999]  ">
          CONTACT ME
        </div>
        <div className="mt-4  ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center gap-4 ">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs tracking-widest uppercase text-[#999999]"
                >
                  Name
                </label>
                <input
                  onChange={handleChange}
                  value={formData.name}
                  id="name"
                  type="text"
                  placeholder="Karan"
                  className="w-full bg-transparent border-b border-[#333333] focus:outline-none focus:border-[#E8C547] py-2 text-[#F0EEE8] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Email"
                  className="text-xs tracking-widest uppercase text-[#999999]"
                >
                  Email
                </label>
                <input
                  onChange={handleChange}
                  value={formData.email}
                  id="email"
                  type="text"
                  placeholder="Karan"
                  className="w-full bg-transparent border-b border-[#333333] focus:outline-none focus:border-[#E8C547] py-2 text-[#F0EEE8] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="Message"
                  className="text-xs tracking-widest uppercase text-[#999999]"
                >
                  Message
                </label>
                <textarea
                  onChange={handleChange}
                  value={formData.message}
                  id="message"
                  type="text"
                  rows={5}
                  placeholder="I want to..."
                  className="w-full bg-transparent border-b border-[#333333] focus:outline-none focus:border-[#E8C547] py-2 text-[#F0EEE8] transition-colors"
                />
              </div>
            </div>
            {error && (
              <div className="mt-4 text-red-500 text-sm tracking-wide">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="mt-8 border border-[#F0EEE8] px-8 py-3 hover:bg-[#E8C547] hover:border-[#E8C547] hover:text-[#0C0C0C] transition-all text-sm tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {submitted && (
            <div className="mt-4 text-[#E8C547] text-sm tracking-wide">
              Message sent successfully!
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
