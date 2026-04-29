import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipe",
  description: "Conheça a equipe do laboratório ATRIVM UFMS.",
};

const researchers = [
  "UFMS / FACH",
  "UFRN, Universidade Federal do Rio Grande do Norte",
  "UPF, Universidade de Passo Fundo",
  "UFRJ, Universidade Federal do Rio de Janeiro",
  "UNIFESP, Universidade Federal de São Paulo",
  "Universidade de Coimbra (Portugal)",
  "UFPel, Universidade Federal de Pelotas",
  "UNIRIO",
  "UNIOESTE",
  "Universidade de Mar del Plata (Argentina)",
  "Universidade de La Plata (Argentina)",
];

export default function EquipePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Institucional</p>
          <h1>Equipe</h1>
          <div className="divider" />
          <p>Pesquisadores, docentes e discentes que integram o ATRIVM UFMS.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Coordenação</h2>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "4rem" }}>
            <div className="card" style={{ borderTop: "4px solid var(--color-gold)" }}>
              <p className="tag" style={{ marginBottom: "0.75rem" }}>Coordenador Geral</p>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                Prof. Dr. Carlos Eduardo da Costa Campos
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted)", lineHeight: "1.65" }}>
                UFMS / FACH, Campo Grande, MS.<br />
                Bolsista de Produtividade CNPq, PQ2 (2023–2026).<br />
                Pesquisador principal dos projetos de numismática e defixiones.
              </p>
            </div>
          </div>

          <h2 className="section-title">Pesquisadores</h2>
          <div className="divider" />
          <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", marginBottom: "2rem", lineHeight: "1.7" }}>
            O ATRIVM conta com uma rede de pesquisadores vinculados a diversas instituições
            nacionais e internacionais.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "4rem" }}>
            {researchers.map((inst) => (
              <div key={inst} style={{ background: "var(--color-white)", border: "1px solid var(--color-border)", padding: "1.1rem 1.25rem" }}>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.5" }}>{inst}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title">Discentes e Colaboradores</h2>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
            {[
              { role: "Discentes", desc: "Graduandos, graduados, mestrandos, mestres e doutorandos vinculados a projetos de iniciação científica (PIBIC, PIVIC) e extensão (PIBEXT) financiados pelo CNPq e UFMS." },
              { role: "Técnico Laboratorial", desc: "Luis Miguel Pereira Lacerda, responsável técnico pelo acervo de numismática e pela preservação e catalogação das peças." },
              { role: "Web Design", desc: "Pedro Paulo Pereira Lacerda e Miguel Angelo Oliveira de Almeida, responsáveis pelo desenvolvimento e manutenção dos recursos digitais do laboratório." },
              { role: "Voluntários", desc: "Colaboradores voluntários que contribuem com atividades de pesquisa, extensão e divulgação científica nos projetos do laboratório." },
            ].map((item) => (
              <div key={item.role} className="card">
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--color-primary)", marginBottom: "0.6rem" }}>{item.role}</h3>
                <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted)", lineHeight: "1.65" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Faça parte do laboratório</h2>
          <div className="divider" style={{ margin: "0.75rem auto 1.5rem" }} />
          <p style={{ color: "var(--color-text-muted)", maxWidth: "500px", margin: "0 auto 2rem", fontSize: "1.05rem" }}>
            Estudantes e pesquisadores interessados em integrar o ATRIVM podem entrar em contato
            ou comparecer ao laboratório em nosso horário de atendimento.
          </p>
          <a href="/contato" className="btn btn-primary">Entre em contato</a>
        </div>
      </section>
    </>
  );
}
