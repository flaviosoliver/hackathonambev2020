import React, { Component, } from 'react';

export default class IngredientCard extends Component {
  state = {  }
  render() {
    return (
      <aside>
        <h2>Lista de Ingredientes</h2>
        <section>
          <p>
            Aqui você monta a sua receita
          </p>
          <p>Escolha uma categoria</p>
          <img
            className="Ingredient List"
            src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fconcerveja.com.br%2Fequipamentos-insumos%2F&psig=AOvVaw0rqb5riFIdvwqqdIa49ETe&ust=1607968624714000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjrlZHEy-0CFQAAAAAdAAAAABAS'
            alt="Lista de Ingredientes"
          />
          <div>
          {[malte, cereais, lúpulo, levedura].map((ingrediente) => <div>{ingrediente}</div>)}
          </div>
        </section>
    </aside>
    );
  }
}