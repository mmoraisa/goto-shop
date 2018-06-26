import React, { Component } from 'react'
import Button from './components/general/Button'
import Product from './components/products/Product'

class App extends Component{
  render () {
    return (
      <div>
        <Button text="Criar produto"/>
        <Button text="Adicionar produto no carrinho"/>
        <Button text="Remover produto no carrinho"/>
        <Product name="Dark Robe" category="robes" originalPrice={ 99.99 } price={ 99.90 } />
        <Product name="Jeans Pants" category="panties" price={ 129.90 } />
        <Product name="Black Hoodie" category="hoodies" originalPrice={ 110.00 } price={ 105.00 } />
      </div>
    )
  }
}

export default App