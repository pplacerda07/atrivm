import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Um Dia no Museu",
  description: "Projeto de extensão Um Dia no Museu. ATRIVM UFMS e MHN.",
};

export default function UmDiaNoMuseuPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Extensão universitária</p>
          <h1>Um Dia no Museu</h1>
          <div className="divider" />
          <p>Levando o Museu Histórico Nacional às escolas do Mato Grosso do Sul.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "4rem", alignItems: "start" }}>
            <div>
              <h2 className="section-title">Sobre o projeto</h2>
              <div className="divider" />
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "1.25rem", color: "var(--color-text-muted)" }}>
                <strong style={{ color: "var(--color-text)" }}>Um Dia no Museu</strong> é um projeto de extensão e divulgação científica
                financiado pelo <strong style={{ color: "var(--color-text)" }}>CNPq/FNDCT/MCTI</strong> com investimento de R$ 125.000,00,
                desenvolvido em parceria com o Museu Histórico Nacional (MHN-RJ).
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "1.25rem", color: "var(--color-text-muted)" }}>
                O objetivo central é levar o conhecimento sobre o Museu Histórico Nacional, um
                dos maiores museus do Brasil, às escolas públicas do interior do Mato Grosso do Sul,
                por meio de exposições itinerantes, palestras e oficinas práticas.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "var(--color-text-muted)" }}>
                O projeto já atendeu mais de <strong style={{ color: "var(--color-text)" }}>2.000 alunos</strong> em escolas de Costa Rica,
                Coxim, Anastácio, Aquidauana, Água Clara e Campo Grande.
              </p>
            </div>

            <aside>
              <div className="card" style={{ borderTop: "4px solid var(--color-gold)", marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", marginBottom: "1rem", color: "var(--color-primary)" }}>
                  Dados do projeto
                </h3>
                {[
                  ["Financiamento", "CNPq/FNDCT/MCTI"],
                  ["Investimento", "R$ 125.000,00"],
                  ["Parceiro principal", "MHN, Rio de Janeiro"],
                  ["Alunos atendidos", "2.000+"],
                  ["Municípios", "6+"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid var(--color-border)", fontSize: "0.88rem" }}>
                    <span style={{ color: "var(--color-text-muted)" }}>{k}</span>
                    <strong style={{ color: "var(--color-primary)", textAlign: "right", maxWidth: "55%", lineHeight: "1.3" }}>{v}</strong>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Produtos gerados</h2>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
            {[
              { icon: "📚", title: "3 Cartilhas", desc: "Materiais didáticos para alunos e professores sobre patrimônio cultural e numismática." },
              { icon: "🎬", title: "Animações", desc: "Série de animações educativas sobre o MHN e o patrimônio brasileiro." },
              { icon: "📱", title: "Aplicativo mobile", desc: "Aplicativo interativo para exploração do patrimônio cultural." },
              { icon: "🎓", title: "Oficinas", desc: "Oficinas práticas de numismática e arqueologia realizadas nas escolas." },
            ].map((item) => (
              <div key={item.title} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--color-primary)", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Municípios atendidos</h2>
          <div className="divider" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {["Costa Rica, MS", "Coxim, MS", "Anastácio, MS", "Aquidauana, MS", "Água Clara, MS", "Campo Grande, MS"].map((city) => (
              <span key={city} style={{
                background: "var(--color-white)",
                border: "1px solid var(--color-border)",
                padding: "0.6rem 1.25rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                color: "var(--color-text)",
              }}>
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
