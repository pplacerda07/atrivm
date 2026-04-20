import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Encontro Internacional e Nacional",
  description: "III Encontro Internacional e V Nacional do ATRIVM UFMS, maio de 2025.",
};

const minicursos = [
  {
    titulo: "Antiguidade Tardia e Numismática",
    prof: "Prof. Dr. Claudio Umpierre Carlan",
    inst: "UNIFAL, Universidade Federal de Alfenas",
  },
  {
    titulo: "Curadoria e Conservação de Metais Arqueológicos",
    prof: "Dra. Marjori Pacheco Dias",
    inst: "MAE/USP, Museu de Arqueologia e Etnologia",
  },
  {
    titulo: "Dados, Memória e Inteligência Artificial",
    prof: "Juliane Helanski",
    inst: "UNICAMP, Universidade de Campinas",
  },
];

const parceiros = [
  "Universidade do Minho (Portugal)",
  "Museu Histórico Nacional (RJ)",
  "MAE/USP",
  "UFSM",
  "UFSC",
  "FACH/UFMS",
  "UEMS / PROFHIST",
  "PPGAS/UFMS",
];

export default function EncontroPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Evento</p>
          <h1>Encontro Internacional e Nacional do ATRIVM</h1>
          <div className="divider" />
          <p>III Encontro Internacional e V Nacional. Campo Grande, MS.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "4rem", alignItems: "start" }}>
            <div>
              <div style={{ background: "var(--color-gold-pale)", border: "1px solid rgba(154,111,30,0.25)", padding: "1.5rem 2rem", marginBottom: "2.5rem" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontStyle: "italic", color: "var(--color-primary)", lineHeight: "1.5" }}>
                  "Diálogos ibero-americanos sobre patrimônio cultural, acervos museológicos e humanidades digitais"
                </p>
              </div>

              <h2 className="section-title">Sobre o encontro</h2>
              <div className="divider" />
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "1.25rem", color: "var(--color-text-muted)" }}>
                O <strong style={{ color: "var(--color-text)" }}>III Encontro Internacional e V Nacional do ATRIVM/UFMS</strong> é
                o principal evento do laboratório, reunindo pesquisadores do Brasil, Portugal,
                Argentina e outros países para debater patrimônio cultural, arqueologia,
                numismática e humanidades digitais.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "1.25rem", color: "var(--color-text-muted)" }}>
                O evento ocorreu em formato misto, com sessões presenciais em Campo Grande (MS)
                e webinários transmitidos pelo YouTube para participantes remotos.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "var(--color-text-muted)" }}>
                Com o apoio da <strong style={{ color: "var(--color-text)" }}>FUNDECT-MS</strong> e da
                Bolsa PQ2 do CNPq, o encontro contou com minicursos, conferências e
                comunicações científicas de pesquisadores de todo o Brasil e do exterior.
              </p>
            </div>

            <aside>
              <div className="card" style={{ borderTop: "4px solid var(--color-gold)" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", marginBottom: "1.25rem", color: "var(--color-primary)" }}>
                  Informações
                </h3>
                {[
                  ["Edição", "III Internacional / V Nacional"],
                  ["Data", "19 a 24 de maio de 2025"],
                  ["Local", "Campo Grande, MS"],
                  ["Formato", "Presencial + Webinários"],
                  ["Patrocínio", "FUNDECT-MS / CNPq"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid var(--color-border)", fontSize: "0.88rem", gap: "0.5rem" }}>
                    <span style={{ color: "var(--color-text-muted)", flexShrink: 0 }}>{k}</span>
                    <strong style={{ color: "var(--color-primary)", textAlign: "right", lineHeight: "1.3" }}>{v}</strong>
                  </div>
                ))}
                <div style={{ marginTop: "1.25rem", padding: "1rem", background: "var(--color-bg-section)", borderTop: "1px solid var(--color-border)" }}>
                  <p style={{ fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-gold)", marginBottom: "0.4rem" }}>Desdobramento</p>
                  <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: "1.5" }}>
                    I Encontro da RECMA, Caicó/RN<br />
                    UFRN-Ceres: 26–29 mai 2025
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Minicursos</h2>
          <div className="divider" />
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {minicursos.map((mc, i) => (
              <div key={mc.titulo} className="card" style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "1.5rem", alignItems: "start" }}>
                <div style={{
                  background: "var(--color-primary)",
                  color: "var(--color-white)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "56px",
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-primary)", marginBottom: "0.4rem" }}>{mc.titulo}</h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--color-text)", fontWeight: 600, marginBottom: "0.15rem" }}>{mc.prof}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{mc.inst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Parceiros e apoiadores</h2>
          <div className="divider" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {parceiros.map((p) => (
              <span key={p} style={{
                background: "var(--color-white)",
                border: "1px solid var(--color-border)",
                padding: "0.6rem 1.25rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                color: "var(--color-text)",
              }}>{p}</span>
            ))}
          </div>
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <a href="https://www.youtube.com/@atrivmufms" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginRight: "1rem" }}>
              Assistir gravações no YouTube
            </a>
            <Link href="/contato" className="btn btn-outline">
              Fale conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
