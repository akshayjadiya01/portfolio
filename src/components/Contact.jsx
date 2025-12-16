import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nxrcr6x",
        "template_4mm1q9i",
        formRef.current,
        "gNuYz715p6Biz2Qer"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black/30">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-6 gradient-text">
          Contact
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          I’m open to <span className="text-cyan-400">Data Analyst</span> and{" "}
          <span className="text-cyan-400">Machine Learning Engineer</span> roles,
          internships, and data-driven collaborations.
        </p>

        <div className="glass rounded-2xl p-8 max-w-3xl mx-auto glow">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-gray-200 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                name="from_email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-gray-200 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                required
                placeholder="Tell me about the opportunity or project"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-gray-200 focus:outline-none focus:border-cyan-400 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="
                w-full py-3 rounded-lg
                bg-cyan-500 text-black font-semibold
                hover:bg-cyan-400 transition
                shadow-lg shadow-cyan-500/30
              "
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
