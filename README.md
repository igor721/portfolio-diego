# Portfolio Diego — Atleta de Bodybuilding

Site profissional e responsivo desenvolvido como portfólio digital do atleta de bodybuilding **Diego**, de 19 anos, representante da Paraíba.

O projeto tem como objetivo apresentar a trajetória esportiva, conquistas competitivas e facilitar a captação de patrocinadores e parceiros comerciais.

---

## Tecnologias

- **Next.js 15** (App Router + Static Export)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **Lucide React** (ícones)

---

## Estrutura do projeto

```
portfolio-diego/
├── public/
│   ├── images/          # Fotos do atleta (substituir placeholders)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/      # Componentes das seções
│   └── data/
│       └── athlete.ts   # ★ Central de dados editáveis
├── .github/workflows/
│   └── deploy.yml       # Deploy automático no GitHub Pages
├── package.json
├── next.config.ts
└── README.md
```

---

## Como editar o conteúdo

**Todas as informações do atleta estão centralizadas em um único arquivo:**

```
src/data/athlete.ts
```

Nesse arquivo você pode alterar:

| Campo | Descrição |
|-------|-----------|
| `name`, `age`, `modality`, `state` | Dados básicos |
| `biography` | Texto da seção Sobre |
| `achievements` | Conquistas e competições |
| `goals` | Objetivos esportivos |
| `gallery` | Legendas e caminhos das fotos |
| `sponsorship` | Textos comerciais |
| `contact` | Instagram, WhatsApp e e-mail |
| `seo` | Título e descrição para SEO |

### Contatos

Preencha os campos em `athlete.contact`:

```ts
contact: {
  instagram: "@seuusuario",           // sem https://
  whatsapp: "5583999999999",          // código do país + DDD + número
  email: "contato@exemplo.com",       // opcional
  // ...
}
```

---

## Imagens

Substitua os arquivos na pasta `public/images/`:

| Arquivo | Uso |
|---------|-----|
| `hero-diego.jpg` | Foto principal da seção Hero |
| `foto-01.jpg` a `foto-06.jpg` | Galeria (6 espaços) |

Recomendações:
- Formato: JPG ou WebP
- Proporção aproximada: 3:4 (retrato)
- Resolução: mínimo 800px de largura

Enquanto as imagens reais não forem adicionadas, o site exibe placeholders identificados.

---

## Instalação e desenvolvimento local

```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/portfolio-diego.git
cd portfolio-diego

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## Build de produção

```bash
npm run build
```

O Next.js gera a versão estática na pasta `out/`.

---

## Publicação no GitHub Pages

### 1. Configuração do repositório

1. Crie um repositório no GitHub com o nome **`portfolio-diego`** (ou ajuste o `basePath` no `next.config.ts`).
2. Faça o push do código para a branch `main`.

### 2. Ativar GitHub Pages

1. Vá em **Settings → Pages**.
2. Em **Source**, selecione **GitHub Actions**.

### 3. Deploy automático

O workflow em `.github/workflows/deploy.yml` faz o build e publica automaticamente a cada push na branch `main`.

Após o primeiro deploy bem-sucedido, o site estará disponível em:

```
https://SEU_USUARIO.github.io/portfolio-diego/
```

### Ajuste do basePath

Se o repositório tiver outro nome, edite `next.config.ts`:

```ts
basePath: process.env.NODE_ENV === "production" ? "/NOME-DO-REPO" : "",
assetPrefix: process.env.NODE_ENV === "production" ? "/NOME-DO-REPO/" : "",
```

---

## Identidade visual

| Elemento | Valor |
|----------|-------|
| Cor principal | Preto (`#0a0a0a`) |
| Destaques | Dourado (`#d4a017`) |
| Textos | Branco / cinza claro |
| Tipografia display | Bebas Neue |
| Tipografia corpo | Inter |

---

## Seções do site

1. **Hero** — Apresentação impactante com CTAs
2. **Sobre** — Dados e biografia do atleta
3. **Conquistas** — Cards das competições e resultados
4. **Objetivos** — Destaque para o processo seletivo Sul-Americano
5. **Galeria** — 6 espaços para fotografias com lightbox
6. **Patrocínios** — Proposta comercial para marcas
7. **Contato** — Instagram, WhatsApp e e-mail

---

## Licença

Projeto desenvolvido para uso pessoal do atleta Diego. Todos os direitos reservados.
