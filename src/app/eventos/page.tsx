import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Eventos, cursos, webinários e informes do laboratório ATRIVM UFMS.",
};

const destaque = {
  title: "Lançamento — Uma Moeda de Cada Vez! Episódio 6",
  desc: "Edição especial para a 24ª Semana Nacional de Museus. A numismática se transforma em ferramenta de divulgação científica e educação patrimonial, explorando histórias esquecidas, representações de poder e culturas do mundo antigo através das moedas. Apoio: CNPq · FUNDECT · IBRAM.",
  date: "23 mai. 2026",
  horario: "8h",
  local: "Instagram @atrivmufms",
  type: "Lançamento",
  link: "https://www.instagram.com/p/DYNOIe0kTtE/",
};

const events = [
  {
    title: "Lançamento do Novo Site do ATRIVM / UFMS",
    desc: "O ATRIVM/UFMS apresenta seu novo site institucional como espaço de divulgação científica, reunindo projetos, acervo, eventos, publicações e parcerias em Arqueologia, História Antiga, Numismática e Humanidades Digitais.",
    date: "20 mai. 2026 · 10h",
    type: "Lançamento",
    status: "Em breve",
    link: "https://visite.museus.gov.br/24a-semana-nacional-de-museus/lancamento-do-novo-site-do-atrivm-ufms/",
  },
  {
    title: "Exposição: Um dia no Museu — do Escambo ao Pix",
    desc: "Exposição que utiliza moedas e cédulas como fontes históricas e culturais para explorar a história econômica, o patrimônio e a memória social — do escambo aos pagamentos digitais. FACH/UFMS, Corredor Central.",
    date: "18 e 19 mai. 2026 · 19h–20h30",
    type: "Exposição",
    status: "Em breve",
    link: "https://visite.museus.gov.br/24a-semana-nacional-de-museus/um-dia-no-museu-do-escambo-ao-pix/",
  },
  {
    title: "Atividade Educacional: a Numismática na Sala de Aula",
    desc: "Atividade para estudantes do Ensino Fundamental utilizando moedas e cédulas como fontes históricas para explorar economia, patrimônio e memória social. FACH/UFMS, Sala 1.",
    date: "18 e 19 mai. 2026 · 8h–11h",
    type: "Atividade",
    status: "Em breve",
    link: "https://visite.museus.gov.br/24a-semana-nacional-de-museus/um-dia-no-museu-do-escambo-ao-pix-a-numismatica-na-sala-de-aula/",
  },
  {
    title: "Ciência nas Escolas 2026 — Vem pra UFMS",
    desc: "O ATRIVM leva sua Coleção Científica de Numismática para atividade educacional com estudantes da rede municipal, promovendo contato com moedas, réplicas arqueológicas e discussões sobre História Antiga e Patrimônio Cultural. E.M. Prof. Wilson Taveira Rosalino.",
    date: "12 mai. 2026",
    type: "Extensão",
    status: "Realizado",
    link: "https://www.instagram.com/p/DYFuGkrCer9/",
  },
  {
    title: "Curso de Aperfeiçoamento: Cultura Material e Ensino de História",
    desc: "Possibilidades pedagógicas para professores da educação básica e pesquisadores. Parceria entre ATRIVM, PPGAS/UFMS e PROFHIST/UEMS.",
    date: "2025",
    type: "Curso",
    status: "Realizado",
    link: null,
  },
  {
    title: "Sessão de Conferências 1: Projeto Bracara Augusta",
    desc: "Conferência da Profa. Dra. Fernanda Magalhães (Universidade do Minho) sobre o Projeto Bracara Augusta e a arqueologia urbana em Braga, Portugal.",
    date: "2025",
    type: "Conferência",
    status: "Realizado",
    link: null,
  },
  {
    title: "Webinários ATRIVM: Junho de 2025",
    desc: "Série de webinários online com pesquisadores nacionais e internacionais. Transmitidos ao vivo pelo YouTube.",
    date: "Jun. 2025",
    type: "Webinário",
    status: "Realizado",
    link: null,
  },
  {
    title: "III Encontro Internacional e V Nacional do ATRIVM",
    desc: "\"Diálogos ibero-americanos sobre patrimônio cultural, acervos museológicos e humanidades digitais\". Campo Grande, MS. Formato presencial + webinários.",
    date: "19–24 mai. 2025",
    type: "Encontro",
    status: "Realizado",
    link: null,
  },
  {
    title: "I Encontro da RECMA, Caicó/RN",
    desc: "Desdobramento do Encontro Nacional na UFRN-Ceres, Caicó, Rio Grande do Norte.",
    date: "26–29 mai. 2025",
    type: "Encontro",
    status: "Realizado",
    link: null,
  },
];

const typeColors: Record<string, string> = {
  Curso: "#2d6a4f",
  Conferência: "var(--color-primary)",
  Webinário: "#5a3e7a",
  Encontro: "var(--color-gold)",
  Lançamento: "#c0392b",
  Exposição: "#1a6b8a",
  Atividade: "#b7770d",
  Extensão: "#2d6a4f",
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

          {/* ── DESTAQUE ── */}
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "#c0392b",
              fontFamily: "var(--font-sans)", marginBottom: "1rem",
            }}>
              ★ Destaque · 24ª Semana Nacional de Museus
            </p>
            <div style={{
              background: "var(--color-primary)",
              borderRadius: "6px",
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "0",
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            }}>
              <div style={{
                background: "linear-gradient(135deg, #0d3b5e 0%, #007b7b 100%)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                padding: "2rem 1.75rem", gap: "0.5rem", minWidth: "140px",
              }}>
                <span style={{ fontSize: "2.5rem" }}>🪙</span>
                <span style={{
                  fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "var(--color-gold)",
                  fontFamily: "var(--font-sans)", textAlign: "center",
                }}>Uma Moeda<br />de Cada Vez</span>
                <span style={{
                  fontSize: "2.8rem", fontWeight: 900, color: "#fff",
                  fontFamily: "var(--font-serif)", lineHeight: 1,
                }}>6</span>
              </div>
              <div style={{ padding: "2rem 2rem" }}>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                  <span style={{
                    background: "#c0392b", color: "#fff",
                    fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", padding: "0.2rem 0.6rem",
                    fontFamily: "var(--font-sans)",
                  }}>Lançamento</span>
                  <span style={{
                    border: "1px solid var(--color-gold)", color: "var(--color-gold)",
                    fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", padding: "0.2rem 0.6rem",
                    fontFamily: "var(--font-sans)",
                  }}>Animação</span>
                </div>
                <h2 style={{
                  fontFamily: "var(--font-serif)", fontSize: "1.4rem",
                  color: "#fff", lineHeight: 1.3, marginBottom: "0.75rem",
                }}>
                  {destaque.title}
                </h2>
                <p style={{ fontSize: "0.9rem", color: "#a0aec0", lineHeight: 1.7, marginBottom: "1rem" }}>
                  {destaque.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginBottom: "1.25rem" }}>
                  {[
                    ["📅 Data", destaque.date],
                    ["🕗 Horário", destaque.horario],
                    ["📍 Plataforma", destaque.local],
                  ].map(([label, value]) => (
                    <span key={label} style={{ fontSize: "0.82rem", color: "#cbd5e0", fontFamily: "var(--font-sans)" }}>
                      <strong style={{ color: "var(--color-gold)" }}>{label}:</strong> {value}
                    </span>
                  ))}
                </div>
                <a
                  href={destaque.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ fontSize: "0.82rem" }}
                >
                  Assistir ao lançamento →
                </a>
              </div>
            </div>
          </div>

          {/* ── LISTA DE EVENTOS ── */}
          <div style={{ maxWidth: "680px", marginBottom: "2rem" }}>
            <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: "1.8" }}>
              O ATRIVM realiza e participa regularmente de eventos científicos, cursos de extensão,
              webinários e conferências. Veja abaixo os eventos mais recentes e em destaque.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {events.map((ev) => (
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
                      color: ev.status === "Em breve" ? "#c0392b" : "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontFamily: "var(--font-sans)",
                      border: `1px solid ${ev.status === "Em breve" ? "#c0392b" : "var(--color-border)"}`,
                      padding: "0.15rem 0.6rem",
                    }}>{ev.status}</span>
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.7", marginBottom: ev.link ? "0.75rem" : "0" }}>
                    {ev.desc}
                  </p>
                  {ev.link && (
                    <a
                      href={ev.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.82rem", fontWeight: 700,
                        color: "var(--color-primary)", fontFamily: "var(--font-sans)",
                        textDecoration: "underline",
                      }}
                    >
                      Saiba mais →
                    </a>
                  )}
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
