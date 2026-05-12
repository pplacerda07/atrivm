"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const LOGO_SRC = "/atrivm-logo.png";

const labLinks = [
  { href: "/sobre", label: "Sobre o laboratório" },
  { href: "/equipe", label: "Equipe" },
  { href: "/linhas-de-pesquisa", label: "Linhas de Pesquisa" },
];

const projetosLinks = [
  { href: "/projetos/numismatica", label: "Acervo de Numismática" },
  { href: "/projetos/um-dia-no-museu", label: "Um Dia no Museu" },
  { href: "/projetos/animacoes", label: "Animações" },
  { href: "/projetos/modelos-3d", label: "Modelos 3D" },
  { href: "/projetos/podcast", label: "Podcast" },
  { href: "/eventos", label: "Eventos" },
  { href: "/sites-periodicos", label: "Sites e Periódicos" },
];

const ChevronIcon = () => (
  <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M1 1l4 4 4-4" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (hrefs: string[]) =>
    hrefs.some((h) => pathname === h || pathname.startsWith(h + "/"));

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
            <img src={LOGO_SRC} alt="ATRIVM UFMS" className={styles.logoImg} />
            <div className={styles.logoText}>
              <span className={styles.logoName}>ATRIVM</span>
              <span className={styles.logoSub}>UFMS · Estudos Interdisciplinares da Antiguidade</span>
            </div>
          </Link>

          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <button className={`${styles.navLink} ${isActive(["/sobre", "/equipe", "/linhas-de-pesquisa"]) ? styles.active : ""}`}>
                Laboratório <ChevronIcon />
              </button>
              <ul className={styles.dropdown}>
                {labLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.dropdownLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className={styles.navItem}>
              <button className={`${styles.navLink} ${isActive(["/projetos", "/eventos", "/sites-periodicos"]) ? styles.active : ""}`}>
                Projetos <ChevronIcon />
              </button>
              <ul className={styles.dropdown}>
                {projetosLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.dropdownLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className={styles.navItem}>
              <Link href="/publicacoes" className={`${styles.navLink} ${isActive(["/publicacoes"]) ? styles.active : ""}`}>
                Publicações
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/encontro" className={`${styles.navLink} ${isActive(["/encontro"]) ? styles.active : ""}`}>
                Encontro
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link href="/contato" className={`${styles.navLink} ${styles.navLinkCta} ${isActive(["/contato"]) ? styles.active : ""}`}>
                Contato
              </Link>
            </li>
          </ul>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <p className={styles.mobileSectionTitle}>Laboratório</p>
        {[{ href: "/", label: "Início" }, ...labLinks].map((l) => (
          <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}

        <p className={styles.mobileSectionTitle}>Projetos</p>
        {projetosLinks.map((l) => (
          <Link key={l.href} href={l.href} className={styles.mobileSubLink} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}

        <p className={styles.mobileSectionTitle}>Mais</p>
        {[
          { href: "/publicacoes", label: "Publicações" },
          { href: "/encontro", label: "Encontro Internacional" },
          { href: "/contato", label: "Contato" },
        ].map((l) => (
          <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
