import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipe",
  description: "Conheça a equipe do laboratório ATRIVM UFMS.",
};

const researchers = [
  "André Luiz Marcondes Pelegrinelli (UFMS)",
  "André da Silva Bueno (UERJ)",
  "Airan dos Santos Borges de Oliveira (UFRN)",
  "Alex da Silva Martire (UPF)",
  "Arlete José Mota (UFRJ)",
  "Arthur Rodrigues (UFRJ)",
  "Camila Diogo de Souza (UNIFESP)",
  "Carmen Soares (Universidade de Coimbra – Portugal)",
  "Carolina Kesser Barcellos Dias (UFPel)",
  "Claudia Beltrão (UNIRIO)",
  "Dhemy Brito (UMINHO)",
  "Dolores Puga Alves de Sousa (UFMS / CPTL)",
  "Fábio Frohwein de Salles Moniz (UFRJ)",
  "Fábio Vergara Cerqueira (UFPel)",
  "Fernanda Eugénia Puga Magalhães (UMINHO)",
  "José Gabriel de Oliveira Andrade Junior (UMINHO)",
  "Laura Roseli Pael Duarte (UFMS / MuArq)",
  "Leandro Hecko (UFMS / CPTL)",
  "Lia Raquel Toledo Brambilla Gasques (UFMS/FACH)",
  "Luana Cristina da Silva Campos (UFMS/CPAN)",
  "Luis Filipe Bantim de Assumpção (UNIVASSOURAS)",
  "Maria Cecília Colombani (Univ. de Mar del Plata / Univ. de Morón – Argentina)",
  "Mariano Spléndido (Univ. de La Plata – Argentina)",
  "Monica Alvarez Gomes (UFMS / FAALC)",
  "Moisés Antiqueira (UNIOESTE)",
  "Nathália M. Junqueira (UFMS/CPTL)",
  "Pablo Martín Rosell (Univ. de La Plata – Argentina)",
  "Rafael de Carvalho Matiello Brunhara (UFRGS)",
  "Rainer Guggenberger (UFRJ)",
  "Renan Marques Liparotti (Universidade de Coimbra)",
  "Ricardo de Souza Nogueira (UFRJ)",
  "Semíramis Corsi Silva (UFSM)",
  "Thiago Brandão Zardini (Faculdade Saberes)",
  "Vagner Carvalheiro Porto (USP)",
];

const graduandos = [
  "Eduardo de Sousa Santos (UFMS / FACH)",
  "João Gabriel da Silva Sanches (UFMS / FACH)",
  "Natália Varone (UFMS/FACH)",
  "Pedro Paulo Pereira Lacerda (UFMS / FACOM)",
  "Vinícius Rotheman Felipe Ortega (UFMS / FACH)",
];

const graduados = [
  "Lara Karinina Viana de Almeida (Lab. ATRIVM / UFMS)",
];

const mestrandos = [
  "Daniel Xavier Campos (PROFHIST / PIBAP / UEMS)",
  "Germano Torres Neto (PPGAS / UFMS)",
  "João Guilherme Vieira Poiati (PPGAS/UFMS – Bols. CNPq)",
  "Luis Miguel Pereira Lacerda (PROFHIST / CAPES / UEMS)",
  "Miguel Ângelo O. de Almeida (PPGAS/UFMS – Bols. CAPES)",
  "Pietra Ida Leone Sol (PPGAS/UFMS – Bols. CAPES)",
];

const mestres = [
  "Cleyton F. Santos (PROFHIST/UEMS)",
  "Luciano Alonso (PROFHIST/UEMS)",
  "Wellida Cristina Pereira (PPGAS/UFMS – Bols. CAPES)",
  "Robert Alexandre Gonzaga Padilha (PROFHIST / PIBAP / UEMS)",
];

function DiscipulosGroup({ title, list }: { title: string; list: string[] }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.05rem",
          color: "var(--color-primary)",
          marginBottom: "1rem",
          paddingBottom: "0.4rem",
          borderBottom: "2px solid var(--color-gold)",
          display: "inline-block",
        }}
      >
        {title}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {list.map((name) => (
          <li
            key={name}
            style={{
              fontSize: "0.92rem",
              color: "var(--color-text-muted)",
              padding: "0.45rem 0",
              borderBottom: "1px solid var(--color-border)",
              lineHeight: "1.5",
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

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
          {/* Coordenação */}
          <h2 className="section-title">Coordenação</h2>
          <div className="divider" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginBottom: "4rem",
            }}
          >
            <div className="card" style={{ borderTop: "4px solid var(--color-gold)" }}>
              <p className="tag" style={{ marginBottom: "0.75rem" }}>Coordenador Geral</p>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.2rem",
                  color: "var(--color-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                Prof. Dr. Carlos Eduardo da Costa Campos
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--color-text-muted)",
                  lineHeight: "1.65",
                }}
              >
                UFMS / FACH, Campo Grande, MS.<br />
                Bolsista de Produtividade CNPq, PQ2 (2023–2026).<br />
                Pesquisador principal dos projetos de numismática e defixiones.<br />
                <a
                  href="http://lattes.cnpq.br/7804720022724209"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-gold)",
                    textDecoration: "underline",
                    marginTop: "0.5rem",
                    display: "inline-block",
                    fontWeight: 600,
                  }}
                >
                  Acessar Currículo Lattes
                </a>
              </p>
            </div>
            <div className="card" style={{ borderTop: "4px solid var(--color-gold)" }}>
              <p className="tag" style={{ marginBottom: "0.75rem" }}>Vice-Coordenadora</p>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.2rem",
                  color: "var(--color-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                Profª. Drª. Lia Raquel Toledo Brambilla Gasques
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--color-text-muted)",
                  lineHeight: "1.65",
                }}
              >
                Arqueóloga e Professora Adjunta na Universidade Federal de Mato Grosso do Sul e Pró-Reitora de Extensão Cultura e Esporte da mesma Universidade.<br />
                Membro da cátedra UNESCO de Humanidades: Fronteiras e Migrações.<br />
                Tem experiência na área de Arqueologia, atuando principalmente nos seguintes temas: Educação, Arqueologia, Patrimônio de Mato Grosso do Sul.<br />
                <a
                  href="http://lattes.cnpq.br/7804720022724209"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-gold)",
                    textDecoration: "underline",
                    marginTop: "0.5rem",
                    display: "inline-block",
                    fontWeight: 600,
                  }}
                >
                  Acessar Currículo Lattes
                </a>
              </p>
            </div>
          </div>

          {/* Pesquisadores */}
          <h2 className="section-title">Pesquisadores</h2>
          <div className="divider" />
          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              marginBottom: "2rem",
              lineHeight: "1.7",
            }}
          >
            O ATRIVM conta com uma rede de pesquisadores vinculados a diversas instituições
            nacionais e internacionais.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.75rem",
              marginBottom: "4rem",
            }}
          >
            {researchers.map((name) => (
              <div
                key={name}
                style={{
                  background: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  padding: "0.9rem 1.1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-muted)",
                    lineHeight: "1.5",
                  }}
                >
                  {name}
                </p>
              </div>
            ))}
          </div>

          {/* Discentes */}
          <h2 className="section-title">Discentes</h2>
          <div className="divider" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            <div>
              <DiscipulosGroup title="Graduandos" list={graduandos} />
              <DiscipulosGroup title="Graduados" list={graduados} />
            </div>
            <div>
              <DiscipulosGroup title="Mestrandos" list={mestrandos} />
              <DiscipulosGroup title="Mestres" list={mestres} />
            </div>
          </div>

          {/* Alcance */}
          <div
            style={{
              background: "var(--color-primary)",
              color: "var(--color-white)",
              borderRadius: "4px",
              padding: "2.5rem 3rem",
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
              marginBottom: "4rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "var(--color-gold)",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                +4.000
              </p>
              <p style={{ fontSize: "0.95rem", opacity: 0.85 }}>
                pessoas alcançadas pelas ações de pesquisa e extensão do laboratório
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Faça parte do laboratório</h2>
          <div className="divider" style={{ margin: "0.75rem auto 1.5rem" }} />
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "500px",
              margin: "0 auto 2rem",
              fontSize: "1.05rem",
            }}
          >
            Estudantes e pesquisadores interessados em integrar o ATRIVM podem entrar em contato
            ou comparecer ao laboratório em nosso horário de atendimento.
          </p>
          <a href="/contato" className="btn btn-primary">Entre em contato</a>
        </div>
      </section>
    </>
  );
}
