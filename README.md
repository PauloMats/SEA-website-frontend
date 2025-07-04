# Projeto SEA: A Próxima Geração do Apoio Emocional no Brasil

Este é o repositório do projeto **SEA**, uma plataforma inovadora que visa revolucionar o apoio emocional no Brasil, combinando **inteligência artificial empática** com a **conexão humana de psicólogos**.

---

## 📚 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Deploy](#deploy)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## 🧠 Sobre o Projeto

O **SEA (Sistema de Apoio Emocional)** surge como uma resposta à crescente crise de saúde mental no Brasil. A plataforma oferece:

- **IA Empática 24/7**: Suporte instantâneo e qualificado através de uma IA treinada em **TCC (Terapia Cognitivo-Comportamental)**, capaz de detectar crises através da análise de voz e texto.
- **Dados Biométricos**: Integração com **wearables** para criar um "diário emocional objetivo", transformando dados vitais em insights acionáveis.
- **Conexão Humana**: Uma ponte para psicólogos e clínicas, com **dashboards de insights** e **agendamento facilitado**, empoderando profissionais.

O projeto é construído com foco em **escalabilidade**, **acessibilidade** e uma **experiência de usuário intuitiva**.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações web com SSR e SSG.
- **React.js**: Biblioteca JavaScript para construção de interfaces.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **ESLint**: Ferramenta para linting de código JavaScript/TypeScript.

---

## ⚙️ Configuração do Ambiente

Para configurar o ambiente de desenvolvimento e rodar o projeto localmente, siga os passos abaixo:

```bash
# Clone o repositório
git clone <URL_DO_SEU_REPOSITORIO>
cd seu-projeto-sea

# Instale as dependências
npm install
# ou
yarn install
```

## 🧱 Estrutura do Projeto
A estrutura básica do projeto segue as convenções do Next.js:
```bash
seu-projeto-sea/
├── public/                  # Arquivos estáticos (imagens, etc.)
│   └── img/
│       └── logo-sea.png
├── src/
│   ├── app/                 # Páginas do Next.js (App Router)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── Footer.tsx
│   │   ├── MercadoChart.tsx
│   │   ├── Navbar.tsx
│   │   ├── PrevalenciaChart.tsx
│   │   └── TelepsicologiaChart.tsx
│   └── styles/              # Arquivos de estilo globais (ex: globals.css)
├── next.config.ts           # Configuração do Next.js
├── next-env.d.ts            # Tipos de ambiente do Next.js
├── postcss.config.mjs       # Configuração do PostCSS
├── tailwind.config.ts       # Configuração do Tailwind CSS
├── tsconfig.json            # Configuração do TypeScript
├── package.json
├── yarn.lock (ou package-lock.json)
└── README.md
```
