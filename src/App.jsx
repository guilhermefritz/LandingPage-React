import React from 'react';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';

import Sobre from './components/Sobre/Sobre';
import Servicos from './components/Servicos/Servicos';
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
      <div className="headerBackground">
      <Header />
      </div>
      <main>
        <Intro />
        <Sobre />
        <Servicos />
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