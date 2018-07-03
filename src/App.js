import React, { Component } from 'react'
import Button from './components/general/Button'
import ProductsList from './components/products/ProductsList'

const products = [
  {
    id: 1,
    name: 'Calça Jeans',
    category: 'calças',
    originalPrice: 99.90,
    price: 79.90
  },
  {
    id: 2,
    name: 'Camisa xadrez',
    category: 'camisas',
    originalPrice: 149.90,
    price: 149.90
  },
  {
    id: 3,
    name: 'Camisa social bege',
    category: 'camisas',
    originalPrice: 169.90,
    price: 149.90
  },
  {
    id: 4,
    name: 'Camisa social bege',
    category: 'camisas',
    originalPrice: 169.90,
    price: 149.90
  },
  {
    id: 5,
    name: 'Touca cinza',
    category: 'toucas',
    originalPrice: 99.90,
    price: 105.00
  }
]

class App extends Component{
  render () {
    return (
      <div>
        <Button text="Criar produto"/>
        <Button text="Adicionar produto no carrinho"/>
        <Button text="Remover produto no carrinho"/>
        <ProductsList products={products}/>
      </div>
    )
  }
}

export default App