import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publicações",
  description: "Publicações acadêmicas do laboratório ATRIVM UFMS disponíveis para download.",
};

const publications = [
  {
    title: "Ensino de História Antiga",
    authors: "André Bueno · Carlos Eduardo Campos · Airan Borges",
    publisher: "Sobre Ontens — Edição Especial Ebook",
    year: "2020",
    type: "Livro",
    cover: "/capas/ensino-historia-antiga.jpg",
  },
  {
    title: "Ensino de História: Teorias e Metodologias",
    authors: "André Bueno · Carlos Eduardo Campos · Dilza Porto",
    publisher: "Sobre Ontens — Edição Especial Ebook",
    year: "2020",
    type: "Livro",
    cover: "/capas/ensino-historia-teorias.jpg",
  },
  {
    title: "Falas na Rede: Ensino e Pesquisa em História e Educação",
    authors: "André Bueno · Carlos Costa Campos · Luís Bantim Assumpção",
    publisher: "Sobre Ontens — Edição Especial Ebook",
    year: "2020",
    type: "Livro",
    cover: "/capas/falas-na-rede.jpg",
  },
  {
    title: "Caminhos da Aprendizagem Histórica: Ensino de Pré-História e Antiguidade",
    authors: "Carlos Eduardo C. Campos · Luís Filipe B. Assumpção",
    publisher: "Sobre Ontens — Edição Especial Ebook",
    year: "2021",
    type: "Livro",
    cover: "/capas/caminhos-aprendizagem.jpg",
  },
  {
    title: "As Tabellae Defixionum da Região do Lácio (I AEC – II EC): Tradução, Análise Textual e Hábito Epigráfico",
    authors: "Carlos Eduardo da Costa Campos",
    publisher: "Editora UFMS",
    year: "",
    type: "Livro",
    cover: "/capas/tabellae-defixionum.jpg",
  },
  {
    title: "Experiências Religiosas no Mundo Antigo — Volume I",
    authors: "Carolina Kesser Barcellos Dias · Semíramis Corsi Silva · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Editora Prismas",
    year: "",
    type: "Livro",
    cover: "/capas/experiencias-religiosas-vol1.jpg",
  },
  {
    title: "Experiências Religiosas no Mundo Antigo — Volume II",
    authors: "Carolina Kesser Barcellos Dias · Semíramis Corsi Silva · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Editora Prismas",
    year: "",
    type: "Livro",
    cover: "/capas/experiencias-religiosas-vol2.jpg",
  },
  {
    title: "Corrupção, Crimes e Crises na Antiguidade",
    authors: "Semíramis Corsi Silva · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Desalinho / CLHM",
    year: "",
    type: "Livro",
    cover: "/capas/corrupcao-crimes-crises.jpg",
  },
  {
    title: "Scholae: Estudos Interdisciplinares da Antiguidade",
    authors: "Anderson Vanini Martins Santos · André de Sena Soares · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Desalinho",
    year: "",
    type: "Livro",
    cover: "/capas/scholae.jpg",
  },
  {
    title: "Um dia no Museu — Volume 1: Uma aventura pelo Museu Histórico Nacional para as turmas do Mato Grosso do Sul",
    authors: "Museu Histórico Nacional",
    publisher: "Desalinho",
    year: "",
    type: "Material Didático",
    cover: null,
  },
  {
    title: "Um dia no Museu — Volume 2: Uma aventura pelo patrimônio cultural brasileiro",
    authors: "",
    publisher: "Desalinho",
    year: "",
    type: "Material Didático",
    cover: null,
  },
  {
    title: "Um dia no Museu — Volume 3: A formação e o acervo de Numismática do Museu Histórico Nacional",
    authors: "",
    publisher: "Desalinho",
    year: "",
    type: "Material Didático",
    cover: "/capas/um-dia-no-museu-vol3.jpg",
  },
  {
    title: "Sistemas de Crenças, Mitos e Rituais na Antiguidade",
    authors: "Arlete José Mota · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Desalinho / CAPES",
    year: "",
    type: "Livro",
    cover: "/capas/sistemas-crencas.jpg",
  },
  {
    title: "Museus e Patrimônio Cultural em Mato Grosso do Sul: Pesquisa, Cultura, Educação e Identidade",
    authors: "Douglas Alves da Silva · Lia Raquel Toledo Brambilla Gasques · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Desalinho",
    year: "",
    type: "Livro",
    cover: "/capas/museus-patrimonio-ms.jpg",
  },
  {
    title: "Antiguidade e Usos do Passado: Políticas e Práticas Sociais",
    authors: "Leandro Mendonça Barbosa · Dolores Puga (Orgs.)",
    publisher: "Desalinho",
    year: "",
    type: "Livro",
    cover: null,
  },
  {
    title: "Museus e Patrimônio Cultural: Perspectivas Locais, Contribuições Globais",
    authors: "Douglas Alves da Silva · Carlos Eduardo da Costa Campos · Lia Raquel Toledo Brambilla Gasques · e outros (Orgs.)",
    publisher: "Desalinho / Coleção Taiás",
    year: "",
    type: "Livro",
    cover: "/capas/museus-patrimonio-perspectivas.jpg",
  },
  {
    title: "Arqueologia: Manual de Boas Práticas",
    authors: "Universidade Federal de Mato Grosso do Sul (UFMS)",
    publisher: "UFMS",
    year: "",
    type: "Manual",
    cover: null,
  },
  {
    title: "Encontros Transatlânticos: Diálogos em História, Patrimônio Cultural e Educação",
    authors: "Luís Filipe Bantim de Assumpção · César Fornís · Carlos Eduardo da Costa Campos · Angelo Ferreira Monteiro (Orgs.)",
    publisher: "Universidade de Vassouras / Universidad de Sevilla / UFMS",
    year: "",
    type: "Livro",
    cover: "/capas/encontros-transatlanticos.jpg",
  },
  {
    title: "Imperialismo Romano em Sagunto: A Estrutura de Atitudes e Referências do Imperialismo Romano em Sagunto — Séculos II a.C. – I d.C.",
    authors: "Carlos Eduardo da Costa Campos",
    publisher: "",
    year: "",
    type: "Livro",
    cover: "/capas/imperialismo-romano-sagunto.jpg",
  },
  {
    title: "Caesar Augustus: Entre Práticas e Representações",
    authors: "Carlos Eduardo da Costa Campos · Maria Regina Cândido (Orgs.)",
    publisher: "DLL-UFES & UERJ-NEA",
    year: "",
    type: "Livro",
    cover: "/capas/caesar-augustus.jpg",
  },
  {
    title: "Relações de Poder: da Antiguidade ao Medievo / Relations of Power: From Antiquity to the Middle Ages — Vol. 1",
    authors: "Renan M. Birro · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Alumni História e Literatura Antiga e Medieval — Departamento de Línguas",
    year: "",
    type: "Livro",
    cover: "/capas/relacoes-de-poder.jpg",
  },
  {
    title: "TRIVIA: Estudos Interdisciplinares sobre as Práticas da Magia na Antiguidade — Vol. I",
    authors: "",
    publisher: "Univassouras / UFMS",
    year: "",
    type: "Livro",
    cover: "/capas/trivia.jpg",
  },
  {
    title: "NUMISMA: Estudos Interdisciplinares sobre Numismática Antiga — Vol. 1",
    authors: "Carlos Eduardo da Costa Campos · Luís Filipe Bantim de Assumpção (Orgs.)",
    publisher: "Vassouras / CNPq / UFMS",
    year: "",
    type: "Livro",
    cover: "/capas/numisma.jpg",
  },
  {
    title: "História em Quadrinhos na Perspectiva da Prática de Ensino",
    authors: "Luís Filipe Bantim de Assumpção · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Vassouras / UFMS",
    year: "",
    type: "Livro",
    cover: "/capas/hq-pratica-ensino.jpg",
  },
  {
    title: "História em Quadrinhos em Perspectiva para o Ensino de História",
    authors: "Carlos Eduardo da Costa Campos · Luís Filipe Bantim de Assumpção · José Maria Gomes de Souza Neto (Orgs.)",
    publisher: "Desalinho",
    year: "",
    type: "Livro",
    cover: "/capas/hq-perspectiva.jpg",
  },
];

export default function PublicacoesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Produção científica</p>
          <h1>Publicações</h1>
          <div className="divider" />
          <p>Obras produzidas pelo laboratório, disponíveis para acesso aberto.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: "1.75", maxWidth: "680px" }}>
              O ATRIVM produz e disponibiliza gratuitamente publicações acadêmicas voltadas ao ensino
              e à pesquisa sobre a Antiguidade, patrimônio cultural e humanidades digitais.
              Mais de <strong>25 títulos</strong> estão disponíveis para download.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
            {publications.map((pub, i) => (
              <div key={pub.title} className="card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0 }}>
                  {pub.cover ? (
                    <img
                      src={pub.cover}
                      alt={`Capa: ${pub.title}`}
                      style={{
                        width: "72px",
                        height: "96px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  ) : (
                    <div style={{
                      background: "var(--color-primary)",
                      color: "var(--color-white)",
                      width: "72px",
                      height: "96px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: pub.year ? "0.85rem" : "1.1rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-sans)",
                      textAlign: "center",
                      padding: "0 0.5rem",
                      lineHeight: "1.3",
                    }}>
                      {pub.year || String(i + 1).padStart(2, "0")}
                    </div>
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                    <span style={{
                      background: "var(--color-gold-pale)",
                      color: "var(--color-gold)",
                      padding: "0.15rem 0.6rem",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-sans)",
                    }}>{pub.type}</span>
                    {pub.year && (
                      <span style={{
                        fontSize: "0.72rem",
                        color: "var(--color-text-muted)",
                        fontFamily: "var(--font-sans)",
                      }}>{pub.year}</span>
                    )}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--color-primary)", marginBottom: "0.35rem", lineHeight: "1.3" }}>
                    {pub.title}
                  </h3>
                  {pub.authors && (
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: "1.5", marginBottom: "0.2rem", fontStyle: "italic" }}>
                      {pub.authors}
                    </p>
                  )}
                  {pub.publisher && (
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: "1.5", marginBottom: "0.75rem" }}>
                      {pub.publisher}
                    </p>
                  )}
                  <a
                    href="https://www.atrivmufms.com/publicacoes"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--color-gold)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    ↓ Baixar
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem", padding: "2rem", background: "var(--color-bg-section)", border: "1px solid var(--color-border)", textAlign: "center" }}>
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", marginBottom: "1.25rem" }}>
              Para acessar todas as publicações disponíveis, visite o catálogo completo no site oficial.
            </p>
            <a
              href="https://www.atrivmufms.com/publicacoes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ver catálogo completo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
