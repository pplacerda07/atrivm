import Link from "next/link";
import styles from "./page.module.css";

const LOGO_SRC = "/atrivm-logo.png";

const stats = [
  { num: "2018", label: "Ano de fundação" },
  { num: "30mil+", label: "Peças no acervo" },
  { num: "4", label: "Linhas de pesquisa" },
  { num: "25+", label: "Publicações" },
];

const researchLines = [
  {
    num: "01",
    title: "Discursos literários e imagéticos da Antiguidade",
    desc: "Análise de obras escritas e artísticas no campo simbólico e cultural do mundo antigo.",
  },
  {
    num: "02",
    title: "Cultura material na Antiguidade",
    desc: "Estudo de objetos e coleções arqueológicas, interpretação e contextualização histórica.",
  },
  {
    num: "03",
    title: "Humanidades Digitais",
    desc: "Produção com novas tecnologias: digitalização, informática, virtualização e ensino digital.",
  },
  {
    num: "04",
    title: "Ressignificações da Antiguidade",
    desc: "Como recortes histórico-culturais da Antiguidade são revisitados ao longo do tempo.",
  },
];

const newsItems = [
  {
    title: "Lançamento — Uma Moeda de Cada Vez! Episódio 6",
    date: "23 mai. 2026",
    type: "Lançamento",
    desc: "Edição especial para a 24ª Semana Nacional de Museus: numismática como ferramenta de divulgação científica e educação patrimonial. Apoio: CNPq · FUNDECT · IBRAM.",
    img: "/eventos/ep6.jpg",
    placeholderIcon: "🪙",
    placeholderLabel: "EP. 6",
    placeholderBg: "linear-gradient(135deg, #0d3b5e 0%, #007b7b 100%)",
    link: "https://www.instagram.com/p/DYNOIe0kTtE/",
  },
  {
    title: "Lançamento do Novo Site do ATRIVM / UFMS",
    date: "20 mai. 2026",
    type: "Lançamento",
    desc: "O ATRIVM/UFMS apresenta seu novo site institucional como espaço de divulgação científica, reunindo projetos, acervo, eventos, publicações e parcerias.",
    img: "/eventos/site-atrivm.jpg",
    placeholderIcon: "🌐",
    placeholderLabel: null,
    placeholderBg: "linear-gradient(135deg, var(--color-primary) 0%, #2a3d6e 100%)",
    link: "https://visite.museus.gov.br/24a-semana-nacional-de-museus/lancamento-do-novo-site-do-atrivm-ufms/",
  },
  {
    title: "Exposição: Um Dia no Museu — do Escambo ao Pix",
    date: "18 e 19 mai. 2026",
    type: "Exposição",
    desc: "Moedas e cédulas como fontes históricas para explorar a história econômica, o patrimônio e a memória social.",
    img: "/eventos/exposicao-museu.jpg",
    placeholderIcon: "🏛️",
    placeholderLabel: null,
    placeholderBg: "linear-gradient(135deg, #1a6b8a 0%, #0d4f68 100%)",
    link: "https://visite.museus.gov.br/24a-semana-nacional-de-museus/um-dia-no-museu-do-escambo-ao-pix/",
  },
];

const projects = [
  {
    icon: "🪙",
    title: "Acervo de Numismática",
    desc: "Mais de 30.000 peças: moedas, cédulas, medalhas, selos e títulos públicos de diversas épocas.",
    href: "/projetos/numismatica",
  },
  {
    icon: "🎬",
    title: "Animações Científicas",
    desc: "Séries \"Uma Moeda de Cada Vez\" e \"Um Dia no Museu\", divulgação científica em vídeo.",
    href: "/projetos/animacoes",
  },
  {
    icon: "🏛️",
    title: "Modelos 3D",
    desc: "Digitalização fotogramétrica de peças históricas publicadas no Sketchfab para acesso global.",
    href: "/projetos/modelos-3d",
  },
  {
    icon: "🎙️",
    title: "Podcast ATRIVM",
    desc: "\"ATRIVM no Ar\" e \"Numismática Para Todos\": debates sobre Antiguidade e patrimônio.",
    href: "/projetos/podcast",
  },
  {
    icon: "🏫",
    title: "Um Dia no Museu",
    desc: "Projeto de extensão com fomento CNPq que levou o Museu Histórico Nacional às escolas do MS.",
    href: "/projetos/um-dia-no-museu",
  },
  {
    icon: "📅",
    title: "Eventos e Informes",
    desc: "Cursos, webinários, conferências e o Encontro Internacional e Nacional do ATRIVM.",
    href: "/eventos",
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <p className={styles.heroEyebrow}>UFMS · FACH · Campo Grande, MS</p>
              <h1 className={styles.heroTitle}>ATRIVM</h1>
              <p className={styles.heroSlogan}>
                Laboratório de estudos interdisciplinares da Antiguidade
              </p>
              <p className={styles.heroDesc}>
                Laboratório de estudos interdisciplinares vinculado à Universidade Federal
                de Mato Grosso do Sul. Áreas de investigação: Arqueologia, Numismática,
                Patrimônio Cultural, Humanidades Digitais e Estudos Clássicos, desde 2018.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/sobre" className="btn btn-primary">
                  Conheça o laboratório
                </Link>
                <Link href="/projetos/numismatica" className="btn btn-outline-light">
                  Ver o acervo
                </Link>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <img src={LOGO_SRC} alt="ATRIVM UFMS" className={styles.heroLogo} />
            </div>
          </div>
        </div>
      </section>

      <div className={styles.statsBar}>
        <div className="container" style={{ padding: 0 }}>
          <div className={styles.statsInner}>
            {stats.map((s) => (
              <div key={s.num} className={styles.statItem}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="tag">Pesquisa</p>
            <h2 className="section-title">Linhas de Pesquisa</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Quatro eixos de investigação que orientam a produção científica e os projetos do laboratório.
            </p>
          </div>
          <div className={styles.researchGrid}>
            {researchLines.map((r) => (
              <div key={r.num} className={styles.researchCard}>
                <div className={styles.researchNum}>{r.num}</div>
                <h3 className={styles.researchTitle}>{r.title}</h3>
                <p className={styles.researchDesc}>{r.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/linhas-de-pesquisa" className="btn btn-outline">
              Ver detalhes das linhas
            </Link>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-header">
            <p className="tag">Projetos</p>
            <h2 className="section-title">Nosso trabalho</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Pesquisa, ensino e extensão através de projetos que unem tecnologia, patrimônio e educação.
            </p>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((p) => (
              <Link key={p.href} href={p.href} className={styles.projectCard}>
                <div className={styles.projectCardIcon}>{p.icon}</div>
                <div className={styles.projectCardBody}>
                  <h3 className={styles.projectCardTitle}>{p.title}</h3>
                  <p className={styles.projectCardDesc}>{p.desc}</p>
                  <span className={styles.projectCardLink}>
                    Saiba mais →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="tag">Sobre o ATRIVM</p>
            <h2 className="section-title">Um laboratório interdisciplinar</h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1.25rem", color: "var(--color-text-muted)" }}>
                O ATRIVM foi fundado em 2018 na Faculdade de Filosofia e Ciências Humanas da UFMS,
                com uma abordagem interdisciplinar e transdisciplinar que dialoga com História,
                Literatura, Arqueologia, Filosofia, Antropologia, Artes e Humanidades Digitais.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1.25rem", color: "var(--color-text-muted)" }}>
                Parcerias com o Museu Histórico Nacional (RJ), Universidade do Minho (Portugal),
                MuArq-UFMS e instituições de ensino de todo o Brasil integram uma rede de
                cooperação acadêmica e cultural.
              </p>
              <Link href="/sobre" className="btn btn-outline" style={{ marginTop: "0.5rem" }}>
                Ler mais sobre o laboratório
              </Link>
            </div>
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { title: "Reconhecimento Institucional", desc: "O laboratório é registrado no IBRAM (Visite Museus), na Rede Brasileira de Coleções e Museus Universitários, no Sistema Estadual de Museus de Mato Grosso do Sul e sendo o único do gênero disponível para visitação na região Centro-Oeste." },
                  { title: "Financiamento CNPq", desc: "Bolsa de Produtividade PQ2 e projetos de pesquisa financiados pelo CNPq, FUNDECT-MS e UFMS." },
                  { title: "Cooperação Internacional", desc: "Acordos com Universidade do Minho (PT), Nova FCSH e Município de Alter do Chão (PT)." },
                ].map((item) => (
                  <div key={item.title} className="card">
                    <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", marginBottom: "0.4rem", color: "var(--color-primary)" }}>{item.title}</h4>
                    <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-header">
            <p className="tag">Laboratório</p>
            <h2 className="section-title">Eventos e Informes</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Acompanhe as atividades, cursos e conferências mais recentes do ATRIVM.
            </p>
          </div>
          <div className={styles.newsGrid}>
            {newsItems.map((item) => (
              <div key={item.title} className={styles.newsCard}>
                <div className={styles.newsCardImg}>
                  <div
                    className={styles.newsCardImgPlaceholder}
                    style={{ background: item.placeholderBg }}
                  >
                    <div className={styles.newsCardVisual}>
                      <span className={styles.newsCardVisualIcon}>{item.placeholderIcon}</span>
                      {item.placeholderLabel && (
                        <span className={styles.newsCardVisualLabel}>{item.placeholderLabel}</span>
                      )}
                    </div>
                  </div>
                  <span className={styles.newsCardType}>{item.type}</span>
                </div>
                <div className={styles.newsCardBody}>
                  <p className={styles.newsCardDate}>{item.date}</p>
                  <h3 className={styles.newsCardTitle}>{item.title}</h3>
                  <p className={styles.newsCardDesc}>{item.desc}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.newsCardLink}
                    >
                      Saiba mais →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/eventos" className="btn btn-outline">Ver todos os eventos</Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <h2>Encontro Internacional e Nacional</h2>
          <p>
            III Encontro Internacional e V Nacional do ATRIVM. Diálogos ibero-americanos
            sobre patrimônio cultural, acervos museológicos e humanidades digitais.
          </p>
          <div className={styles.ctaBannerBtns}>
            <Link href="/encontro" className="btn btn-primary">
              Saiba mais sobre o encontro
            </Link>
            <Link href="/contato" className="btn btn-outline-light">
              Entre em contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
