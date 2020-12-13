import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

export default class Nav extends Component {
  state = {  }
  render() {
    return (
      <nav className="nav-container">
        <Link classeName="nav-items" to="">Minha Seção</Link>
        <Link classeName="nav-items" to="">Ranking de Receitas</Link>
        <Link classeName="nav-items" to="">Localização de Cervejarias</Link>
        <Link classeName="nav-items" to="">Dicas do Mestre</Link>
        <Link classeName="nav-items" to=""></Link>
      </nav>
    );
  }
}