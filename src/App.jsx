import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';

import Sobre from './components/Sobre/Sobre';
import Estrategias from './components/Estrategias/Estrategias';
import Diferencial from './components/Diferencial/Diferencial';
import Equipe from './components/Equipe/Equipe';
import Footer from './components/Footer/Footer';
import Faq from './components/Faq/Faq';
import Espaco from './components/Espaco/Espaco';
import Passos from './components/Passos/Passos';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Intro />
        <Sobre />
        <Estrategias />
        <Diferencial />
        <Equipe />
        <Passos />
        <Espaco />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}

export default App;