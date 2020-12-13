import React, { Component } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

export default class Home extends Component {
  state = {  }
  render() {
    return (
      <div>
        <section>
          <Header />
          <Nav />
        </section>
        <article>
          Aqui você poderá customizar sua cerveja ao seu jeito, utilizando os melhores insumos, com o padrão de qualidade e segurança profissionais da maior cervejaria do país. <br />
          Escolha os ingredientes, personalize o seu rótulo que resto a gente se encarrega.
        </article>
      </div>
    );
  }
}