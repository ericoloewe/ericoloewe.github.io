"use client";

import "./page.scss";

import { Layout } from "./shared/layout";
import { Links } from "./components/links";

function Home() {
  return (
    <div className="main">
      <main className={`main home p5`}>
        <div className="profile_info">
          <h1 className="name">Érico de Souza Loewe</h1>
          <p className="description">
            🎵 Amo musica <br />
            🎸 Amo meu violão <br />
            🛹 Amo aventura e tenho um long <br />
            🏄🏽‍♂️ Amo surf <br />
            👨‍💻 Software Developer na{" "}
            <a href="https://www.dbccompany.com.br/" target="_blank" rel="noopener noreferrer">
              DBC Company
            </a>{" "}
            <br />
            👨‍💻 Formado em Ciência da Computação na{" "}
            <a href="https://www.feevale.br/" target="_blank" rel="noopener noreferrer">
              Universidade Feevale
            </a>{" "}
            <br />
            👨‍💻 Desenvolveu um{" "}
            <a href="https://ericoloewe.github.io/computer-science-tcc/" target="_blank">
              plugin de recomendação para o Spotify
            </a>{" "}
            <br />
            👨‍💻 Desenvolveu um{" "}
            <a href="https://ericoloewe.github.io/snake/" target="_blank" rel="noopener noreferrer">
              snake game
            </a>{" "}
            <br />
            🏢 Fundador do {" "}
            <a href="https://loewesolucoes.github.io/" target="_blank">
              @loewe.solucoes
            </a>{" "}
            <br />
          </p>
        </div>
        <Links />
      </main>
    </div>
  );

}

export default function Page() {

  return (
    <>
      <img className="background" src="./erico-loewe.jpg" alt="Surfista Érico de Souza Loewe na praia" />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
