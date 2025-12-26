import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Cpu,
  Briefcase,
  Award,
  ChevronRight,
  Globe,
  Phone,
} from "lucide-react";
import { RESUME_DATA } from "./constants";
import { Project, Experience } from "./types";

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-bold tracking-tighter"
        >
          SY<span className="text-white/40">.</span>
        </motion.div>
        <div className="flex gap-6 text-sm font-medium text-zinc-400">
          {["Projects", "Skills", "Experience"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 vercel-gradient pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6">
            Available for New Projects
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Shubham Yadav. <br />
            Full Stack{" "}
            <span className="text-zinc-500 italic font-medium">Developer.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-normal">
            {RESUME_DATA.summary}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={RESUME_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-zinc-200 transition-all transform hover:scale-105"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={`mailto:${RESUME_DATA.socials.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-md border border-white/10 bg-white/5 font-semibold hover:bg-white/10 transition-colors"
            >
              <Mail size={18} /> Contact
            </a>
            <a
              href={"/Shubham_Yadav.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-md border border-white/10 bg-white/5 font-semibold hover:bg-white/10 transition-colors"
            >
              <Globe size={18} /> Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <div className="flex items-center gap-3 mb-12">
    <div className="p-2 rounded-lg bg-zinc-900 border border-white/10">
      <Icon size={20} className="text-zinc-200" />
    </div>
    <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group relative rounded-xl border border-white/10 bg-zinc-950/50 overflow-hidden backdrop-blur-sm"
  >
    <div className="aspect-video w-full overflow-hidden border-b border-white/10 bg-black">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold mb-2 flex items-center justify-between group-hover:text-white transition-colors">
        {project.title}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors"
        >
          <ExternalLink size={16} />
        </a>
      </h3>
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed min-h-[80px]">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t: string) => (
          <span
            key={t}
            className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded bg-zinc-900 border border-white/5 text-zinc-500"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ExperienceItem = ({ exp }: { exp: Experience }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-12 last:pb-0 border-l border-white/10"
  >
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-zinc-500 ring-4 ring-black" />
    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1 block">
      {exp.period}
    </span>
    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
    <p className="text-zinc-400 font-medium mb-4">{exp.company}</p>
    <ul className="space-y-4">
      {exp.highlights.map((h: string, i: number) => (
        <li
          key={i}
          className="text-sm text-zinc-500 flex gap-3 leading-relaxed"
        >
          <ChevronRight size={14} className="mt-1 shrink-0 text-white/30" />
          {h}
        </li>
      ))}
    </ul>
  </motion.div>
);

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="px-4 py-2 rounded-full border border-white/10 bg-zinc-950 text-sm font-medium text-zinc-400 hover:border-white/30 hover:text-white hover:bg-zinc-900 transition-all cursor-default">
    {skill}
  </span>
);

const App = () => {
  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <Navbar />

      <main>
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeader title="Projects" icon={Code2} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {RESUME_DATA.projects.map((p, i) => (
                <ProjectCard key={i} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20 px-6 border-y border-white/5 bg-zinc-950/20"
        >
          <div className="max-w-5xl mx-auto">
            <SectionHeader title="Skills" icon={Cpu} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {Object.entries(RESUME_DATA.skills).map(([category, skills]) => (
                <div key={category} className="space-y-6">
                  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((s) => (
                      <SkillBadge key={s} skill={s} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Certs Section */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <SectionHeader title="Experience" icon={Briefcase} />
              <div className="mt-8">
                {RESUME_DATA.experience.map((exp, i) => (
                  <ExperienceItem key={i} exp={exp} />
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <SectionHeader title="Certifications" icon={Award} />
              <div className="mt-8 space-y-6">
                {RESUME_DATA.certifications.map((cert, i) => (
                  <a
                    key={i}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 rounded-xl border border-white/5 bg-zinc-950/50 hover:border-white/20 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-zinc-200 group-hover:text-white">
                        {cert.title}
                      </h3>
                      <ExternalLink
                        size={14}
                        className="text-zinc-600 group-hover:text-white transition-colors"
                      />
                    </div>
                    <p className="text-zinc-500 text-xs mb-4 uppercase tracking-tighter">
                      {cert.issuer}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="text-[9px] px-2 py-0.5 rounded-full border border-white/5 text-zinc-500 bg-zinc-900 font-mono"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-16">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">
                  Education
                </h3>
                <div className="p-6 rounded-xl border border-white/5 bg-zinc-950/50">
                  <h3 className="font-bold text-zinc-200">
                    B.Sc Computer Science
                  </h3>
                  <p className="text-zinc-500 text-xs">
                    Chhatrapati Shivaji Maharaj University • 2020 - 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 border-t border-white/5 bg-black">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-lg font-bold tracking-tighter text-white">
              SY.
            </div>
            <p className="text-zinc-600 text-xs text-center md:text-left">
              © {new Date().getFullYear()} Shubham Yadav.{" "}
              <br className="md:hidden" /> Crafted with precision.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href={RESUME_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href={RESUME_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${RESUME_DATA.socials.email}`}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Mail size={22} />
            </a>
            <a
              href={`tel:${RESUME_DATA.socials.phone}`}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Phone size={22} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
