import { useState, useEffect } from "react";

export default function Portfolio() {
  // tema
  const systemPrefersDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : systemPrefersDark;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // <-- este estado debe estar AQUÍ (no dentro del return)
  const [open, setOpen] = useState(false);

  // cierra el menú si la pantalla pasa a md+
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* NAV */}
      <header className="sticky top-0 z-20 border-b bg-white/80 dark:bg-zinc-900/80 backdrop-blur">
        <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img src="/Logo_Starjors.png" alt="Starjors" className="h-10 w-auto md:h-12" />
            <span className="hidden sm:block font-semibold tracking-tight">Starjors</span>
          </a>

          {/* Menú desktop */}
          <div className="hidden md:flex gap-5 items-center text-sm">
            <a className="hover:text-zinc-700 dark:hover:text-zinc-300" href="#proyectos">Proyectos</a>
            <a className="hover:text-zinc-700 dark:hover:text-zinc-300" href="#habilidades">Habilidades</a>
            <a className="hover:text-zinc-700 dark:hover:text-zinc-300" href="#experiencia">Experiencia</a>
            <a className="hover:text-zinc-700 dark:hover:text-zinc-300" href="#contacto">Contacto</a>
            <button
              onClick={() => setDark(d => !d)}
              className="rounded-xl border px-3 py-1 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Alternar tema"
              title={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {dark ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Botones mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDark(d => !d)}
              className="rounded-xl border px-3 py-1 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Alternar tema"
            >
              {dark ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setOpen(o => !o)}
              className="rounded-xl border px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Menú móvil"
              aria-expanded={open}
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </nav>

        {/* Drawer móvil */}
        {open && (
          <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur">
            <div className="max-w-5xl mx-auto px-4 py-3 grid gap-3 text-sm">
              <a onClick={() => setOpen(false)} className="py-2" href="#proyectos">Proyectos</a>
              <a onClick={() => setOpen(false)} className="py-2" href="#habilidades">Habilidades</a>
              <a onClick={() => setOpen(false)} className="py-2" href="#experiencia">Experiencia</a>
              <a onClick={() => setOpen(false)} className="py-2" href="#contacto">Contacto</a>
            </div>
          </div>
        )}
      </header>
  <section id="inicio" className="scroll-mt-24 mx-auto max-w-5xl px-4 pt-8 md:pt-14 pb-8 md:pb-10">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
    Desarrollador Web <span className="text-zinc-500">(Python/Django)</span>
  </h1>

  <p className="mt-3 md:mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl text-base sm:text-lg">
    Backend con Django y despliegue en Render/Vercel. Proyectos reales y stack de uso diario.
  </p>

  <div className="mt-5 md:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
    <a href="#proyectos" className="inline-flex justify-center rounded-2xl px-4 py-2 border shadow-sm hover:shadow bg-white dark:bg-zinc-900 text-sm sm:text-base">
      Ver proyectos ➜
    </a>
    <a
      href="https://drive.google.com/file/d/1LjCHXzAv0AQ-i8HgXl18iZEDTsWC-k3v/view?usp=drive_link"
      target="_blank" rel="noreferrer"
      className="inline-flex justify-center rounded-2xl px-4 py-2 border shadow-sm hover:shadow bg-white dark:bg-zinc-900 text-sm sm:text-base"
    >
      ⬇️ Descargar CV
    </a>
    <a
      href="https://mail.google.com/mail/?view=cm&to=joseriverosuarez95@gmail.com&su=Consulta%20desde%20el%20portafolio&body=Hola%20José%2C%20"
      target="_blank" rel="noreferrer"
      className="inline-flex justify-center rounded-2xl px-4 py-2 border shadow-sm hover:shadow bg-white dark:bg-zinc-900 text-sm sm:text-base"
    >
      ✉️ Envíame un correo (Gmail)
    </a>
  </div>

  <div className="mt-5 md:mt-6 flex flex-wrap gap-4 text-zinc-700 dark:text-zinc-300">
    <a className="underline hover:text-blue-600" href="https://github.com/StarJors" target="_blank" rel="noreferrer">GitHub</a>
    <a className="underline hover:text-blue-600" href="https://www.linkedin.com/in/starjors" target="_blank" rel="noreferrer">LinkedIn</a>
  </div>
</section>

      {/* PROYECTOS */}
      <section id="proyectos" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">Selección de trabajo reciente.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 shadow-sm hover:shadow-md bg-white dark:bg-zinc-900 transition">
            <h3 className="text-lg font-semibold">SarApp – Análisis de Riesgos</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Evaluación de amenazas/vulnerabilidades, tabla de riesgo y riesgo futuro con mitigaciones.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {["Django","PostgreSQL","Bootstrap","Render"].map(t=>(
                <span key={t} className="px-2 py-1 border rounded-full border-zinc-200 dark:border-zinc-700">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              <a className="underline hover:text-blue-600" href="#" target="_blank" rel="noreferrer">Demo</a>
              <a className="underline hover:text-blue-600" href="#" target="_blank" rel="noreferrer">Código</a>
            </div>
          </article>

          <article className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 shadow-sm hover:shadow-md bg-white dark:bg-zinc-900 transition">
            <h3 className="text-lg font-semibold">Elecciones – Análisis de Votos</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Detección de anomalías (z-score) por circunscripción con filtros por año/departamento.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {["Django","Pandas","Chart.js","Render"].map(t=>(
                <span key={t} className="px-2 py-1 border rounded-full border-zinc-200 dark:border-zinc-700">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              <a className="underline hover:text-blue-600" href="#" target="_blank" rel="noreferrer">Demo</a>
              <a className="underline hover:text-blue-600" href="#" target="_blank" rel="noreferrer">Código</a>
            </div>
          </article>

          <article className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 shadow-sm hover:shadow-md bg-white dark:bg-zinc-900 transition">
            <h3 className="text-lg font-semibold">TePresto – Gestión de Préstamos</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              CRUD de usuarios/préstamos, intereses y chatbot de cobros por WhatsApp. Reportes y balances.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {["Django","PostgreSQL","Celery","Bootstrap"].map(t=>(
                <span key={t} className="px-2 py-1 border rounded-full border-zinc-200 dark:border-zinc-700">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              <a className="underline hover:text-blue-600" href="#" target="_blank" rel="noreferrer">Demo</a>
              <a className="underline hover:text-blue-600" href="#" target="_blank" rel="noreferrer">Código</a>
            </div>
          </article>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-3xl font-bold tracking-tight">Habilidades</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {[
            ["Backend", ["Python","Django","DRF","Celery"]],
            ["Frontend", ["HTML","CSS","Bootstrap","Tailwind","JS"]],
            ["Datos", ["PostgreSQL","Pandas"]],
            ["DevOps", ["Git/GitHub","Render","Vercel"]],
          ].map(([cat, items]) => (
            <div key={cat} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900">
              <h3 className="font-semibold">{cat}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map(s=>(
                  <span key={s} className="text-xs px-2 py-1 border rounded-full border-zinc-200 dark:border-zinc-700">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-3xl font-bold tracking-tight">Experiencia</h2>
        <ul className="mt-6 space-y-4">
          <li className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900">
            <div className="flex items-center justify-between">
              <strong>SarApp · Full-Stack</strong>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">2024 — 2025</span>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Modelos, vistas, PDFs y despliegue en Render con PostgreSQL.</p>
          </li>
          <li className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900">
            <div className="flex items-center justify-between">
              <strong>Elecciones · Backend</strong>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">2024 — 2025</span>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Z-score de anomalías y visualización por circunscripción.</p>
          </li>
        </ul>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 bg-white dark:bg-zinc-900">
          <h2 className="text-3xl font-bold tracking-tight">¿Trabajamos juntos?</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Disponible para roles remotos y proyectos Django.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://mail.google.com/mail/?view=cm&to=joseriverosuarez95@gmail.com&su=Consulta%20desde%20el%20portafolio&body=Hola%20José%2C%20"
              target="_blank" rel="noreferrer"
              className="rounded-2xl px-4 py-2 border shadow-sm hover:shadow"
            >
              ✉️ Envíame un correo (Gmail)
            </a>
            <a href="https://github.com/StarJors" target="_blank" rel="noreferrer" className="rounded-2xl px-4 py-2 border shadow-sm hover:shadow">GitHub</a>
            <a href="https://www.linkedin.com/in/starjors" target="_blank" rel="noreferrer" className="rounded-2xl px-4 py-2 border shadow-sm hover:shadow">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Starjors • React + Tailwind
      </footer>
    </div>
  );
}
