# 💱 Conversor de Moedas Global

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-success)
![Framework](https://img.shields.io/badge/Framework-Next.js-black?logo=next.js)
![Estilização](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?logo=tailwind-css)

Uma aplicação web moderna, rápida e intuitiva para conversão de moedas globais (BRL, USD, EUR) em tempo real. Desenvolvido com foco em responsividade e precisão nos cálculos.

## 🚀 Demonstração ao Vivo

O projeto está publicado e pronto para uso:
👉 **[Acesse o Conversor de Moedas](https://cm-conversor.vercel.app/)**

---

## ✨ Funcionalidades

- **Conversão Bidirecional Simultânea:** Altere o valor de origem ou de destino, e o cálculo correspondente é atualizado dinamicamente via `useEffect`.
- **Inversão de Moedas Rápidas:** Botão de troca rápida que inverte instantaneamente as moedas selecionadas e seus respectivos valores.
- **Consumo de API em Tempo Real:** Integração assíncrona com API de cotações para garantir dados sempre atualizados.
- **Interface Responsiva & Moderna:** Construído com design focado na experiência do usuário, adaptando-se perfeitamente a dispositivos móveis e desktops.

---

## 🛠️ Tecnologias Utilizadas

- **Core:** Next.js (Client Component) & TypeScript
- **Estilização:** Tailwind CSS (utilizando CSS Variables integradas ao tema)
- **Ícones:** Lucide React (`LucideArrowLeftRight`)
- **Deploy:** Vercel

---

## ⚙️ Como Executar o Projeto Localmente

Se desejar clonar o repositório e rodar o ambiente de desenvolvimento na sua máquina, siga os passos abaixo:

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado.
- [Git](https://git-scm.com/) instalado.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/pedrohbhrj/Conversor-de-moedas.git](https://github.com/pedrohbhrj/Conversor-de-moedas.git)
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd Conversor-de-moedas
   ```
3. ** Instale as dependências:**
   ```bash
   npm install
   ```
4. ** Configure as Variáveis de Ambiente:
      Crie um arquivo .env.local na raiz do projeto e adicione a URL da sua API:**
   ```bash
   NEXT_PUBLIC_API_URL=sua_url_da_api_aqui
   ```
5. ** Inicie o servidor de desenvolvimento: **
    ```bash
    npm run dev
    ```
    Abra http://localhost:3000 no seu navegador para ver o resultado.
   
👨‍💻 Autor
Pedro Henrique Honorato Baptista

🔗 GitHub: [@pedrohbhrj](https://github.com/pedrohbhrj)

💼 LinkedIn: [@pedrohonorato](https://www.linkedin.com/in/pedro-hbh)

📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
