import React from "react";
import styles from "./Sobre.module.css";

const Sobre = () => {
  return (
    <section id="sobre" className={styles.section}>
      {/* Forma azul no lado esquerdo  */}
      <div className={styles.blueBackground}></div>
      
     
      <div className={styles.emblema1}>
        <img src="/img-sobre/icone-estatua.png" alt="Emblema do Instituto Attuare" />
      </div>
      
      <div className={styles.emblema2}>
        <img src="/img-sobre/forma.png" alt="Emblema decorativo" />
      </div>

      <div className={styles.container}>
        {/* Coluna da esquerda - Imagem */}
        <div className={styles.leftColumn}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img
                src="/img-sobre/espaco.png"
                alt="Consultório do Instituto Attuare"
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>

        {/* Coluna da direita - Conteúdo */}
        <div className={styles.rightColumn}>
          <div className={styles.contentWrapper}>
            <p className={styles.sectionMarker}>
              Uma história escrita com empatia e cuidado.
            </p>

            <h2 className={styles.title}>
              Sobre o Instituto Attuare
            </h2>

            <p className={styles.description}>
              O Instituto Attuare foi fundado pelas psicólogas Alice Araújo e
              Allana Araújo com o propósito de cuidar da saúde emocional
              das pessoas. Oferecemos serviços integrados de Psicologia
              e Nutrição, sempre com foco no bem-estar completo de
              nossos pacientes.
            </p>

            {/* Fundadoras */}
            <div className={styles.foundersSection}>
              {/* Allana Araújo */}
              <div className={styles.person}>
                <div className={styles.personImageContainer}>
                  <div className={styles.personFrame}>
                    <img
                      src="/img-sobre/alana.png"
                      alt="Allana Araújo"
                      className={styles.personImage}
                    />
                  </div>
                </div>
                <div className={styles.personInfo}>
                  <h3 className={styles.personName}>Allana Araújo</h3>
                  <p className={styles.personBio}>
                    Psicóloga especialista em Terapia Cognitivo Comportamental
                    e Constelação Sistêmica. Especialista em identificar
                    dinâmicas familiares e relacionais. Allana oferece
                    atendimentos individuais e de casal para promover
                    equilíbrio emocional e bem-estar.
                  </p>
                </div>
              </div>

              {/* Alice Araújo */}
              <div className={styles.person}>
                <div className={styles.personImageContainer}>
                  <div className={styles.personFrame}>
                    <img
                      src="/img-sobre/alice.png"
                      alt="Alice Araújo"
                      className={styles.personImage}
                    />
                  </div>
                </div>
                <div className={styles.personInfo}>
                  <h3 className={styles.personName}>Alice Araújo</h3>
                  <p className={styles.personBio}>
                    Psicóloga especializada em Terapia Cognitivo Comportamental
                    e Sexologia. Alice ajuda casais e indivíduos a superarem
                    desafios emocionais e sexuais, promovendo uma vida íntima
                    e pessoal mais satisfatória com estratégias personalizadas.
                  </p>
                </div>
              </div>
            </div>

            <button className={styles.whatsappButton}>
                                            <i className="fa-brands fa-whatsapp"></i> ENTRE EM CONTATO
                                          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;