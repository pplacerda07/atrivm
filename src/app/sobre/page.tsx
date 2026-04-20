import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça o laboratório ATRIVM UFMS: história, missão e parcerias.",
};

export default function SobrePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Institucional</p>
          <h1>Sobre o ATRIVM</h1>
          <div className="divider" />
          <p>Laboratório de Estudos Interdisciplinares e Grupo de Pesquisa da UFMS.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "4rem", alignItems: "start" }}>
            <div>
              <h2 className="section-title">Missão e identidade</h2>
              <div className="divider" />
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "1.5rem", color: "var(--color-text-muted)" }}>
                O <strong style={{ color: "var(--color-text)" }}>ATRIVM, Espaço Interdisciplinar de Estudos da Antiguidade,</strong> é um laboratório
                e grupo de pesquisa vinculado à Faculdade de Filosofia e Ciências Humanas (FACH) da
                Universidade Federal de Mato Grosso do Sul (UFMS), em Campo Grande, MS.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "1.5rem", color: "var(--color-text-muted)" }}>
                Fundado em <strong style={{ color: "var(--color-text)" }}>2018</strong>, o laboratório adota uma abordagem interdisciplinar e
                transdisciplinar, colocando em diálogo áreas como História, Literatura, Arqueologia,
                Filosofia, Antropologia, Artes, Tecnologias da Computação, Humanidades Digitais e
                Práticas de Ensino.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "1.5rem", color: "var(--color-text-muted)" }}>
                O nome ATRIVM evoca o átrio romano, espaço de entrada, encontro e debate,
                refletindo a vocação do laboratório como lugar de convergência entre disciplinas,
                épocas e culturas.
              </p>

              <h2 className="section-title" style={{ marginTop: "3rem" }}>Acervo</h2>
              <div className="divider" />
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "1.5rem", color: "var(--color-text-muted)" }}>
                O ATRIVM mantém um acervo de numismática com aproximadamente <strong style={{ color: "var(--color-text)" }}>30.000 peças</strong>,
                composto por moedas da Antiguidade Greco-Romana, Medieval, Moderna e Contemporânea,
                além de cédulas, selos, medalhas, fichas e títulos públicos da história brasileira.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "var(--color-text-muted)" }}>
                O laboratório é registrado no <strong style={{ color: "var(--color-text)" }}>IBRAM</strong> (Visite Museus) e na
                Rede Brasileira de Coleções e Museus Universitários, sendo o único do gênero
                disponível para visitação na região Centro-Oeste.
              </p>
            </div>

            <aside>
              <div className="card" style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", marginBottom: "1rem", color: "var(--color-primary)" }}>
                  Informações
                </h3>
                {[
                  { label: "Fundado em", val: "2018" },
                  { label: "Vinculação", val: "UFMS / FACH" },
                  { label: "Localização", val: "Campo Grande, MS" },
                  { label: "Acervo numismático", val: "~30.000 peças" },
                  { label: "Linhas de pesquisa", val: "4" },
                  { label: "Publicações", val: "25+" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid var(--color-border)", fontSize: "0.9rem" }}>
                    <span style={{ color: "var(--color-text-muted)" }}>{item.label}</span>
                    <strong style={{ color: "var(--color-primary)" }}>{item.val}</strong>
                  </div>
                ))}
              </div>

              <div className="card">
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", marginBottom: "1rem", color: "var(--color-primary)" }}>
                  Parcerias
                </h3>
                {[
                  "Museu Histórico Nacional (MHN-RJ)",
                  "Universidade do Minho (Portugal)",
                  "Município de Alter do Chão (Portugal)",
                  "Universidade Nova de Lisboa",
                  "MuArq UFMS",
                  "Museu de Ciência e Tecnologia UFMS",
                ].map((p) => (
                  <p key={p} style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", padding: "0.45rem 0", borderBottom: "1px solid var(--color-border)" }}>
                    {p}
                  </p>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Áreas de diálogo</h2>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginTop: "0.5rem" }}>
            {[
              "História", "Literatura", "Arqueologia", "Filosofia",
              "Antropologia", "Artes", "Humanidades Digitais", "Práticas de Ensino",
            ].map((area) => (
              <div key={area} style={{ background: "var(--color-white)", border: "1px solid var(--color-border)", padding: "1.25rem 1rem", textAlign: "center" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "var(--color-primary)" }}>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Quer conhecer mais?</h2>
          <div className="divider" style={{ margin: "0.75rem auto 1.5rem" }} />
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/equipe" className="btn btn-primary">Ver a equipe</Link>
            <Link href="/linhas-de-pesquisa" className="btn btn-outline">Linhas de pesquisa</Link>
            <Link href="/contato" className="btn btn-outline">Entrar em contato</Link>
          </div>
        </div>
      </section>
    </>
  );
}
