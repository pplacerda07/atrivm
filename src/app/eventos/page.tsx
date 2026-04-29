import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Eventos, cursos, webinários e informes do laboratório ATRIVM UFMS.",
};

const events = [
  {
    title: "Curso de Aperfeiçoamento: Cultura Material e Ensino de História",
    desc: "Possibilidades pedagógicas para professores da educação básica e pesquisadores. Parceria entre ATRIVM, PPGAS/UFMS e PROFHIST/UEMS.",
    date: "2025",
    type: "Curso",
    status: "Realizado",
  },
  {
    title: "Sessão de Conferências 1: Projeto Bracara Augusta",
    desc: "Conferência da Profa. Dra. Fernanda Magalhães (Universidade do Minho) sobre o Projeto Bracara Augusta e a arqueologia urbana em Braga, Portugal.",
    date: "2025",
    type: "Conferência",
    status: "Realizado",
  },
  {
    title: "Webinários ATRIVM: Junho de 2025",
    desc: "Série de webinários online com pesquisadores nacionais e internacionais. Transmitidos ao vivo pelo YouTube.",
    date: "Junho 2025",
    type: "Webinário",
    status: "Realizado",
  },
  {
    title: "III Encontro Internacional e V Nacional do ATRIVM",
    desc: "\"Diálogos ibero-americanos sobre patrimônio cultural, acervos museológicos e humanidades digitais\". Campo Grande, MS. Formato presencial + webinários.",
    date: "19-24 mai 2025",
    type: "Encontro",
    status: "Realizado",
  },
  {
    title: "I Encontro da RECMA, Caicó/RN",
    desc: "Desdobramento do Encontro Nacional na UFRN-Ceres, Caicó, Rio Grande do Norte.",
    date: "26-29 mai 2025",
    type: "Encontro",
    status: "Realizado",
  },
];

const typeColors: Record<string, string> = {
  Curso: "#2d6a4f",
  Conferência: "var(--color-primary)",
  Webinário: "#5a3e7a",
  Encontro: "var(--color-gold)",
};

export default function EventosPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Agenda</p>
          <h1>Eventos e Informes</h1>
          <div className="divider" />
          <p>Cursos, conferências, webinários e registros das atividades do laboratório.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "680px", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: "1.8" }}>
              O ATRIVM realiza e participa regularmente de eventos científicos, cursos de extensão,
              webinários e conferências. Veja abaixo os eventos mais recentes e em destaque.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {events.map((ev, i) => (
              <div key={ev.title} style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "2rem",
                borderBottom: "1px solid var(--color-border)",
                padding: "2rem 0",
                alignItems: "start",
              }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    background: typeColors[ev.type] || "var(--color-primary)",
                    color: "var(--color-white)",
                    padding: "0.4rem 0.5rem",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-sans)",
                    marginBottom: "0.5rem",
                    textAlign: "center",
                  }}>{ev.type}</div>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", lineHeight: "1.4" }}>{ev.date}</p>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "var(--color-primary)" }}>
                      {ev.title}
                    </h3>
                    <span style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontFamily: "var(--font-sans)",
                      border: "1px solid var(--color-border)",
                      padding: "0.15rem 0.6rem",
                    }}>{ev.status}</span>
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.7" }}>
                    {ev.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Acompanhe o laboratório</h2>
          <div className="divider" style={{ margin: "0.75rem auto 1.5rem" }} />
          <p style={{ color: "var(--color-text-muted)", maxWidth: "480px", margin: "0 auto 2rem", fontSize: "1rem" }}>
            Siga nossas redes sociais para ficar por dentro dos próximos eventos, cursos e publicações.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.instagram.com/atrivmufms/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Instagram
            </a>
            <a href="https://www.youtube.com/@CANALATRIVMUFMS" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
