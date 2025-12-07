import React from "react";
{/* importando modulo */}
import styles from "./Sobre.module.css"



const Sobre = () => {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.container}>

        {/*  coluna da esquerda */}
        <div className={styles.leftWrapper}>
          
          {/* forma azul de fundo*/}
          <div className={styles.blueShape}>
            <img
              src="/img-sobre/icone-estatua.png"
              alt="Mandala Instituto"
              className={styles.mandala}
            />
          </div>

          {/*  imagem na forma do  circulo*/}
          <div className={styles.imageWrapper}>
            <img
              src="/img-sobre/espaco.png"
              alt="Instituto Attuare"
              className={styles.profileImage}
            />
          </div>
        </div>

        {/* coluna da direita */}
        <div className={styles.right}>

          
          <div className={styles.descriptionWrapper}>
            <span className={styles.label}>
              Uma história escrita com empatia e cuidado.
            </span>

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

            <div className={styles.person}>
              <img src="/img-sobre/alana.png" alt="Allana Araújo" className={styles.personImg} />
              <div>
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

            <div className={styles.person}>
              <img src="/img-sobre/alice.png" alt="Alice Araújo" className={styles.personImg} />
              <div>
                <h3 className={styles.personName}>Alice Araújo</h3>
                <p className={styles.personBio}>
                  Psicóloga especializada em Terapia Cognitivo Comportamental
                  e Sexologia. Alice ajuda casais e indivíduos a superarem
                  desafios emocionais e sexuais, promovendo uma vida íntima
                  e pessoal mais satisfatória com estratégias personalizadas.
                </p>
              </div>
            </div>

            {/* classe button*/}

            <button className={styles.button}>ENTRE EM CONTATO</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
