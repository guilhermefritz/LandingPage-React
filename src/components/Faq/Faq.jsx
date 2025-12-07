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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='faq' className={styles.container}>
      
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
                <span className={styles.icon}>
                  {openIndex === index ? "−" : "↴"}
                </span>
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

      {/* lado direito mensagem e button  */}
      <div className={styles.right}>
         
         <h2 className={styles.titleRight}>
         Perguntas frequentes sobre o serviço da Atture
  </h2>
        <p className={styles.p}>
        Esclareça dúvidas comuns sobre psicoterapia,nutrição esportiva,cirurgia bariátrica,terapia de casal e constelação familiar.
        </p>

        <button className={styles.button}>ENTRE EM CONTATO</button>


      
        

       
      </div>
    </div>
  );
};

export default Faq;
