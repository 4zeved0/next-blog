Blog em Next.js com Sanity.io
Bem-vindo ao repositório do Blog em Next.js com Sanity.io! Este projeto é um blog moderno desenvolvido utilizando diversas tecnologias de ponta para proporcionar uma experiência rica e responsiva. Abaixo, você encontrará instruções sobre como configurar e executar o projeto, bem como uma visão geral das tecnologias utilizadas.

Tecnologias Utilizadas
Next.js: Framework de React para desenvolvimento de aplicações web com renderização do lado do servidor.
React.js: Biblioteca JavaScript para construção de interfaces de usuário.
TailwindCSS: Framework de CSS utilitário para estilização rápida e responsiva.
React Responsive Carousel: Biblioteca para criação de carrosséis responsivos em React.
Sanity.io: CMS headless para gerenciamento de conteúdo.
Funcionalidades
Interface Responsiva: Layouts que se adaptam a diferentes tamanhos de tela usando TailwindCSS.
Carrossel de Imagens: Implementação de carrosséis utilizando React Responsive Carousel.
CMS Headless: Gerenciamento de conteúdo eficiente e flexível com Sanity.io.
Renderização do Lado do Servidor: Melhor desempenho e SEO com Next.js.
Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados em sua máquina. Você pode baixá-los aqui.

Instalação
Clone este repositório: 

bash
git clone https://github.com/4zeved0/next-blog
cd next-blog
Instale as dependências:

bash
Copiar código
npm install
Configure o Sanity.io:

Crie um projeto no Sanity.io.
Configure o schema do seu conteúdo conforme a necessidade do seu blog.
Obtenha as credenciais do seu projeto (project ID, dataset, etc.) e configure as variáveis de ambiente no arquivo .env.local na raiz do projeto:
env
Copiar código
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id
NEXT_PUBLIC_SANITY_DATASET=seu_dataset
Executando o Projeto
Para iniciar o servidor de desenvolvimento, execute:

bash
Copiar código
npm run dev
Abra http://localhost:3000 no navegador para ver o resultado.

Estrutura do Projeto
A estrutura do projeto é a seguinte:

bash
Copiar código
/src/blog         # Arquivos públicos, como imagens e ícones
/pages          # Páginas da aplicação Next.js
/components     # Componentes React reutilizáveis
/styles         # Estilos globais e customizações do TailwindCSS
/lib            # Configurações e funções auxiliares
/sanity         # Configurações do Sanity.io

LinkedIn: [Meu perfil](https://www.linkedin.com/in/miguel-asantos/)
