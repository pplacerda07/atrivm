import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ações",
  description: "Projetos do ATRIVM e ações concluídas entre os anos de 2021 a 2024.",
};

export default function AcoesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="tag" style={{ color: "var(--color-gold-light)" }}>Histórico</p>
          <h1>Projetos do ATRIVM</h1>
          <div className="divider" />
          <p>Projetos concluídos entre os anos de 2021 a 2024</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Acordos de Cooperação Técnica</h2>
          <div className="divider" />
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: "1rem" }}>Nacionais</h3>
              <div className="card">
                <p style={{ fontWeight: "bold", color: "var(--color-text)", marginBottom: "0.5rem" }}>• Museu Histórico Nacional</p>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                  <strong>Acordo de Cooperação:</strong> nº 71/2022-UFMS<br/>
                  <strong>Processo:</strong> nº 23104.017568/2022-11<br/>
                  <strong>Partícipes:</strong> Fundação Universidade Federal de Mato Grosso do Sul - UFMS e o MUSEU HISTÓRICO NACIONAL<br/>
                  <strong>Vigência:</strong> 22.07.2022 a 22.07.2025
                </p>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: "1rem" }}>Internacionais</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="card">
                  <p style={{ fontWeight: "bold", color: "var(--color-text)", marginBottom: "0.5rem" }}>• Departamento de História da UMinho</p>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                    Segundo Termo Aditivo ao Acordo de Cooperação nº 17/2022-UFMS. Processo nº. 23104.017863/2023-58.<br/>
                    <strong>Partícipes:</strong> Fundação Universidade Federal de Mato Grosso do Sul (UFMS) e a Universidade do Minho – Portugal.<br/>
                    <strong>Vigência:</strong> 31.10.2023 a 31.10.2028.
                  </p>
                </div>
                <div className="card">
                  <p style={{ fontWeight: "bold", color: "var(--color-text)", marginBottom: "0.5rem" }}>• Município de Alter do Chão (Portugal)</p>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                    Através do Campo Arqueológico Internacional de Alter do Chão (CIVITAS). Acordo de Cooperação nº 74/2023-UFMS.<br/>
                    <strong>Processo:</strong> nº. 23104.037805/2022-60.<br/>
                    <strong>Partícipes:</strong> Fundação Universidade Federal de Mato Grosso do Sul (UFMS) e o Município de Alter do Chão (Portugal).<br/>
                    <strong>Vigência:</strong> 28.07.2023 a 28.07.2025.
                  </p>
                </div>
                <div className="card">
                  <p style={{ fontWeight: "bold", color: "var(--color-text)", marginBottom: "0.5rem" }}>• Faculdade de Ciências Sociais e Humanas da Universidade Nova de Lisboa</p>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                    Acordo de Cooperação nº 08/2024-UFMS.<br/>
                    <strong>Processo:</strong> nº 23104.021268/2023-17.<br/>
                    <strong>Partícipes:</strong> Fundação Universidade Federal de Mato Grosso do Sul (UFMS) e a UNIVERSIDADE NOVA DE LISBOA (NOVA FCSH).<br/>
                    <strong>Vigência:</strong> 07/03/2024 a 07/03/2029.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Fomentos e Bolsas</h2>
          <div className="divider" />
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: "1rem" }}>Bolsa de Produtividade CNPQ – PQ2</h3>
              <div className="card">
                <p style={{ fontWeight: "bold", color: "var(--color-text)", marginBottom: "0.5rem" }}>• Popularização da ciência numismática romana através do Museu Histórico Nacional – RJ</p>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                  <strong>Processo:</strong> 304732/2022-2 | <strong>Chamada:</strong> PQ – 2022 | <strong>Valor Total:</strong> R$ 39.600,00<br/>
                  <strong>Bolsista:</strong> Prof. Dr. Carlos Eduardo da Costa Campos (2023/2026)<br/>
                  <strong>Situação:</strong> Em andamento
                </p>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: "1rem" }}>Estágio de Pesquisa no Exterior</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="card">
                  <p style={{ fontWeight: "bold", color: "var(--color-text)", marginBottom: "0.5rem" }}>• Departamento de Arqueologia de Alter-Chão, Portugal (07/2022)</p>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                    <strong>Discente:</strong> Lara Karinina Viana de Almeida<br/>
                    <strong>Recursos:</strong> Sem fomento, com recursos próprios.
                  </p>
                </div>
                <div className="card">
                  <p style={{ fontWeight: "bold", color: "var(--color-text)", marginBottom: "0.5rem" }}>• UMinho, Portugal (29/12/23 a 31/01/24)</p>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                    <strong>Egresso e Membro do Laboratório ATRIVM:</strong> Luis Miguel Pereira Lacerda<br/>
                    <strong>Recursos:</strong> Sem fomento, com recursos próprios.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: "1rem" }}>Estágio de Pós-Doutorado</h3>
              <div className="card">
                <p style={{ fontWeight: "bold", color: "var(--color-text)", marginBottom: "0.5rem" }}>• O acervo de numismática romana do Museu Histórico Nacional (RJ): popularização científica das moedas augustanas</p>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                  Universidade do Minho (Unidade de Arqueologia) – Portugal<br/>
                  <strong>Período:</strong> 01/10/23 – 31/03/24<br/>
                  <strong>Pesquisador:</strong> Prof. Dr. Carlos Eduardo da Costa Campos – UFMS<br/>
                  <strong>Supervisora:</strong> Profa. Dra. Fernanda Magalhães – UMinho
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Projetos de Pesquisa</h2>
          <div className="divider" />
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="card" style={{ borderLeft: "4px solid var(--color-gold)" }}>
              <p style={{ fontWeight: "bold", color: "var(--color-text)", marginBottom: "0.5rem" }}>• As moedas Júlio-Claudianas do Museu Histórico Nacional: catalogação e descrição visando a popularização científica do patrimônio numismático através das bases de dados</p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                <strong>Protocolo:</strong> NL1K0.250522<br/>
                <strong>Período:</strong> 30/06/2022 a 30/06/2027<br/>
                <strong>Coordenador:</strong> Prof. Dr. Carlos Eduardo da Costa Campos<br/>
                <strong>Situação:</strong> Em andamento<br/>
                <strong>Fomento:</strong> CNPQ<br/>
                <a href="https://boletimoficial.ufms.br/bse/publicacao?id=457852" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold)", textDecoration: "underline" }}>Link para o edital</a>
              </p>
            </div>
            
            <div className="card" style={{ borderLeft: "4px solid var(--color-gold)" }}>
              <p style={{ fontWeight: "bold", color: "var(--color-text)", marginBottom: "0.5rem" }}>• Pesquisa e Ensino sobre Antiguidade: estudos de arqueologia-histórica sobre as práticas mágicas latinas (século I AEC - V EC)</p>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                <strong>Protocolo:</strong> HT0QN.310321<br/>
                <strong>Período:</strong> 16/04/2021 a 01/04/2026<br/>
                <strong>Coordenador:</strong> Prof. Dr. Carlos Eduardo da Costa Campos<br/>
                <strong>Situação:</strong> Em andamento<br/>
                <strong>Fomentos:</strong> PIBIC-UFMS, PIBIC-CNPQ
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Iniciação Científica (CNPQ / FUNDECT / UFMS)</h2>
          <div className="divider" />
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            <div className="card">
              <p style={{ fontWeight: "bold", fontSize: "0.95rem", color: "var(--color-text)", marginBottom: "0.5rem" }}>Repertório temático e tradução das defixiones da Península Ibérica</p>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                <strong>Protocolo:</strong> VT2D5.140621<br/>
                <strong>Período:</strong> 2021 a 2022 | <strong>Situação:</strong> Finalizado<br/>
                <strong>Discente:</strong> Leonardo Arguello Alves | <strong>Fomento:</strong> CNPQ
              </p>
            </div>

            <div className="card">
              <p style={{ fontWeight: "bold", fontSize: "0.95rem", color: "var(--color-text)", marginBottom: "0.5rem" }}>Repertório temático e tradução das defixiones da Gália Romana</p>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                <strong>Protocolo:</strong> 7VMMA.060622<br/>
                <strong>Período:</strong> 2022 a 2023 | <strong>Situação:</strong> Finalizado<br/>
                <strong>Discente:</strong> Leonardo Arguello Alves | <strong>Fomento:</strong> UFMS
              </p>
            </div>

            <div className="card">
              <p style={{ fontWeight: "bold", fontSize: "0.95rem", color: "var(--color-text)", marginBottom: "0.5rem" }}>Deuses e Heróis nas Moedas Augustanas do MHN</p>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                <strong>Protocolo:</strong> 334OT.270622<br/>
                <strong>Período:</strong> 2022 a 2023 | <strong>Situação:</strong> Finalizado<br/>
                <strong>Discente:</strong> Luis Miguel Pereira Lacerda | <strong>Fomento:</strong> CNPQ
              </p>
            </div>

            <div className="card">
              <p style={{ fontWeight: "bold", fontSize: "0.95rem", color: "var(--color-text)", marginBottom: "0.5rem" }}>Análise numismática das cunhagens sobre a deusa Hécate</p>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                <strong>Protocolo:</strong> NBRAD.280523<br/>
                <strong>Período:</strong> 2023 a 2024 | <strong>Situação:</strong> Em andamento<br/>
                <strong>Discente:</strong> Germano Torres Neto | <strong>Fomento:</strong> UFMS
              </p>
            </div>

            <div className="card">
              <p style={{ fontWeight: "bold", fontSize: "0.95rem", color: "var(--color-text)", marginBottom: "0.5rem" }}>Reconstrução 3D do sítio romano de Miróbriga</p>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                <strong>Protocolo:</strong> 1MKL4.260523<br/>
                <strong>Período:</strong> 2023 a 2024 | <strong>Situação:</strong> Em andamento<br/>
                <strong>Discente:</strong> Miguel Angelo Oliveira de Almeida | <strong>Fomento:</strong> CNPq
              </p>
            </div>

            <div className="card">
              <p style={{ fontWeight: "bold", fontSize: "0.95rem", color: "var(--color-text)", marginBottom: "0.5rem" }}>As moedas do Imperador Tibério no MHN</p>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                <strong>Protocolo:</strong> ERB6C.260523<br/>
                <strong>Período:</strong> 2023 a 2024 | <strong>Situação:</strong> Em andamento<br/>
                <strong>Discente:</strong> João Guilherme Vieira Poiati | <strong>Fomento:</strong> FUNDECT - MS
              </p>
            </div>
            
            <div className="card">
              <p style={{ fontWeight: "bold", fontSize: "0.95rem", color: "var(--color-text)", marginBottom: "0.5rem" }}>A paisagem fúnebre-religiosa e o processo de interação cultural no Império Romano (Voluntário)</p>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: "1.6" }}>
                <strong>Protocolo:</strong> WP7EA.280722<br/>
                <strong>Período:</strong> 2022 a 2023 | <strong>Situação:</strong> Finalizado<br/>
                <strong>Discente:</strong> João Pedro Nantes Carvalho
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Bolsas de Extensão e Projetos de Ensino/Extensão</h2>
          <div className="divider" />
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
            <div className="card">
              <p style={{ fontWeight: "bold", color: "var(--color-text)", marginBottom: "0.5rem" }}>Bolsistas de Extensão (2022)</p>
              <ul style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginLeft: "1.5rem" }}>
                <li><strong>1NYX8.060322:</strong> Descrição de artefatos Pré-Históricos (João Guilherme Vieira Poiati)</li>
                <li><strong>VZV4E.060322:</strong> Catalogação de artefatos Pré-Históricos (Julia Roberta Melo Ribeiro)</li>
                <li><strong>WHPWS.080422:</strong> Catalogação e organização do acervo do IHG-MS (Lara Karinina Viana de Almeida)</li>
                <li><strong>72OQR.110422:</strong> Descrição de Acervo Histórico do IHG-MS (Vinícius Mancini Alves)</li>
              </ul>
            </div>
            
            <div className="card">
              <p style={{ fontWeight: "bold", color: "var(--color-text)", marginBottom: "0.5rem" }}>Projetos de Ensino</p>
              <ul style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginLeft: "1.5rem" }}>
                <li><strong>HMEZM.150224:</strong> Um dia no Museu (Parte VI) - 2024 (Em andamento)</li>
                <li><strong>7KNGE.280323:</strong> Um dia no Museu (Parte V) (Finalizado)</li>
                <li><strong>FBORT.100621:</strong> Estudos Interdisciplinares (Parte III) - 2021 (Finalizado)</li>
              </ul>
            </div>
            
            <div className="card">
              <p style={{ fontWeight: "bold", color: "var(--color-text)", marginBottom: "0.5rem" }}>Projetos de Extensão</p>
              <ul style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginLeft: "1.5rem" }}>
                <li><strong>53U9O.150224:</strong> Os Ludi: jogando nas escolas e aprendendo história (Em andamento)</li>
                <li><strong>CIXJ4.150224:</strong> Lectio: produção de materiais didáticos (Em andamento)</li>
                <li><strong>ZSVE5.150224:</strong> Imago: animações para divulgação científica (Em andamento)</li>
                <li><strong>APAGT.150224:</strong> ATRIVM NO AR (Em andamento)</li>
                <li><strong>SF1K3.130323:</strong> Sítio Escola de Arqueologia (Finalizado)</li>
                <li><strong>K9HW1.031123:</strong> IV Encontro Nacional do ATRIVM UFMS (Finalizado)</li>
                <li><strong>EDABY.050421:</strong> Práticas de Ensino e Pesquisa no Museu de Arqueologia (Finalizado)</li>
                <li><strong>DJDRA.020622:</strong> Programa de Popularização da Ciência Arqueológica (Em andamento)</li>
                <li><strong>404519/2022-9:</strong> Um dia no museu (Fomento SNCT 2022 - Finalizado)</li>
                <li><strong>LTV23.151221:</strong> Ensino de Ciências Arqueológicas e Históricas (Finalizado)</li>
              </ul>
            </div>

            <div className="card">
              <p style={{ fontWeight: "bold", color: "var(--color-text)", marginBottom: "0.5rem" }}>Vem Pra UFMS (2022)</p>
              <ul style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: "1.6", marginLeft: "1.5rem" }}>
                <li><strong>FAUD3.260422:</strong> Vem pra Arqueologia e Pré-História de Mato Grosso do Sul (Finalizado)</li>
                <li>Um dia no Museu: Divulgação Científica nas Escolas de Mato Grosso do Sul (Finalizado)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Projetos Concluídos (2018 - 2021)</h2>
          <div className="divider" />
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
            {[
              "Catalogação de artefatos Pré-Históricos (Bolsa de Extensão 2021 - Clara Alice Nepomuceno)",
              "Descrição de artefatos Pré-Históricos (Bolsa de Extensão 2021 - João Pedro Nantes Carvalho)",
              "Repertório temático e tradução das defixiones (PIBIC 2021 - Leonardo Arguello Alves)",
              "Práticas de Ensino e Pesquisa no Museu de Arqueologia da UFMS (Extensão 2021)",
              "Estudos Interdisciplinares Parte II e Parte III (Ensino e Pesquisa - 2021)",
              "Ensino e Pesquisa em História Antiga: estudos de numismática (PIBIC 2020 - Luis Miguel Pereira Lacerda)",
              "Ensino e Pesquisa em História Antiga: interações entre China e Roma (Joalisson Souza)",
              "Desafios e novas perspectivas sobre a iconografia numismática (Pesquisa 2018)",
              "Base de dados para o repertório sobre a iconografia augustana (PIBIC CNPQ 2019-2020 - Emerson Ubinson)",
              "Ensino e Pesquisa em História Antiga através dos Memes (PIVIC 2018 - Martha Mandarino)",
              "Cursinho UFMS Polo CPCX (Extensão 2018)",
              "I Encontro Nacional do ATRIVM / UFMS e VIII Seminário de Pesquisa (Extensão 2019)",
            ].map((proj, idx) => (
              <div key={idx} style={{ padding: "0.75rem", borderLeft: "3px solid var(--color-gold)", background: "var(--color-bg-section)", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                {proj}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
