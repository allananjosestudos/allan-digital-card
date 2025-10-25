# Cartão de Visita Digital - Allan Felipe dos Anjos

Um cartão de visita digital profissional e interativo desenvolvido com **React**, **TypeScript**, **Tailwind CSS** e **Vite**.

## 🎨 Design

O cartão apresenta um design **tecnológico e minimalista** com:

- **Tema escuro** com tons azul-escuro (#0a0a0a), preto (#1a1a1a) e branco
- **Tipografia moderna** usando Roboto e Montserrat (Google Fonts)
- **Linhas geométricas finas** e iluminação azul suave
- **Animações sutis** com efeitos de hover
- **Design totalmente responsivo** para smartphones e desktops

## 📋 Conteúdo

O cartão inclui as seguintes seções:

- **Informações de Contato:** Nome, cargo, localização, email e telefone
- **QR Code:** Link direto para o perfil do LinkedIn
- **Redes Sociais:** Ícones clicáveis para LinkedIn, GitHub e Instagram
- **Resumo Profissional:** Descrição da experiência e competências
- **Especialidades:** Tags com as principais áreas de atuação
- **Certificações:** Listagem de certificações profissionais
- **Projetos de Destaque:** Projetos relevantes realizados
- **Idiomas:** Idiomas que fala
- **Serviços:** Serviços oferecidos

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework UI
- **TypeScript** - Linguagem tipada
- **Tailwind CSS 4** - Utilitários CSS
- **Vite** - Build tool
- **Lucide React** - Ícones
- **shadcn/ui** - Componentes UI

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/allananjosestudos/allan-digital-card.git

# Entre no diretório
cd allan-digital-card

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm run dev
```

## 🔨 Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
pnpm run dev

# Faz o build para produção
pnpm run build

# Visualiza o build de produção localmente
pnpm run preview

# Executa o linter
pnpm run lint
```

## 🌐 Hospedagem

O cartão está hospedado no **GitHub Pages** e pode ser acessado em:

```
https://allananjosestudos.github.io/allan-digital-card/
```

### Configuração do GitHub Pages

1. Vá para **Settings > Pages** do repositório
2. Em "Build and deployment", selecione:
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** / (root)
3. Clique em **Save**

## 📝 Customização

Para customizar o cartão, edite o arquivo `client/src/components/DigitalCard.tsx`:

```tsx
const contactInfo = {
  name: "Seu Nome",
  title: "Seu Título",
  location: "Sua Localização",
  email: "seu.email@example.com",
  phone: "(XX) XXXXX-XXXX",
  linkedin: "https://www.linkedin.com/in/seu-perfil",
  github: "https://github.com/seu-usuario",
  instagram: "https://www.instagram.com/seu-usuario/",
};
```

## 🎯 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ QR Code gerado dinamicamente
- ✅ Links clicáveis para contato (email, telefone, redes sociais)
- ✅ Animações de hover suaves
- ✅ Tema escuro otimizado
- ✅ Acessibilidade (WCAG)
- ✅ Performance otimizada

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

**Allan Felipe dos Anjos**
- 📍 Curitiba, Paraná, Brasil
- 📧 allafelipedosanjos6@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/allanfelipe-ti)
- 🐙 [GitHub](https://github.com/allananjosestudos)
- 📸 [Instagram](https://www.instagram.com/allanorigamiart/)

---

Desenvolvido com ❤️ usando React e Tailwind CSS.

