# 📝 ToDo List

<p align="center">
  <img src="https://github.com/NandaPersa/to-do-list/assets/31897281/1e5f8a2c-3a55-49bf-85a7-0d7e8d06205d" alt="Demonstração do ToDo List" width="100%" />
</p>

O **ToDo List** é uma aplicação web moderna e responsiva para gerenciamento de tarefas, desenvolvida com React, TypeScript e Vite. O projeto permite organizar as atividades diárias com facilidade, acompanhando em tempo real o progresso das tarefas criadas e concluídas.

---

## 🚀 Funcionalidades

- **Criação de Tarefas**: Adicione novas tarefas à lista rapidamente com validação de campo preenchido.
- **Alternar Status**: Marque e desmarque tarefas como concluídas com feedback visual (estilo tachado e ícone de check).
- **Remoção de Tarefas**: Exclua tarefas da lista com um clique no botão de lixeira.
- **Contadores em Tempo Real**:
  - Total de tarefas criadas.
  - Total de tarefas concluídas sobre o total existente.
- **Estado Vazio (Empty State)**: Mensagem ilustrada amigável quando não houver nenhuma tarefa cadastrada.
- **Design Responsivo**: Adaptado para diferentes resoluções e tamanhos de tela.

---

## 🛠️ Tecnologias Utilizadas

As principais ferramentas e bibliotecas utilizadas no desenvolvimento do projeto foram:

- [React](https://react.dev/) (v18)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Phosphor Icons](https://phosphoricons.com/) (`phosphor-react`)
- [CSS Modules](https://github.com/css-modules/css-modules) para estilização componentizada

---

## 📁 Estrutura de Pastas

```text
to-do-list/
├── public/
├── src/
│   ├── assets/              # Ícones e imagens estáticas
│   ├── components/
│   │   ├── Header/          # Cabeçalho da aplicação com logo
│   │   ├── Task/            # Componente individual de item da tarefa
│   │   └── TextField/       # Formulário de entrada para novas tarefas
│   ├── App.tsx              # Componente principal e controle de estado
│   ├── global.css           # Estilos globais da aplicação
│   ├── main.tsx             # Ponto de entrada da aplicação
│   └── styles.module.css    # Estilos do layout principal
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- Gerenciador de pacotes [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone git@github.com:NandaPersa/to-do-list.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd to-do-list
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Abra o navegador e acesse a URL indicada no terminal (geralmente `http://localhost:5173`).

### 📦 Outros Scripts Disponíveis

- **Build de produção:**
  ```bash
  npm run build
  # ou
  yarn build
  ```
- **Visualizar build local:**
  ```bash
  npm run preview
  # ou
  yarn preview
  ```
- **Executar ESLint:**
  ```bash
  npm run lint
  # ou
  yarn lint
  ```

---

## 👩‍💻 Autora

Desenvolvido por **Ananda Sá**.

- GitHub: [@NandaPersa](https://github.com/NandaPersa)
