import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sites e Periódicos",
  description: "Sites parceiros, bases digitais e revistas científicas para estudos clássicos.",
};

const bases = [
  { name: "Arqueologia Pré-Histórica do Egeo", url: "https://www.dartmouth.edu/~prehistory/aegean/", desc: "Base de dados sobre arqueologia do Egeu pré-histórico." },
  { name: "Arquivo Beazley", url: "https://www.beazley.ox.ac.uk/pottery/default.htm", desc: "Catálogo digital de vasos gregos. Universidade de Oxford." },
  { name: "Corpus Vasorum Antiquorum (CVA)", url: "https://www.cvaonline.org/", desc: "Projeto internacional de documentação de vasos antigos." },
  { name: "Perseus Digital Library", url: "https://www.perseus.tufts.edu/", desc: "Biblioteca digital de textos greco-romanos. Tufts University." },
  { name: "Persée", url: "https://www.persee.fr/", desc: "Revistas científicas francesas e Bulletin de Correspondance Hellénique." },
  { name: "Obras de Santo Agostinho", url: "https://www.augustinus.it/", desc: "Corpus completo das obras de Santo Agostinho em latim." },
];

const revistas = [
  { name: "Alétheia", area: "Estudos Clássicos" },
  { name: "Classica: Revista Brasileira de Estudos Clássicos", area: "Estudos Clássicos" },
  { name: "Caesaraugusta", area: "Arqueologia" },
  { name: "Codex (UFRJ)", area: "História Antiga" },
  { name: "Hélade", area: "História Grega" },
  { name: "HERÓDOTO", area: "História Antiga" },
  { name: "MARE NOSTRUM", area: "Mediterrâneo Antigo" },
  { name: "NEARCO", area: "Estudos Clássicos" },
  { name: "PHOINIX (UFRJ)", area: "Estudos Clássicos" },
  { name: "Plêthos (UFF)", area: "História Antiga" },
  { name: "Roda da Fortuna", area: "Cultura Medieval e Moderna" },
  { name: "Romanitas", area: "Estudos Latino-americanos" },
];

export default function SitesPeriodicosPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Recursos</p>
          <h1>Sites e Periódicos</h1>
          <div className="divider" />
          <p>Bases digitais, sites parceiros e revistas científicas de referência.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ marginBottom: "4rem" }}>
            <h2 className="section-title">Sites Parceiros</h2>
            <div className="divider" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              {[
                { name: "Museu Histórico Nacional", url: "http://mhn.museus.gov.br/", desc: "Museu Nacional do Rio de Janeiro, parceiro principal dos projetos de numismática." },
                { name: "MuArq UFMS", url: "https://muarq.ufms.br/", desc: "Museu de Arqueologia da UFMS, parceiro institucional em Campo Grande." },
              ].map((site) => (
                <a key={site.name} href={site.url} target="_blank" rel="noopener noreferrer" className="card" style={{ display: "block" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-primary)", marginBottom: "0.5rem" }}>{site.name}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.65", marginBottom: "0.75rem" }}>{site.desc}</p>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Acessar →
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div id="bases" style={{ marginBottom: "4rem" }}>
            <h2 className="section-title">Bases Digitais</h2>
            <div className="divider" />
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {bases.map((base) => (
                <a
                  key={base.name}
                  href={base.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center", padding: "1.25rem 0", borderBottom: "1px solid var(--color-border)", transition: "background 0.15s" }}
                >
                  <div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--color-primary)", marginBottom: "0.25rem" }}>{base.name}</h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)" }}>{base.desc}</p>
                  </div>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                    Acessar →
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-title">Revistas Científicas</h2>
            <div className="divider" />
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "2rem", lineHeight: "1.7" }}>
              Periódicos de referência na área de Estudos Clássicos, História Antiga e Arqueologia.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
              {revistas.map((rev) => (
                <div key={rev.name} style={{ background: "var(--color-white)", border: "1px solid var(--color-border)", padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "var(--color-primary)", marginBottom: "0.3rem", lineHeight: "1.3" }}>{rev.name}</h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--color-gold)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: "var(--font-sans)" }}>{rev.area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
