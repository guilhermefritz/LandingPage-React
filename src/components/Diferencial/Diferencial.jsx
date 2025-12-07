import styles from "./Diferencial.module.css";

function Diferencial() {
  return (
    <section className={styles.container}>
      {/* Lado esquerdo */}
      <div className={styles.left}>
        <span className={styles.subtitle}>Por que nos escolher?</span>

        <h2 className={styles.title}>
          A diferença não está no que fazemos, está em como começamos.
        </h2>

        <p className={styles.text}>
          Escolher onde se abrir e buscar ajuda é um ato de coragem. No Instituto
          Attuare, essa escolha é retribuída com cuidado que combina
          conhecimento técnico e presença humana. Desde entender o que está te
          bloqueando até construir rotina emocional sustentável, estamos ao seu
          lado com um olhar integrado e sem pressa.
        </p>

        <button className={styles.button}>ENTRE EM CONTATO</button>
      </div>

      {/* Lado direito */}
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.icon}>
            
            <img src="/img-diferencial/icone-luz.png" alt="Ícone 1" className={styles.iconImage} />
          </div>
          <div>
            <h3 className={styles.cardTitle}>Vou passar por uma mudança grande</h3>
            <p className={styles.cardText}>
              Mudanças de vida, como cirurgia bariátrica, perdas e novos ciclos
              afetam identidade e rotina. Apoio planejado ajuda a navegar pelos
              aspectos emocionais e práticos.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            {/* Ícone 2 */}
            <img src="/img-diferencial/icone-mala.png" alt="Ícone 2" className={styles.iconImage} />
          </div>
          <div>
            <h3 className={styles.cardTitle}>Estou exausto e sem foco</h3>
            <p className={styles.cardText}>
              Fadiga emocional, dificuldade de concentração e sensação de piloto
              automático. A terapia ajuda a reconstruir rotina com clareza,
              energia e propósito.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            {/* Ícone 3 */}
            <img src="/img-diferencial/icone-coracao.png" alt="Ícone 3" className={styles.iconImage} />
          </div>
          <div>
            <h3 className={styles.cardTitle}>Minha relação está desgastada</h3>
            <p className={styles.cardText}>
              Brigas, cansaço e distância emocional vêm da falta de
              comunicação e não de falta de amor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default  Diferencial;