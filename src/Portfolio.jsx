import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, ExternalLink, Download, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "SarApp – Análisis de Riesgos",
    description:
      "Plataforma Django/PostgreSQL para evaluar amenazas, vulnerabilidades y riesgo futuro con medidas de mitigación.",
    tech: ["Django", "PostgreSQL", "Bootstrap", "Render"],
    links: {
      demo: "#",
      code: "#",
    },
  },
  {
    title: "Elecciones – Análisis de votos",
    description:
      "Dashboard con detección de anomalías (z-score) por circunscripción y filtros por departamento/año.",
    tech: ["Django", "Pandas", "Chart.js", "Render"],
    links: {
      demo: "#",
      code: "#",
    },
  },
  {
    title: "TePresto – Gestión de préstamos",
    description:
      "Sistema CRUD con cuentas, intereses, chatbot de cobros por WhatsApp y reportes de balance.",
    tech: ["Django", "PostgreSQL", "Celery", "Bootstrap"],
    links: {
      demo: "#",
      code: "#",
    },
  },
];

const skills = {
  Backend: ["Python", "Django", "DRF", "Celery"],
  Frontend: ["HTML", "CSS", "Bootstrap", "Tailwind", "JS"],
  Datos: ["PostgreSQL", "Pandas"],
  DevOps: ["Git/GitHub", "Render", "Vercel"],
};

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        {/* NAV */}
        <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800">
          <nav className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
            <a href="#inicio" className="font-semibold tracking-tight">José O. Rivero</a>
            <div className="flex items-center gap-4">
              <a href="#proyectos" className="text-sm hover:underline">Proyectos</a>
              <a href="#habilidades" className="text-sm hover:underline">Habilidades</a>
              <a href="#experiencia" className="text-sm hover:underline">Experiencia</a>
              <a href="#contacto" className="text-sm hover:underline">Contacto</a>
              <button
                onClick={() => setDark((d) => !d)}
                className="rounded-xl border px-3 py-1 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Alternar tema"
              >
                {dark ? "☀️" : "🌙"}
              </button>
            </div>
          </nav>
        </header>

        {/* HERO */}
        <section id="inicio" className="mx-auto max-w-5xl px-4 pt-16 pb-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Desarrollador Web <span className="text-zinc-500 dark:text-zinc-400">(Python/Django)</span>
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Me enfoco en construir apps desde el backend con Django hasta su despliegue en Render/Vercel.
              Aquí muestro proyectos reales y el stack que uso a diario.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition"
              >
                Ver proyectos <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition"
                download
              >
                <Download size={16} /> Descargar CV
              </a>
              <a
                href="mailto:rivero@example.com"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition"
              >
                <Mail size={16} /> Contactar
              </a>
            </div>

            <div className="mt-6 flex gap-4">
              <a href="https://github.com/StarJors" className="inline-flex items-center gap-2 hover:underline">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/jos%C3%A9-orlando-rivero-su%C3%A1rez-94b8601b8/" className="inline-flex items-center gap-2 hover:underline">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Proyectos</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Selección de trabajo reciente.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="rounded-2xl border p-5 shadow-sm hover:shadow-md transition bg-white/60 dark:bg-zinc-900/60"
              >
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs rounded-full border px-2 py-1">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3 text-sm">
                  <a className="inline-flex items-center gap-1 hover:underline" href={p.links.demo}>
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a className="inline-flex items-center gap-1 hover:underline" href={p.links.code}>
                    <Github size={16} /> Código
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Habilidades</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="rounded-2xl border p-5 bg-white/60 dark:bg-zinc-900/60">
                <h3 className="font-semibold">{cat}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="text-xs rounded-full border px-2 py-1">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Experiencia</h2>
          <ul className="mt-6 space-y-4">
            <li className="rounded-2xl border p-5 bg-white/60 dark:bg-zinc-900/60">
              <div className="flex items-center justify-between">
                <strong>SarApp · Desarrollador Full‑Stack</strong>
                <span className="text-xs text-zinc-500">2024 — 2025</span>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Diseño de modelos, vistas y reportes PDF; despliegue en Render con PostgreSQL y mejores prácticas de seguridad.
              </p>
            </li>
            <li className="rounded-2xl border p-5 bg-white/60 dark:bg-zinc-900/60">
              <div className="flex items-center justify-between">
                <strong>Elecciones · Backend</strong>
                <span className="text-xs text-zinc-500">2024 — 2025</span>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Detección de anomalías con z‑score y visualización de resultados por circunscripción.
              </p>
            </li>
          </ul>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="mx-auto max-w-5xl px-4 py-12">
          <div className="rounded-2xl border p-8 bg-gradient-to-b from-white/70 to-white/30 dark:from-zinc-900/70 dark:to-zinc-900/30">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">¿Trabajamos juntos?</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Abierto a roles remotos. Escríbeme para colaborar en productos web con Django, análisis de datos o despliegues.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:joseriverosuarez95@gmail.com" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition">
                <Mail size={16} /> joseriverosuarez95@gmail.com
              </a>
              <a href="https://github.com/StarJors" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition">
                <Github size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/jos%C3%A9-orlando-rivero-su%C3%A1rez-94b8601b8/" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border shadow-sm hover:shadow transition">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Starjors • Hecho con React + Tailwind
        </footer>
      </div>
    </div>
  );
}
