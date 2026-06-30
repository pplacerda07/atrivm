import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos de pesquisa, ensino e extensão do laboratório ATRIVM UFMS.",
};

const projects = [
  {
    href: "/projetos/numismatica",
    title: "Acervo de Numismática",
    tag: "Pesquisa",
    desc: "~30.000 peças: moedas, cédulas, selos e medalhas da Antiguidade ao contemporâneo. Único do gênero disponível para visitação no Centro-Oeste.",
  },
  {
    href: "/projetos/um-dia-no-museu",
    title: "Um Dia no Museu",
    tag: "Extensão",
    desc: "Projeto financiado pelo CNPq/MCTI que leva o Museu Histórico Nacional às escolas do Mato Grosso do Sul. Mais de 4.000 alunos atendidos.",
  },
  {
    href: "/projetos/animacoes",
    title: "Animações Científicas",
    tag: "Divulgação",
    desc: "Projeto Imago: séries de animações sobre numismática greco-romana e patrimônio cultural. Disponíveis no YouTube.",
  },
  {
    href: "/projetos/modelos-3d",
    title: "Modelos 3D",
    tag: "Digital",
    desc: "Digitalização fotogramétrica de peças do acervo publicadas no Sketchfab para acesso global de pesquisadores e educadores.",
  },
  {
    href: "/projetos/podcast",
    title: "Podcast",
    tag: "Divulgação",
    desc: "\"ATRIVM no Ar\" e \"Numismática Para Todos\": debates sobre Antiguidade, patrimônio e humanidades digitais disponíveis no Spotify.",
  },
  {
    href: "/eventos",
    title: "Eventos e Informes",
    tag: "Agenda",
    desc: "Cursos de aperfeiçoamento, conferências, webinários e o Encontro Internacional e Nacional do ATRIVM.",
  },
];

const researchProjects = [
  { title: "Moedas Júlio-Claudianas do MHN", period: "2022-2027", fund: "CNPq" },
  { title: "Práticas mágicas latinas (defixiones)", period: "2021-2026", fund: "CNPq / UFMS" },
  { title: "Análise numismática de Hécate", period: "Em andamento", fund: "UFMS" },
  { title: "Reconstrução 3D de Miróbriga", period: "Em andamento", fund: "UFMS" },
];

export default function ProjetosPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Atividades</p>
          <h1>Projetos</h1>
          <div className="divider" />
          <p>Pesquisa, ensino e extensão que conectam o passado ao presente.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Projetos e iniciativas</h2>
            <div className="divider" />
            <p className="section-subtitle">
              O laboratório desenvolve projetos em áreas complementares: pesquisa científica, extensão universitária e produção de recursos digitais.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
            {projects.map((p) => (
              <Link key={p.href} href={p.href} style={{ background: "var(--color-white)", border: "1px solid var(--color-border)", padding: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem", transition: "border-color 0.2s, transform 0.2s" }} className="card">
                <span style={{
                  background: "var(--color-gold-pale)",
                  color: "var(--color-gold)",
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-sans)",
                  alignSelf: "flex-start",
                }}>{p.tag}</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "var(--color-primary)" }}>{p.title}</h3>
                <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted)", lineHeight: "1.7", flex: 1 }}>{p.desc}</p>
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: "var(--font-sans)" }}>
                  Ver projeto →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
            <div>
              <h2 className="section-title">Projetos de pesquisa</h2>
              <div className="divider" />
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {researchProjects.map((rp) => (
                  <div key={rp.title} style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "1rem", padding: "1rem 0", borderBottom: "1px solid var(--color-border)", alignItems: "center" }}>
                    <span style={{ fontSize: "0.95rem", color: "var(--color-text)" }}>{rp.title}</span>
                    <span style={{ fontSize: "0.82rem", color: "var(--color-gold)", fontWeight: 700, fontFamily: "var(--font-sans)", whiteSpace: "nowrap" }}>{rp.period}</span>
                    <span style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", whiteSpace: "nowrap" }}>{rp.fund}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="section-title">Cooperação técnica</h2>
              <div className="divider" />
              {[
                { inst: "Museu Histórico Nacional", detail: "Acordo UFMS nº 71/2022: Numismática" },
                { inst: "Universidade do Minho (Portugal)", detail: "Arqueologia e estudos ibéricos" },
                { inst: "Município de Alter do Chão (Portugal)", detail: "Projeto CIVITAS" },
                { inst: "Universidade Nova de Lisboa", detail: "NOVA FCSH, Humanidades" },
              ].map((item) => (
                <div key={item.inst} style={{ padding: "1rem 0", borderBottom: "1px solid var(--color-border)" }}>
                  <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-primary)", marginBottom: "0.2rem" }}>{item.inst}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
