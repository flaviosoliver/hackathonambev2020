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
        <form>
          <label><input type="text"/></label>
          <label>
            <input type="radio" name="pilsen" value="pilsen" id=""/>pilsen
            <input type="radio" name="ipa" value="IPA" id=""/>IPA
          </label>
          <label>
            <select name="origem" id="">
              <option value="origem">origem</option>
              <option value="tipo">tipo</option>
            </select>
          </label>
          <label>
            <select name="origem" id="">
              <option value="familia">familia</option>
              <option value="tipo">tipo</option>
            </select>
          </label>
          <label>
            <input type="radio" name="high-brew" value="Alta fermentação" id=""/>Alta fermentação
            <input type="radio" name="low-brew" value="Baixa fermentação" id=""/>Baixa fermentação
          </label>
        </form>
      </div>
    );
  }
}