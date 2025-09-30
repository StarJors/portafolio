export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* NAV */}
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
        <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="font-semibold tracking-tight">José O. Rivero</a>
          <div className="hidden sm:flex gap-5 text-sm">
            <a className="hover:text-zinc-700" href="#proyectos">Proyectos</a>
            <a className="hover:text-zinc-700" href="#habilidades">Habilidades</a>
            <a className="hover:text-zinc-700" href="#experiencia">Experiencia</a>
            <a className="hover:text-zinc-700" href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="scroll-mt-24 mx-auto max-w-5xl px-4 pt-14 pb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Desarrollador Web <span className="text-zinc-500">(Python/Django)</span>
        </h1>
        <p className="mt-4 text-zinc-600 max-w-2xl">
          Backend con Django y despliegue en Render/Vercel. Proyectos reales y stack de uso diario.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#proyectos" className="inline-flex items-center rounded-2xl px-4 py-2 border shadow-sm hover:shadow bg-white">
            Ver proyectos ➜
          </a>
          <a href="https://drive.google.com/file/d/1LjCHXzAv0AQ-i8HgXl18iZEDTsWC-k3v/view?usp=drive_link" download className="inline-flex items-center rounded-2xl px-4 py-2 border shadow-sm hover:shadow bg-white">
            ⬇️ Descargar CV
          </a>
          <a href="mailto:joseriverosuarez95@gmail.com" className="inline-flex items-center rounded-2xl px-4 py-2 border shadow-sm hover:shadow bg-white">
            ✉️ Contactar
          </a>
        </div>

        <div className="mt-6 flex gap-4 text-zinc-700">
          <a className="underline hover:text-blue-600" href="https://github.com/StarJors" target="_blank" rel="noreferrer">GitHub</a>
          <a className="underline hover:text-blue-600" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>
        <p className="mt-2 text-zinc-600">Selección de trabajo reciente.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {/* Card */}
          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm hover:shadow-md bg-white transition">
            <h3 className="text-lg font-semibold">SarApp – Análisis de Riesgos</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Evaluación de amenazas/vulnerabilidades, tabla de riesgo y riesgo futuro con mitigaciones.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {["Django","PostgreSQL","Bootstrap","Render"].map(t=>(
                <span key={t} className="px-2 py-1 border rounded-full">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              <a className="underline hover:text-blue-600" href="#" target="_blank" rel="noreferrer">Demo</a>
              <a className="underline hover:text-blue-600" href="#" target="_blank" rel="noreferrer">Código</a>
            </div>
          </article>

          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm hover:shadow-md bg-white transition">
            <h3 className="text-lg font-semibold">Elecciones – Análisis de Votos</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Detección de anomalías (z-score) por circunscripción con filtros por año/departamento.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {["Django","Pandas","Chart.js","Render"].map(t=>(
                <span key={t} className="px-2 py-1 border rounded-full">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              <a className="underline hover:text-blue-600" href="#" target="_blank" rel="noreferrer">Demo</a>
              <a className="underline hover:text-blue-600" href="#" target="_blank" rel="noreferrer">Código</a>
            </div>
          </article>

          <article className="rounded-2xl border border-zinc-200 p-5 shadow-sm hover:shadow-md bg-white transition">
            <h3 className="text-lg font-semibold">TePresto – Gestión de Préstamos</h3>
            <p className="mt-2 text-sm text-zinc-600">
              CRUD de usuarios/préstamos, intereses y chatbot de cobros por WhatsApp. Reportes y balances.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {["Django","PostgreSQL","Celery","Bootstrap"].map(t=>(
                <span key={t} className="px-2 py-1 border rounded-full">{t}</span>
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
            <div key={cat} className="rounded-2xl border border-zinc-200 p-5 bg-white">
              <h3 className="font-semibold">{cat}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map(s=>(
                  <span key={s} className="text-xs px-2 py-1 border rounded-full">{s}</span>
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
          <li className="rounded-2xl border border-zinc-200 p-5 bg-white">
            <div className="flex items-center justify-between">
              <strong>SarApp · Full-Stack</strong>
              <span className="text-xs text-zinc-500">2024 — 2025</span>
            </div>
            <p className="mt-2 text-sm text-zinc-600">Modelos, vistas, PDFs y despliegue en Render con PostgreSQL.</p>
          </li>
          <li className="rounded-2xl border border-zinc-200 p-5 bg-white">
            <div className="flex items-center justify-between">
              <strong>Elecciones · Backend</strong>
              <span className="text-xs text-zinc-500">2024 — 2025</span>
            </div>
            <p className="mt-2 text-sm text-zinc-600">Z-score de anomalías y visualización por circunscripción.</p>
          </li>
        </ul>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-24 mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-2xl border border-zinc-200 p-8 bg-white">
          <h2 className="text-3xl font-bold tracking-tight">¿Trabajamos juntos?</h2>
          <p className="mt-2 text-zinc-600">Disponible para roles remotos y proyectos Django.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:joseriverosuarez95@gmail.com" className="rounded-2xl px-4 py-2 border shadow-sm hover:shadow">✉️ Enviame un correo</a>
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
