"use client";

import "./page.scss";

import { Layout } from "./shared/layout";
import { Links } from "./components/links";

const topics = [
  {
    title: <h5>🎵 Apaixonado por Música e Violão 🎸</h5>,
    description: <>
      <p>Sou um entusiasta da música e dedico meu tempo livre ao violão. 🎶</p>
      <p>Desenvolvi um <a href="https://ericoloewe.github.io/computer-science-tcc/" target="_blank">plugin de recomendação para o Spotify</a>, tornando a experiência musical ainda mais personalizada. 🎧</p>
    </>,
  },
  {
    title: <h5>🛹 Aventureiro e Surfista 🏄🏽‍♂️</h5>,
    description: <>
      <p>Adoro aventuras e tenho um longboard para explorar novos lugares. 🌊</p>
      <p>Meu amor pelo surf me conecta com a natureza e me inspira. 🌴</p>
    </>,
  },
  {
    title: <h5>👨‍💻 Desenvolvedor de Software na <a href="https://www.dbccompany.com.br/" target="_blank" rel="noopener noreferrer">DBC Company</a></h5>,
    description: <>
      <p>Trabalho como desenvolvedor de software na <a href="https://www.dbccompany.com.br/" target="_blank" rel="noopener noreferrer">DBC Company</a>, onde aplico minha paixão pela programação. 💻</p>
      <p>Formado em Ciência da Computação pela <a href="https://www.feevale.br/" target="_blank" rel="noopener noreferrer">Universidade Feevale</a>, tenho uma base sólida em teoria e prática. 🎓</p>
    </>,
  },
  {
    title: <h5>🏢 Fundador da <a href="https://loewesolucoes.github.io/" target="_blank">@loewe.solucoes</a></h5>,
    description: <>
      <p>Fundei a <a href="https://loewesolucoes.github.io/" target="_blank">@loewe.solucoes</a>, onde aplico minha criatividade e habilidades técnicas para resolver problemas. 💡</p>
      <p>Também criei um jogo <a href="https://ericoloewe.github.io/snake/" target="_blank" rel="noopener noreferrer">“snake”</a> como projeto pessoal. 🐍</p>
    </>,
  },
]

function Home() {
  return (
    <main className={`py-5 px-2`}>
      <div className="profile_info">
        <h1 className="name mb-3">Érico de Souza Loewe</h1>
        <ul>
          {topics.map((x, i) => (
            <li key={i}>
              {x.title}
              {x.description}
            </li>
          ))}
        </ul>
      </div>
      <Links />
    </main>
  );

}

export default function Page() {

  return (
    <>
      <Layout>
        <Home />
      </Layout>
      <img className="background" src="./erico-loewe.jpg" alt="Surfista Érico de Souza Loewe na praia" />
    </>
  );
}
