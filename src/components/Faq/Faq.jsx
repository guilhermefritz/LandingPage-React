import React, { useState } from 'react';
{/* importando o modulo correto*/}
import styles from './Faq.module.css';

const faqs = [
  {
    question: "Quanto tempo leva pra ver os resultados da psicoterapia?",
    answer: "Normalmente algumas semanas a alguns meses."
  },
  {
    question: "A nutrição esportiva é apenas para atletas profissonais??",
    answer: "Não, é para qualquer pessoa com objetivos de saúde ou performance."
  },
  {
    question: "Como funciona a avaliação para cirurgia bariatrica?",
    answer: "Consulta inicial com equipe multidisciplinar."
  },
  
  {
     question: "Terapia de casal funciona se meu parceiro não quiser participar?",
    answer: "Pode ajudar, mas idealmente ambos participam."
  },
  {
     question: "A constelação familiar é indicada para quais problemas?",
    answer: "Questões familiares, relacionamentos e padrões emocionais."
  },
  {
     question: "O que é terapia sexual?",
    answer: "Tratamento para dificuldades ou questões relacionadas à vida sexual."
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  // Lógica do accordion
{/* Alterna entre abrir/fechar - apenas um item aberto por vez */}

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  

 return (
    <div className={styles.faqResponsivo}>
      <div id="faq" className={styles.container}>

        {/* lado esquerdo faq accordion */}
        <div className={styles.left}>
          <div className={styles.accordion}>
            {faqs.map((item, index) => (
              <div key={index} className={styles.accordionItem}>
                
                <button
                  className={styles.accordionButton}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>
                  <span
                    className={
                      openIndex === index
                        ? styles.caretOpen
                        : styles.caret
                    }
                  />
                </button>

                <div
                  className={
                    openIndex === index
                      ? styles.accordionContentOpen
                      : styles.accordionContent
                  }
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* lado direito mensagem e button */}
        <div className={styles.right}>
          <span className={styles.sectionMarker}>▆FAQ</span>
         
          <h2 className={styles.titleRight}>
            Perguntas frequentes sobre o serviço da Attuare
          </h2>

          <p className={styles.p}>
            Esclareça dúvidas comuns sobre psicoterapia, nutrição esportiva,
            cirurgia bariátrica, terapia de casal e constelação familiar.
          </p>

          <button className={styles.whatsappButton}>
            <i className="fa-brands fa-whatsapp"></i> ENTRE EM CONTATO
          </button>
        </div>

      </div>
    </div>
  );
};

export default Faq;