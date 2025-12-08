import React from "react";
import styles from "./Equipe.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Equipe = () => {
  const membros = [
    {
      nome: "Allana Araújo",
      registro: "CRP-DF 17770",
      titulo: "Psicóloga E Consteladora",
      desc: "Especializada em harmonizar relações familiares e individuais, promovendo equilíbrio emocional.",
      foto: "/img-equipe/alana.png",
    },
    {
      nome: "Alice Araújo",
      registro: "CRP 01/18844",
      titulo: "Psicóloga",
      desc: "Foco em Terapia Cognitiva Comportamental e Sexologia, ajuda casais e indivíduos a superarem desafios emocionais e sexuais.",
      foto: "img-equipe/alice.png",
    },
    {
      nome: "Rafael Nobre",
      
      titulo: "Nutricionista",
      desc: "Dedicado a planos personalizados, combina nutrição clínica e esportiva para maximizar saúde e desempenho.",
      foto: "img-equipe/rafael.png",
    },
  ];

  return (
    <div id="equipe" className={styles.container}>
       <span className={styles.sectionMarker}> Nossa Equipe</span>
       <h1 className={styles.sectionTitle}>Equipe Multidisciplinar de Psicologia e nutrição</h1>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={3}
        spaceBetween={40}
        breakpoints={{
          0: { slidesPerView: 1 },
          800: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        {membros.map((m, i) => (
          <SwiperSlide key={i}>
            <div className={styles.card}>
              <div className={styles.topShape}></div>

              <div className={styles.fotoWrapper}>
                <img src={m.foto} alt={m.nome} />
              </div>

              <div className={styles.info}>
                <h3>{m.nome}</h3>
                <p className={styles.registro}>{m.registro}</p>
                <p className={styles.titulo}>{m.titulo}</p>
                <p className={styles.desc}>{m.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
       <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className={styles.whatsappButton}>
                      <i className="fa-brands fa-whatsapp"></i> ENTRE EM CONTATO
                    </button>
</div>


    </div>
  );
};

export default Equipe;
