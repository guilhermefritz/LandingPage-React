import React, { useState } from "react";
import styles from "./Faq.module.css";

const faqs = [
  {
    question: "Quanto tempo leva pra ver os resultados da psicoterapia?",
    answer: "Normalmente algumas semanas a alguns meses.",
  },
  {
    question: "A nutrição esportiva é apenas para atletas profissionais?",
    answer: "Não, é para qualquer pessoa com objetivos de saúde ou performance.",
  },
  {
    question: "Como funciona a avaliação para cirurgia bariátrica?",
    answer: "Consulta inicial com equipe multidisciplinar.",
  },
  {
    question: "Terapia de casal funciona se meu parceiro não quiser participar?",
    answer: "Pode ajudar, mas idealmente ambos participam.",
  },
  {
    question: "A constelação familiar é indicada para quais problemas?",
    answer: "Questões familiares, relacionamentos e padrões emocionais.",
  },
  {
    question: "O que é terapia sexual?",
    answer: "Tratamento para dificuldades ou questões relacionadas à vida sexual.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqResponsivo}>
      <div className={styles.container}>
        {/* ===== PRIMEIRO: Accordion com perguntas ===== */}
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
                      openIndex === index ? styles.rotate : styles.caret
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

        {/* ===== DEPOIS: Título, descrição e botão ===== */}
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
