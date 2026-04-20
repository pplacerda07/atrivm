import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast",
  description: "Podcasts do laboratório ATRIVM UFMS: ATRIVM no Ar e Numismática Para Todos.",
};

const podcasts = [
  {
    name: "ATRIVM no Ar",
    tag: "Principal",
    desc: "Podcast oficial do laboratório com entrevistas, debates e conversas sobre Antiguidade, Patrimônio Cultural e Humanidades Digitais. Traz pesquisadores do Brasil e do exterior.",
    link: "https://open.spotify.com/show/1T6yz5WZ3UvKLx5d54ejLe",
    plataforma: "Spotify",
  },
  {
    name: "Numismática Para Todos",
    tag: "Divulgação",
    desc: "Série de entrevistas com pesquisadores, professores e colecionadores sobre numismática histórica. Aborda desde moedas gregas e romanas até a numismática brasileira.",
    link: "https://open.spotify.com/show/1T6yz5WZ3UvKLx5d54ejLe",
    plataforma: "Spotify",
  },
  {
    name: "Notícias do ATRIVM",
    tag: "Informativo",
    desc: "Divulgação interna das atividades do laboratório: eventos, congressos, publicações e informes sobre os projetos em andamento.",
    link: "https://open.spotify.com/show/1T6yz5WZ3UvKLx5d54ejLe",
    plataforma: "Spotify",
  },
];

export default function PodcastPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Produção digital</p>
          <h1>Podcast</h1>
          <div className="divider" />
          <p>ATRIVM no Ar e Numismática Para Todos: Antiguidade e patrimônio em áudio.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "680px", marginBottom: "4rem" }}>
            <h2 className="section-title">Divulgação científica em áudio</h2>
            <div className="divider" />
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "var(--color-text-muted)" }}>
              O ATRIVM produz três iniciativas de podcast voltadas à divulgação científica,
              ao diálogo entre pesquisadores e ao registro das atividades do laboratório.
              Disponíveis gratuitamente no Spotify.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {podcasts.map((pod) => (
              <div key={pod.name} className="card" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{
                      background: "var(--color-gold-pale)",
                      color: "var(--color-gold)",
                      padding: "0.2rem 0.7rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-sans)",
                    }}>{pod.tag}</span>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "var(--color-primary)" }}>{pod.name}</h3>
                  </div>
                  <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: "1.75", marginBottom: "0.75rem" }}>
                    {pod.desc}
                  </p>
                  <span style={{ fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
                    Disponível no {pod.plataforma}
                  </span>
                </div>
                <a
                  href={pod.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Ouvir no Spotify
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Ouça agora no Spotify</h2>
          <div className="divider" style={{ margin: "0.75rem auto 1.5rem" }} />
          <p style={{ color: "var(--color-text-muted)", maxWidth: "480px", margin: "0 auto 2rem", fontSize: "1rem" }}>
            Todos os episódios estão disponíveis gratuitamente no Spotify.
          </p>
          <a
            href="https://open.spotify.com/show/1T6yz5WZ3UvKLx5d54ejLe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Acessar no Spotify
          </a>
        </div>
      </section>
    </>
  );
}
