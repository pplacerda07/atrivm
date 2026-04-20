import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acervo de Numismática",
  description: "O maior acervo numismático universitário do Centro-Oeste brasileiro.",
};

const pieces = [
  { count: "549", label: "Cédulas" },
  { count: "4.553", label: "Moedas" },
  { count: "22.270", label: "Selos" },
  { count: "12", label: "Medalhas" },
  { count: "10", label: "Títulos públicos" },
  { count: "17", label: "Fichas telefônicas" },
];

export default function NumismaticaPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Projeto</p>
          <h1>Acervo de Numismática</h1>
          <div className="divider" />
          <p>~30.000 peças, único do gênero disponível para visitação no Centro-Oeste.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <h2 className="section-title">Sobre o acervo</h2>
              <div className="divider" />
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "1.25rem", color: "var(--color-text-muted)" }}>
                O acervo de numismática do ATRIVM UFMS é composto por aproximadamente <strong style={{ color: "var(--color-text)" }}>30.000 peças</strong>,
                abrangendo moedas da Antiguidade Mediterrânea (Grécia e Roma), Medieval, Moderna,
                Contemporânea, Imperial e Republicana Brasileira.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "1.25rem", color: "var(--color-text-muted)" }}>
                O acervo inclui também selos postais, cédulas, medalhas, fichas telefônicas e
                títulos públicos, tornando-se uma coleção única no contexto das universidades
                brasileiras.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "2rem", color: "var(--color-text-muted)" }}>
                Registrado no <strong style={{ color: "var(--color-text)" }}>IBRAM</strong> (Visite Museus) e na
                Rede Brasileira de Coleções e Museus Universitários, o laboratório é referência
                regional para pesquisadores, professores e estudantes.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contato" className="btn btn-primary">Agendar visita</Link>
                <Link href="/projetos/modelos-3d" className="btn btn-outline">Ver modelos 3D</Link>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-primary)", marginBottom: "1.5rem" }}>
                Composição do acervo
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {pieces.map((p) => (
                  <div key={p.label} style={{ background: "var(--color-white)", border: "1px solid var(--color-border)", padding: "1.25rem", textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", fontWeight: 700, color: "var(--color-gold)", lineHeight: 1, marginBottom: "0.3rem" }}>
                      {p.count}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                      {p.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="card" style={{ marginTop: "1.5rem", borderLeft: "4px solid var(--color-gold)" }}>
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", marginBottom: "0.5rem", color: "var(--color-primary)" }}>Responsável</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>Prof. Dr. Carlos Eduardo da Costa Campos</p>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "0.25rem" }}>Técnico: Luis Miguel Pereira Lacerda</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Abrangência histórica</h2>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem" }}>
            {[
              { period: "Antiguidade", desc: "Grécia e Roma" },
              { period: "Medieval", desc: "Séc. V-XV" },
              { period: "Moderno", desc: "Séc. XV-XVIII" },
              { period: "Contemporâneo", desc: "Séc. XIX-XX" },
              { period: "Brasileiro", desc: "Imperial e Republicano" },
            ].map((p) => (
              <div key={p.period} style={{ background: "var(--color-white)", border: "1px solid var(--color-border)", padding: "1.5rem 1rem", textAlign: "center" }}>
                <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--color-primary)", marginBottom: "0.3rem" }}>{p.period}</h4>
                <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ background: "var(--color-primary)", color: "var(--color-white)", padding: "3rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "var(--color-white)", marginBottom: "0.75rem" }}>
                Acervo disponível para pesquisa
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.7" }}>
                Pesquisadores e estudantes podem solicitar acesso ao acervo para fins de pesquisa acadêmica.
                Entre em contato para agendar visita ou consulta.
              </p>
            </div>
            <Link href="/contato" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>
              Solicitar acesso
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
