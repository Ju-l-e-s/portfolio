"use client";
import { motion } from "framer-motion";
import AnimatedGradientText from "../ui/AnimatedGradientText";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 md:mb-16 lg:mb-24 text-white">
            Let’s build something
            <br />
            <AnimatedGradientText>useful.</AnimatedGradientText>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
            I’m looking for a junior role (full-time or internship) and I’m open
            to collaborations on concrete, deployable projects.
          </p>
          <div className="w-full max-w-4xl bg-white/5 border border-white/10 p-6 md:p-16 rounded-3xl backdrop-blur-xl shadow-2xl">
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-300"
                >
                  Name
                </label>
                <input
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/60 transition-all duration-300 text-white placeholder-gray-500 hover:border-white/20 focus:shadow-[0_0_0_6px_rgba(34,211,238,0.2)]"
                  placeholder="Your name"
                  name="name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/60 transition-all duration-300 text-white placeholder-gray-500 hover:border-white/20 focus:shadow-[0_0_0_6px_rgba(34,211,238,0.2)]"
                  placeholder="your@email.com"
                  name="email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/60 transition-all duration-300 resize-none text-white placeholder-gray-500 hover:border-white/20 focus:shadow-[0_0_0_6px_rgba(34,211,238,0.2)]"
                  placeholder="What are you building / hiring for?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group cursor-pointer gradient-animated-text text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 text-base px-8 py-4 gap-2.5 w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-10"></div>
                <span className="relative z-20">Send Message</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
