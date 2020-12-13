import React, { Component } from 'react';
import '../css/Header.css';

export default class Header extends Component {
  state = {  }
  render() {
    return (
      <head className='head-container'>
        <h1>
          Minha Cerva
        </h1>
        <h3>
          Seja seu próprio mestre cervejeiro com selo de qualidade única Ambev.
        </h3>
      </head>
    );
  }
}