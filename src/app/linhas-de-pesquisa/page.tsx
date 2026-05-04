import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Linhas de Pesquisa",
  description: "As quatro linhas de pesquisa do laboratório ATRIVM UFMS.",
};

const lines = [
  {
    num: "01",
    title: "Discursos literários e imagéticos da Antiguidade",
    desc: "Análise de obras escritas e artísticas no campo simbólico e cultural do mundo antigo. Esta linha investiga como as sociedades da Antiguidade produziram e circularam textos, imagens e representações, e como essas produções revelam estruturas de poder, religiosidade, identidade e valores culturais.",
    temas: ["Literatura Clássica", "Iconografia", "Mitologia", "Religiosidade", "História da Arte"],
  },
  {
    num: "02",
    title: "Produção, circulação e visibilidade da cultura material na Antiguidade",
    desc: "Estudo de objetos e coleções arqueológicas com foco na interpretação e contextualização histórica. A linha abrange desde objetos cotidianos até peças museológicas de alto valor histórico, articulando arqueologia, museologia e história.",
    temas: ["Arqueologia Mediterrânea", "Numismática", "Epigrafia", "Ceramologia", "Arqueologia"],
  },
  {
    num: "03",
    title: "Humanidades Digitais",
    desc: "Produção científica e educacional com apoio em novas tecnologias: digitalização, informática, virtualização e recursos digitais para o ensino de História, Numismática e Arqueologia. Uma das linhas mais inovadoras do laboratório, com projetos reconhecidos pelo CNPq.",
    temas: ["Modelos 3D e fotogrametria", "Animações científicas", "Plataformas digitais", "Ensino mediado por tecnologia", "Bases de dados abertas"],
  },
  {
    num: "04",
    title: "Ressignificações da Antiguidade",
    desc: "Estudo sobre como recortes histórico-culturais da Antiguidade são revisitados, reinterpretados e apropriados ao longo do tempo. Inclui a recepção da Antiguidade na cultura contemporânea, nos estudos medievais e nos movimentos de uso político do passado.",
    temas: ["Recepção clássica", "Usos políticos do passado", "Continuidades culturais", "Estudos medievais", "Patrimônio e memória"],
  },
];

export default function LinhasDePesquisaPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Pesquisa</p>
          <h1>Linhas de Pesquisa</h1>
          <div className="divider" />
          <p>Quatro eixos de investigação científica que orientam o laboratório.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {lines.map((line) => (
              <div key={line.num} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "2.5rem", alignItems: "start" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{
                    fontSize: "2.8rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    color: "var(--color-gold)",
                    display: "block",
                  }}>
                    {line.num}
                  </span>
                </div>
                <div style={{ borderLeft: "3px solid var(--color-gold)", paddingLeft: "2rem" }}>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--color-primary)", marginBottom: "1rem" }}>
                    {line.title}
                  </h2>
                  <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                    {line.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {line.temas.map((tema) => (
                      <span key={tema} style={{
                        background: "var(--color-gold-pale)",
                        color: "var(--color-gold)",
                        padding: "0.3rem 0.85rem",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        fontFamily: "var(--font-sans)",
                        border: "1px solid rgba(154,111,30,0.2)",
                      }}>
                        {tema}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <h2 className="section-title">Projetos associados</h2>
              <div className="divider" />
              <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                As linhas de pesquisa do ATRIVM sustentam projetos financiados pelo CNPq, FUNDECT-MS
                e UFMS, com bolsas PIBIC, PIVIC e PIBEXT para graduandos e pós-graduandos.
              </p>
              <Link href="/projetos/numismatica" className="btn btn-primary">Ver projetos</Link>
            </div>
            <div>
              {[
                { proj: "Moedas Júlio-Claudianas do MHN", period: "2022-2027" },
                { proj: "Práticas mágicas latinas (defixiones)", period: "2021-2026" },
                { proj: "Análise numismática de Hécate", period: "Em andamento" },
                { proj: "Reconstrução 3D de Miróbriga", period: "Em andamento" },
              ].map((item) => (
                <div key={item.proj} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 0", borderBottom: "1px solid var(--color-border)", gap: "1rem" }}>
                  <span style={{ fontSize: "0.95rem", color: "var(--color-text)" }}>{item.proj}</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-gold)", fontWeight: 600, whiteSpace: "nowrap" }}>{item.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
