import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publicações",
  description: "Publicações acadêmicas do laboratório ATRIVM UFMS disponíveis para download.",
};

type Publication = {
  title: string;
  authors: string;
  publisher: string;
  year: string;
  type: string;
  cover: string | null;
  link: string;
};

const publications: Publication[] = [
  {
    title: "Ensino de História Antiga",
    authors: "André Bueno · Carlos Eduardo Campos · Airan Borges",
    publisher: "Sobre Ontens — Edição Especial Ebook",
    year: "2020",
    type: "Livro",
    cover: "/capas/ensino-historia-antiga.jpg",
    link: "https://drive.google.com/file/d/1w3GdSFBIDg_cJt_HPAi3IXaiKWc7uS_T/view",
  },
  {
    title: "Ensino de História: Teorias e Metodologias",
    authors: "André Bueno · Carlos Eduardo Campos · Dilza Porto",
    publisher: "Sobre Ontens — Edição Especial Ebook",
    year: "2020",
    type: "Livro",
    cover: "/capas/ensino-historia-teorias.jpg",
    link: "https://drive.google.com/file/d/154zybgNSfjBLLjkax2boS7YSBa38jqpS/view",
  },
  {
    title: "Falas na Rede: Ensino e Pesquisa em História e Educação",
    authors: "André Bueno · Carlos Costa Campos · Luís Bantim Assumpção",
    publisher: "Sobre Ontens — Edição Especial Ebook",
    year: "2020",
    type: "Livro",
    cover: "/capas/falas-na-rede.jpg",
    link: "https://drive.google.com/file/d/1E6cz0khiVNduPgbXJpMoPus5BtmCBcoG/view",
  },
  {
    title: "Caminhos da Aprendizagem Histórica: Ensino de Pré-História e Antiguidade",
    authors: "Carlos Eduardo C. Campos · Luís Filipe B. Assumpção",
    publisher: "Sobre Ontens — Edição Especial Ebook",
    year: "2021",
    type: "Livro",
    cover: "/capas/caminhos-aprendizagem.jpg",
    link: "https://drive.google.com/file/d/1wVyvVH5f0eJ9UOXntM87sd_bz6mmsZyy/view?usp=sharing",
  },
  {
    title: "As Tabellae Defixionum da Região do Lácio (I AEC – II EC): Tradução, Análise Textual e Hábito Epigráfico",
    authors: "Carlos Eduardo da Costa Campos",
    publisher: "Editora UFMS",
    year: "",
    type: "Livro",
    cover: "/capas/tabellae-defixionum.jpg",
    link: "https://drive.google.com/file/d/1A9pOhG2mV84MUj4EDgjILo-eD-lGsla7/view?usp=sharing",
  },
  {
    title: "Experiências Religiosas no Mundo Antigo — Volume I",
    authors: "Carolina Kesser Barcellos Dias · Semíramis Corsi Silva · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Editora Prismas",
    year: "",
    type: "Livro",
    cover: "/capas/experiencias-religiosas-vol1.jpg",
    link: "https://drive.google.com/file/d/1k2z8KD3Ax-0m-qJz1KMbQ5cMRTtbMwSd/view?usp=sharing",
  },
  {
    title: "Experiências Religiosas no Mundo Antigo — Volume II",
    authors: "Carolina Kesser Barcellos Dias · Semíramis Corsi Silva · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Editora Prismas",
    year: "",
    type: "Livro",
    cover: "/capas/experiencias-religiosas-vol2.jpg",
    link: "https://drive.google.com/file/d/1cseiY7bK43pdgAq2H1hlG_vz1zPzYn4-/view?usp=sharing",
  },
  {
    title: "Corrupção, Crimes e Crises na Antiguidade",
    authors: "Semíramis Corsi Silva · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Desalinho / CLHM",
    year: "",
    type: "Livro",
    cover: "/capas/corrupcao-crimes-crises.jpg",
    link: "https://drive.google.com/file/d/1T_cQTtpW545g1P2n22WnPeRK2I7RcW9G/view?usp=sharing",
  },
  {
    title: "Scholae: Estudos Interdisciplinares da Antiguidade",
    authors: "Anderson Vanini Martins Santos · André de Sena Soares · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Desalinho",
    year: "",
    type: "Livro",
    cover: "/capas/scholae.jpg",
    link: "https://drive.google.com/file/d/1_TE0x2IeEA29pmBS9L3M3pYoXO3MT646/view?usp=sharing",
  },
  {
    title: "Um dia no Museu — Volume 1: Uma aventura pelo Museu Histórico Nacional para as turmas do Mato Grosso do Sul",
    authors: "Museu Histórico Nacional",
    publisher: "Desalinho",
    year: "",
    type: "Material Didático",
    cover: "/capas/um-dia-no-museu-vol1.png",
    link: "https://drive.google.com/file/d/1GAcP9G3e9xikZIXSs2z1n_Q9Dgqj05hq/view?usp=sharing",
  },
  {
    title: "Um dia no Museu — Volume 2: Uma aventura pelo patrimônio cultural brasileiro",
    authors: "",
    publisher: "Desalinho",
    year: "",
    type: "Material Didático",
    cover: "/capas/um-dia-no-museu-vol2.png",
    link: "https://drive.google.com/file/d/1M2Oh1FoLu8618v3enuCFun0AdBwU_gta/view?usp=drive_link",
  },
  {
    title: "Um dia no Museu — Volume 3: A formação e o acervo de Numismática do Museu Histórico Nacional",
    authors: "",
    publisher: "Desalinho",
    year: "",
    type: "Material Didático",
    cover: "/capas/um-dia-no-museu-vol3.jpg",
    link: "https://drive.google.com/file/d/1rjEdOnNemt0H4oCPY4gBqa3U-hFrdBy0/view?usp=drive_link",
  },
  {
    title: "Um dia no Museu — Volume 4: O Mundo das Trocas — Do Escambo ao Digital",
    authors: "",
    publisher: "Univassouras / UFMS",
    year: "",
    type: "Material Didático",
    cover: "/capas/um-dia-no-museu-vol4.png",
    link: "https://drive.google.com/file/d/1YUJIk79qcAudG8epFsE50WKAejuxPpyG/view?usp=sharing",
  },
  {
    title: "Sistemas de Crenças, Mitos e Rituais na Antiguidade",
    authors: "Arlete José Mota · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Desalinho / CAPES",
    year: "",
    type: "Livro",
    cover: "/capas/sistemas-crencas.jpg",
    link: "https://drive.google.com/file/d/1EF_sDUPUdV89IxLzWfIRtKbQQ7iCDdaE/view?usp=sharing",
  },
  {
    title: "Museus e Patrimônio Cultural em Mato Grosso do Sul: Pesquisa, Cultura, Educação e Identidade",
    authors: "Douglas Alves da Silva · Lia Raquel Toledo Brambilla Gasques · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Desalinho",
    year: "",
    type: "Livro",
    cover: "/capas/museus-patrimonio-ms.jpg",
    link: "https://drive.google.com/file/d/1PthtSpJdKHKzZ5haDlATRrcyrz5kWQld/view?usp=sharing",
  },
  {
    title: "Antiguidade e Usos do Passado: Políticas e Práticas Sociais",
    authors: "Leandro Mendonça Barbosa · Dolores Puga (Orgs.)",
    publisher: "Desalinho",
    year: "",
    type: "Livro",
    cover: "/capas/antiguidade-usos-passado-politicas.png",
    link: "https://drive.google.com/file/d/1mxtHjhb4BQWcBJGykG0rKLnY_1EkccTw/view?usp=sharing",
  },
  {
    title: "Museus e Patrimônio Cultural: Perspectivas Locais, Contribuições Globais",
    authors: "Douglas Alves da Silva · Carlos Eduardo da Costa Campos · Lia Raquel Toledo Brambilla Gasques · e outros (Orgs.)",
    publisher: "Desalinho / Coleção Taiás",
    year: "",
    type: "Livro",
    cover: "/capas/museus-patrimonio-perspectivas.jpg",
    link: "https://drive.google.com/file/d/1szPtZ8srt46pICB5IdfrWYeIhd1Lpcds/view?usp=sharing",
  },
  {
    title: "Arqueologia: Manual de Boas Práticas",
    authors: "Universidade Federal de Mato Grosso do Sul (UFMS)",
    publisher: "UFMS",
    year: "",
    type: "Manual",
    cover: "/capas/arqueologia-manual-boas-praticas.png",
    link: "https://drive.google.com/file/d/1Vt6OO4nOVFVPV6RAUZacTDnCP0tGt8pa/view?usp=sharing",
  },
  {
    title: "Encontros Transatlânticos: Diálogos em História, Patrimônio Cultural e Educação",
    authors: "Luís Filipe Bantim de Assumpção · César Fornís · Carlos Eduardo da Costa Campos · Angelo Ferreira Monteiro (Orgs.)",
    publisher: "Universidade de Vassouras / Universidad de Sevilla / UFMS",
    year: "",
    type: "Livro",
    cover: "/capas/encontros-transatlanticos.jpg",
    link: "https://drive.google.com/file/d/1aQI8xilaVrD6H6PDatyj92PE1UBZf1OL/view?usp=drive_link",
  },
  {
    title: "Imperialismo Romano em Sagunto: A Estrutura de Atitudes e Referências do Imperialismo Romano em Sagunto — Séculos II a.C. – I d.C.",
    authors: "Carlos Eduardo da Costa Campos",
    publisher: "",
    year: "",
    type: "Livro",
    cover: "/capas/imperialismo-romano-sagunto.jpg",
    link: "https://drive.google.com/file/d/1Lc-Su9LLfYij05ZbUGUZK95oFTwMZVWH/view?usp=drive_link",
  },
  {
    title: "Caesar Augustus: Entre Práticas e Representações",
    authors: "Carlos Eduardo da Costa Campos · Maria Regina Cândido (Orgs.)",
    publisher: "DLL-UFES & UERJ-NEA",
    year: "",
    type: "Livro",
    cover: "/capas/caesar-augustus.jpg",
    link: "https://drive.google.com/file/d/1S_sqUAvBBlDY9vmuiaqNLK6GQA5S5Ysy/view?usp=drive_link",
  },
  {
    title: "Relações de Poder: da Antiguidade ao Medievo / Relations of Power: From Antiquity to the Middle Ages — Vol. 1",
    authors: "Renan M. Birro · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Alumni História e Literatura Antiga e Medieval — Departamento de Línguas",
    year: "",
    type: "Livro",
    cover: "/capas/relacoes-de-poder.jpg",
    link: "https://drive.google.com/file/d/1jbUScAF8aX4sCGgAbiDKRLKAPsj80qqS/view?usp=drive_link",
  },
  {
    title: "TRIVIA: Estudos Interdisciplinares sobre as Práticas da Magia na Antiguidade — Vol. I",
    authors: "",
    publisher: "Univassouras / UFMS",
    year: "",
    type: "Livro",
    cover: "/capas/trivia.jpg",
    link: "https://drive.google.com/file/d/1SBIUO2CjS41Z8gKLA-afdFnhLKqWO6hq/view?usp=sharing",
  },
  {
    title: "NUMISMA: Estudos Interdisciplinares sobre Numismática Antiga — Vol. 1",
    authors: "Carlos Eduardo da Costa Campos · Luís Filipe Bantim de Assumpção (Orgs.)",
    publisher: "Vassouras / CNPq / UFMS",
    year: "",
    type: "Livro",
    cover: "/capas/numisma.jpg",
    link: "https://drive.google.com/file/d/17TrlDa2O9iBPcf1CEllPTj7qL7vcltx0/view?usp=sharing",
  },
  {
    title: "História em Quadrinhos na Perspectiva da Prática de Ensino",
    authors: "Luís Filipe Bantim de Assumpção · Carlos Eduardo da Costa Campos (Orgs.)",
    publisher: "Vassouras / UFMS",
    year: "",
    type: "Livro",
    cover: "/capas/hq-pratica-ensino.jpg",
    link: "https://editora.univassouras.edu.br/index.php/PT/article/view/4488",
  },
  {
    title: "História em Quadrinhos em Perspectiva para o Ensino de História",
    authors: "Carlos Eduardo da Costa Campos · Luís Filipe Bantim de Assumpção · José Maria Gomes de Souza Neto (Orgs.)",
    publisher: "Desalinho",
    year: "",
    type: "Livro",
    cover: "/capas/hq-perspectiva.jpg",
    link: "https://drive.google.com/file/d/1VTiwdPQ97f1u53dfCHHbxzSc8ZEdAv61/view?usp=drive_link",
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

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "1.5rem" }}>
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
                    href={pub.link}
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
        </div>
      </section>
    </>
  );
}
