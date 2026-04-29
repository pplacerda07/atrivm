import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com o laboratório ATRIVM UFMS.",
};

export default function ContatoPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Institucional</p>
          <h1>Contato</h1>
          <div className="divider" />
          <p>Fale com o laboratório ou agende uma visita ao acervo.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
            <div>
              <h2 className="section-title">Informações de contato</h2>
              <div className="divider" />

              {[
                {
                  label: "Endereço",
                  icon: "📍",
                  content: "R. UFMS, Vila Olinda\nCampo Grande, MS, 79070-900\nFACH 2, Sala 1, ATRIVM",
                },
                {
                  label: "E-mail",
                  icon: "✉️",
                  content: "atrivm.fach@ufms.br",
                },
                {
                  label: "Telefones",
                  icon: "📞",
                  content: "(67) 3345-7924\n(67) 99832-9677",
                },
                {
                  label: "Horário de atendimento",
                  icon: "🕐",
                  content: "Segunda a sexta-feira\n13h30 – 17h00",
                },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: "1.25rem", marginBottom: "2rem" }}>
                  <span style={{ fontSize: "1.3rem", marginTop: "0.1rem" }}>{item.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-gold)", marginBottom: "0.4rem" }}>
                      {item.label}
                    </h3>
                    <p style={{ fontSize: "0.98rem", color: "var(--color-text)", lineHeight: "1.65", whiteSpace: "pre-line" }}>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-gold)", marginBottom: "1rem" }}>
                  Redes sociais
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    { label: "Instagram", url: "https://www.instagram.com/atrivmufms/", handle: "@atrivmufms" },
                    { label: "Facebook", url: "https://www.facebook.com/atriumufms", handle: "Atriumufms" },
                    { label: "YouTube", url: "https://www.youtube.com/@CANALATRIVMUFMS", handle: "@atrivmufms" },
                    { label: "Sketchfab", url: "https://skfb.ly/psFYU", handle: "ATRIVM UFMS" },
                  ].map((soc) => (
                    <a key={soc.label} href={soc.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.65rem 1rem", background: "var(--color-white)", border: "1px solid var(--color-border)", fontSize: "0.9rem", transition: "border-color 0.2s" }}>
                      <span style={{ fontWeight: 600, color: "var(--color-primary)" }}>{soc.label}</span>
                      <span style={{ color: "var(--color-text-muted)" }}>{soc.handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-title">Envie uma mensagem</h2>
              <div className="divider" />
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: "2rem", lineHeight: "1.7" }}>
                Preencha o formulário abaixo para entrar em contato com o laboratório.
                Respondemos em até 2 dias úteis.
              </p>
              <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-muted)", marginBottom: "0.4rem" }}>
                      Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--color-border)", background: "var(--color-white)", fontSize: "0.95rem", fontFamily: "var(--font-sans)", outline: "none" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-muted)", marginBottom: "0.4rem" }}>
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--color-border)", background: "var(--color-white)", fontSize: "0.95rem", fontFamily: "var(--font-sans)", outline: "none" }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-muted)", marginBottom: "0.4rem" }}>
                    Assunto
                  </label>
                  <input
                    type="text"
                    placeholder="Assunto da mensagem"
                    style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--color-border)", background: "var(--color-white)", fontSize: "0.95rem", fontFamily: "var(--font-sans)", outline: "none" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-muted)", marginBottom: "0.4rem" }}>
                    Mensagem
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Escreva sua mensagem..."
                    style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--color-border)", background: "var(--color-white)", fontSize: "0.95rem", fontFamily: "var(--font-sans)", outline: "none", resize: "vertical" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: "flex-start" }}
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
