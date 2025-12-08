import styles from "./Diferencial.module.css";

function Diferencial() {
  return (
    <section className={styles.container}>
      {/* Lado esquerdo */}
      <div className={styles.left}>
        <span className={styles.sectionMarker}>Por que nos escolher?</span>

        <h2 className={styles.sectionTitle}>
          A diferença não está no que fazemos, está em como começamos.
        </h2>

        <p className={styles.text}>
          Escolher se abrir e buscar ajuda é um ato de coragem.No Instituto Attuare, essa coragem é acolhida com cuidado que combina
          conhecimento técnico e presença humana. Desde entender o que está te
          bloqueando até construir uma rotina emocional sustentável, estamos ao seu
          lado com um olhar integrado e sem pressa.
        </p>

        <button className={styles.whatsappButton}>
                                 <i className="fa-brands fa-whatsapp"></i> ENTRE EM CONTATO
                               </button>
      </div>

      {/* Lado direito com cards */}
      <div className={styles.right}>
        <div className={styles.cardsContainer}>
          
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <img src="/img-diferencial/icone-luz.png" alt="Mudança" className={styles.iconImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Vou passar por uma mudança grande</h3>
              <p className={styles.cardText}>
                Mudanças de vida, como cirurgia bariátrica, perdas e novos ciclos
                afetam identidade e rotina. Apoio planejado ajuda a navegar pelos
                aspectos emocionais e práticos.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <img src="/img-diferencial/icone-mala.png" alt="Exaustão" className={styles.iconImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Estou exausto e sem foco</h3>
              <p className={styles.cardText}>
                Fadiga emocional, dificuldade de concentração e sensação de piloto
                automático. A terapia ajuda a reconstruir rotina com clareza,
                energia e propósito.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <img src="/img-diferencial/icone-coracao.png" alt="Relação" className={styles.iconImage} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Minha relação está desgastada</h3>
              <p className={styles.cardText}>
                Brigas, cansaço e distância emocional vêm da falta de
                comunicação e não de falta de amor. A terapia de casal restaura
                o diálogo e reconecta.
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Diferencial;