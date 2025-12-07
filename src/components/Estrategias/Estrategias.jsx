{/* importando o modulo correto*/}
import styles from "./Estrategias.module.css"; 
import React, { useState } from 'react';


const Estrategias = () => {
  {/* forma de lista*/}
  const servicos = [
    {
      numero: "01",
      titulo: "Terapia Individual",
      desc: "Terapia individual para superar bloqueios emocionais e promover crescimento pessoal.",
      icon: "/img-servicos/icone-pessoa.png",
      imagem: "/img-servicos/prancheta.png"
    },
    {
      numero: "02",
      titulo: "Psicoterapia de Casal",
      desc: "Melhore sua relação com a terapia de casal, focando em comunicação e resolução de conflitos.",
      icon: "/img-servicos/icone-coracao.png",
      imagem: "/img-servicos/mulheres.png"
    },
    {
      numero: "03",
      titulo: "Nutrição Clínica e Esportiva",
      desc: "Planos personalizados para melhorar saúde, desempenho físico e alcançar metas esportivas.",
      icon: "/img-servicos/icone-coracao.png",
      imagem: "/img-servicos/mulheres.png"
    },
  ];

  return (
    <div className={styles.container}>
      <span className={styles.label}>NOSSOS SERVIÇOS</span>

      <h1 className={styles.equipeTitle}>
        Desenvolvemos estratégias personalizadas para promover seu Bem-estar
      </h1>

      
      <div className={styles.cardsWrapper}>
        {servicos.map((s, i) => (
          <div className={styles.card} key={i}>
            
            <div className={styles.shape}></div>

            <div className={styles.top}>
              <h1>{s.numero}</h1>
              <div className={styles.iconBox}>
                <img src={s.icon} alt="Ícone" />
              </div>
            </div>

            <h3 className={styles.titulo}>{s.titulo}</h3>
            <p className={styles.desc}>{s.desc}</p>

            <img className={styles.bottomImage} src={s.imagem} alt={s.titulo} />
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button className={styles.button}>ENTRE EM CONTATO</button>
      </div>
    </div>
  );
};

export default Estrategias;