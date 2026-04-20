import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modelos 3D",
  description: "Modelos tridimensionais do acervo ATRIVM UFMS publicados no Sketchfab.",
};

const models = [
  {
    title: "Numismática Romana do MHN: Imperador Augusto",
    desc: "Digitalização de moedas romanas do acervo do Museu Histórico Nacional com fotogrametria de alta precisão.",
    link: "https://skfb.ly/psFYM",
    tag: "Numismática",
  },
  {
    title: "Programa Trilha Rupestre: Coleção Gruta da Mesa",
    desc: "Modelos tridimensionais de artefatos arqueológicos da Gruta da Mesa, parte do programa de documentação rupestre.",
    link: "https://skfb.ly/psFZ7",
    tag: "Arqueologia",
  },
  {
    title: "Coleção Completa, Lab. ATRIVM/UFMS",
    desc: "Toda a coleção de modelos 3D produzidos pelo laboratório, disponível no perfil oficial do ATRIVM no Sketchfab.",
    link: "https://skfb.ly/psFYU",
    tag: "Coleção",
  },
];

export default function Modelos3DPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Produção digital</p>
          <h1>Modelos 3D</h1>
          <div className="divider" />
          <p>Digitalização fotogramétrica de peças históricas do acervo do laboratório.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", marginBottom: "4rem" }}>
            <div>
              <h2 className="section-title">Fotogrametria e digitalização</h2>
              <div className="divider" />
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "1.25rem", color: "var(--color-text-muted)" }}>
                O laboratório utiliza técnicas de <strong style={{ color: "var(--color-text)" }}>fotogrametria</strong> para criar
                modelos tridimensionais de alta fidelidade de peças do acervo numismático e
                arqueológico, permitindo que pesquisadores e o público em geral acessem
                virtualmente objetos históricos.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "var(--color-text-muted)" }}>
                Os modelos são publicados no <strong style={{ color: "var(--color-text)" }}>Sketchfab</strong>, plataforma global
                de compartilhamento de modelos 3D, tornando o acervo acessível a pesquisadores
                e educadores de todo o mundo sem barreiras geográficas.
              </p>
            </div>
            <div className="card" style={{ borderTop: "4px solid var(--color-gold)" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", marginBottom: "1rem", color: "var(--color-primary)" }}>
                Tecnologia empregada
              </h3>
              {[
                ["Técnica", "Fotogrametria digital"],
                ["Plataforma", "Sketchfab (global)"],
                ["Finalidade", "Educação museal e patrimonial"],
                ["Acesso", "Gratuito e aberto"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid var(--color-border)", fontSize: "0.9rem" }}>
                  <span style={{ color: "var(--color-text-muted)" }}>{k}</span>
                  <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="section-title">Coleções disponíveis</h2>
          <div className="divider" />
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {models.map((m) => (
              <div key={m.title} className="card" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "2rem" }}>
                <div>
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span style={{
                      background: "var(--color-gold-pale)",
                      color: "var(--color-gold)",
                      padding: "0.2rem 0.7rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-sans)",
                    }}>{m.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-primary)", marginBottom: "0.5rem" }}>{m.title}</h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted)", lineHeight: "1.65" }}>{m.desc}</p>
                </div>
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Ver no Sketchfab
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
