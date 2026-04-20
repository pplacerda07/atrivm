import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publicações",
  description: "Publicações acadêmicas do laboratório ATRIVM UFMS disponíveis para download.",
};

const publications = [
  {
    title: "Ensino de História Antiga",
    desc: "Coletânea de estudos sobre metodologias e abordagens para o ensino da história da Antiguidade na educação básica e superior.",
    year: "2023",
    type: "Livro",
  },
  {
    title: "Ensino de História: Teorias e Metodologias",
    desc: "Obra coletiva com contribuições de pesquisadores da área de história e educação histórica.",
    year: "2022",
    type: "Livro",
  },
  {
    title: "Numismática e Patrimônio Cultural",
    desc: "Estudos sobre o acervo numismático do ATRIVM e sua relevância para a história e educação.",
    year: "2022",
    type: "Livro",
  },
  {
    title: "Humanidades Digitais e Arqueologia",
    desc: "Reflexões sobre o uso de tecnologias digitais na pesquisa arqueológica e na divulgação científica.",
    year: "2021",
    type: "Livro",
  },
  {
    title: "Defixiones: Práticas Mágicas no Mediterrâneo Antigo",
    desc: "Análise de tábuas de maldição latinas do Mediterrâneo Antigo e da Península Ibérica.",
    year: "2021",
    type: "Livro",
  },
  {
    title: "Cartilha Um Dia no Museu, Vol. 1",
    desc: "Material didático produzido para o projeto de extensão \"Um Dia no Museu\", com atividades sobre patrimônio cultural.",
    year: "2023",
    type: "Material Didático",
  },
  {
    title: "Cartilha Um Dia no Museu, Vol. 2",
    desc: "Segundo volume da série com foco na história da numismática brasileira.",
    year: "2023",
    type: "Material Didático",
  },
  {
    title: "Cartilha Um Dia no Museu, Vol. 3",
    desc: "Terceiro volume dedicado à arqueologia e ao patrimônio cultural do Mato Grosso do Sul.",
    year: "2024",
    type: "Material Didático",
  },
  {
    title: "Moedas Greco-Romanas: Catálogo Temático",
    desc: "Catálogo comentado das moedas greco-romanas do acervo do ATRIVM UFMS.",
    year: "2022",
    type: "Catálogo",
  },
  {
    title: "Anais do II Encontro Nacional do ATRIVM",
    desc: "Publicação dos trabalhos apresentados no II Encontro Nacional do ATRIVM/UFMS.",
    year: "2021",
    type: "Anais",
  },
];

export default function PublicacoesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Produção científica</p>
          <h1>Publicações</h1>
          <div className="divider" />
          <p>Obras produzidas pelo laboratório, disponíveis para acesso aberto.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: "1.75", maxWidth: "680px" }}>
              O ATRIVM produz e disponibiliza gratuitamente publicações acadêmicas voltadas ao ensino
              e à pesquisa sobre a Antiguidade, patrimônio cultural e humanidades digitais.
              Mais de <strong>25 títulos</strong> estão disponíveis para download.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
            {publications.map((pub) => (
              <div key={pub.title} className="card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{
                  background: "var(--color-primary)",
                  color: "var(--color-white)",
                  minWidth: "56px",
                  height: "72px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  flexShrink: 0,
                  fontFamily: "var(--font-sans)",
                  textAlign: "center",
                  padding: "0 0.5rem",
                  lineHeight: "1.3",
                }}>
                  {pub.year}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                    <span style={{
                      background: "var(--color-gold-pale)",
                      color: "var(--color-gold)",
                      padding: "0.15rem 0.6rem",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-sans)",
                    }}>{pub.type}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "var(--color-primary)", marginBottom: "0.4rem", lineHeight: "1.3" }}>
                    {pub.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginBottom: "0.85rem" }}>
                    {pub.desc}
                  </p>
                  <a
                    href="https://www.atrivmufms.com/publicacoes"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--color-gold)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    ↓ Baixar
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem", padding: "2rem", background: "var(--color-bg-section)", border: "1px solid var(--color-border)", textAlign: "center" }}>
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", marginBottom: "1.25rem" }}>
              Para acessar todas as publicações disponíveis, visite o catálogo completo no site oficial.
            </p>
            <a
              href="https://www.atrivmufms.com/publicacoes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ver catálogo completo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
