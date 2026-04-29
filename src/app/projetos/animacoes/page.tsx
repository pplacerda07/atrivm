import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animações",
  description: "Animações científicas do projeto Imago. ATRIVM UFMS.",
};

const series = [
  {
    name: "Uma Moeda de Cada Vez",
    tag: "Numismática",
    desc: "Série sobre numismática greco-romana, explorando o significado político, religioso e cultural das moedas da Antiguidade.",
    episodios: [
      "Legitimidade Imperial de Augusto",
      "Sucessão Imperial: Caio e Lúcio",
      "Batalha do Ácio",
      "Signo de Capricórnio e a religiosidade na legitimação imperial",
    ],
  },
  {
    name: "Um Dia no Museu",
    tag: "Patrimônio Cultural",
    desc: "Série sobre o Museu Histórico Nacional e o patrimônio cultural brasileiro, produzida no âmbito do projeto de extensão homônimo.",
    episodios: [
      "Uma viagem pelos 100 anos do MHN",
      "Uma aventura pelo patrimônio cultural brasileiro",
      "A formação e o acervo de Numismática do MHN",
    ],
  },
];

export default function AnimacoesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Produção digital</p>
          <h1>Animações Científicas</h1>
          <div className="divider" />
          <p>Projeto Imago: divulgação científica por meio de animações educativas.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "760px", marginBottom: "4rem" }}>
            <h2 className="section-title">Projeto Imago</h2>
            <div className="divider" />
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "1.25rem", color: "var(--color-text-muted)" }}>
              O <strong style={{ color: "var(--color-text)" }}>Projeto Imago: Animações para Divulgação Científica</strong> produz material audiovisual
              de qualidade para tornar acessíveis ao público geral os temas de pesquisa do laboratório:
              numismática, arqueologia, patrimônio e história da Antiguidade.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "var(--color-text-muted)" }}>
              As animações são publicadas no canal do YouTube do ATRIVM e utilizadas como recurso
              pedagógico em escolas e universidades parceiras.
            </p>
          </div>

          {series.map((serie) => (
            <div key={serie.name} style={{ marginBottom: "3.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <span style={{
                  background: "var(--color-gold-pale)",
                  color: "var(--color-gold)",
                  padding: "0.3rem 0.85rem",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-sans)",
                  border: "1px solid rgba(154,111,30,0.2)",
                }}>{serie.tag}</span>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--color-primary)" }}>
                  {serie.name}
                </h2>
              </div>
              <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: "1.75", marginBottom: "1.5rem", maxWidth: "680px" }}>
                {serie.desc}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {serie.episodios.map((ep, i) => (
                  <div key={ep} style={{ display: "flex", alignItems: "center", gap: "1rem", background: "var(--color-white)", border: "1px solid var(--color-border)", padding: "1rem 1.25rem" }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-gold)", minWidth: "2rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontSize: "0.95rem", color: "var(--color-text)" }}>{ep}</span>
                    <a
                      href="https://www.youtube.com/@CANALATRIVMUFMS"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginLeft: "auto", fontSize: "0.82rem", fontWeight: 700, color: "var(--color-gold)", letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: "var(--font-sans)" }}
                    >
                      Ver no YouTube →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Assista no YouTube</h2>
          <div className="divider" style={{ margin: "0.75rem auto 1.5rem" }} />
          <p style={{ color: "var(--color-text-muted)", maxWidth: "500px", margin: "0 auto 2rem", fontSize: "1rem" }}>
            Todas as animações estão disponíveis gratuitamente no canal oficial do ATRIVM UFMS no YouTube.
          </p>
          <a
            href="https://www.youtube.com/@CANALATRIVMUFMS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Acessar o canal
          </a>
        </div>
      </section>
    </>
  );
}
