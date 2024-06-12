import React from "react";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#ffe6e6",
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ padding: "50px" }}>
        <h1 style={{ color: "#ff6666" }}>
          Invadir o site só para te desejar: Feliz Dia dos Namorados, Meu Amor!
        </h1>
        <div style={{ margin: "20px 0" }}>
          <img
            src="https://media.giphy.com/media/3o7aD4lRz6t0gIhG7y/giphy.gif"
            alt="Corações Animados"
          />
        </div>
        <p style={{ color: "#333", fontSize: "1.2em" }}>Minha linda Esposa,</p>
        <p style={{ color: "#333", fontSize: "1.2em" }}>
          Neste Dia dos Namorados, quero que você saiba o quanto eu te amo e
          aprecio cada momento que passamos juntos. Você é a luz da minha vida e
          a razão do meu sorriso todos os dias. No final de todos os dias, você
          faz tudo valer a pena!
        </p>
        <div style={{ margin: "20px 0" }}>
          <img
            src="https://media.giphy.com/media/xThta9RSK7ob0p0w4k/giphy.gif"
            alt="Amor e Romance"
          />
        </div>
        <p style={{ color: "#333", fontSize: "1.2em" }}>
          Obrigado por ser a parceira incrível que você é. Meu amor por você é
          indescritível! Quem sabe no futuro isso seja possível de mensurar, mas
          no momento esse sentimento é indescritível!
        </p>
        <div style={{ margin: "20px 0" }}>
          <img
            src="https://media.giphy.com/media/l0ExncehJzexFpRHq/giphy.gif"
            alt="Flores para Você"
          />
        </div>
        <p style={{ color: "#333", fontSize: "1.2em" }}>
          Com todo o meu amor,
          <br />
          [Seu Nome]
        </p>
      </div>
    </div>
  );
}

function teste() {
  console.log("teste");
}

function teste2() {
  console.log("identação errada");
}

export default Home;
