import React, { Component } from 'react'
import Button from './components/general/Button'

class App extends Component{
  render () {
    return (
      <div>
        <Button text="Criar produto"/>
        <Button text="Adicionar produto no carrinho"/>
        <Button text="Remover produto no carrinho"/>
      </div>
    )
  }
}

export default App