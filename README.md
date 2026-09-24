# Site ATRIVM UFMS

Novo site institucional do ATRIVM, laboratório interdisciplinar e grupo de pesquisa da UFMS dedicado aos estudos da Antiguidade, que reúne publicações, equipe, projetos, podcast, modelos 3D e eventos em um só lugar.

Projeto desenvolvido por Pedro Paulo Lacerda, integrante da equipe do laboratório, para o ATRIVM da Universidade Federal de Mato Grosso do Sul (UFMS).

## Funcionalidades

- **Páginas institucionais**: início, sobre o laboratório, equipe (coordenação, pesquisadores e discentes) e linhas de pesquisa.
- **Catálogo de publicações** com capa, autores, editora, ano, tipo e link para download de cada obra.
- **Projetos do laboratório**: acervo de numismática, projeto de extensão Um Dia no Museu, séries de animações (YouTube e Instagram), modelos 3D publicados no Sketchfab e podcast no Spotify.
- **Ações e fomentos**: acordos de cooperação técnica, bolsas, projetos de pesquisa, iniciação científica, extensão e projetos concluídos.
- **Eventos**: agenda de cursos, webinários e informes, além de uma página dedicada ao Encontro Internacional do ATRIVM, com minicursos e parceiros.
- **Sites e periódicos**: diretório de sites parceiros, bases digitais e revistas científicas para estudos clássicos.
- **Navegação responsiva** com menus suspensos no desktop, menu mobile e destaque da seção ativa.

## Stack

- Next.js 16 (App Router) e React 19
- TypeScript 5
- CSS global com variáveis de tema e CSS Modules nos componentes compartilhados
- `next/font` com a fonte Montserrat
- ESLint 9 com `eslint-config-next`

## Estrutura

```
atrivm/
├── src/
│   ├── app/                        # uma pasta por rota: sobre, equipe, publicacoes, eventos, contato...
│   │   └── projetos/               # numismática, Um Dia no Museu, animações, modelos 3D, podcast, ações
│   └── components/                 # Navbar e Footer (CSS Modules)
├── public/capas/                   # capas das publicações usadas no catálogo
├── capa_das_publicacoes/           # arquivos originais das capas
└── analise_estrutura_ATRIVM_UFMS.md  # análise de estrutura e conteúdo do site do laboratório na plataforma Wix
```

## Como rodar localmente

Pré-requisito: Node.js 20.9 ou superior (exigência do Next.js 16).

```bash
git clone https://github.com/pplacerda07/atrivm.git
cd atrivm
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Não há variáveis de ambiente nem banco de dados a configurar.

Outros scripts:

```bash
npm run build   # build de produção
npm run start   # serve o build
npm run lint    # ESLint
```

## Decisões técnicas

- **Conteúdo como dados tipados**: publicações, equipe, eventos e projetos ficam em arrays TypeScript dentro de cada página e são renderizados por Server Components, sem banco de dados nem CMS. Atualizar o site é editar uma lista.
- **Dependências mínimas**: em produção o projeto usa apenas `next`, `react` e `react-dom`. A estilização é feita com CSS global (cores e tipografia em variáveis) e CSS Modules, sem biblioteca de UI.
- **SEO com a Metadata API**: o layout define título padrão com template `%s | ATRIVM UFMS`, descrição e palavras-chave, e cada página declara seu próprio `metadata`.
- **Materiais externos por link**: vídeos, modelos 3D, episódios do podcast e PDFs das publicações ficam nas plataformas de origem (YouTube, Instagram, Sketchfab, Spotify, Google Drive e site de editora), mantendo o repositório leve.

## Autor

Pedro Paulo Lacerda · [github.com/pplacerda07](https://github.com/pplacerda07)
