import React, { Component } from 'react'
import Product from './Product'
import CategoriesList from './CategoriesList'

class ProductsList extends Component {

    state = {
        category: ''
    }

    handleOnCategoryChange = category => this.setState({ category })

    render () {
        const { category } = this.state
        const { products } = this.props
        const categories = []

        products.forEach(product => {
          if(categories.indexOf(product.category) === -1)
            categories.push(product.category)
        });

        const showingProducts = category.length === 0
                                    ? products
                                    : products
                                        .filter(product => product.category === category)

        return (
            <div>
                <h1>Listagem de produtos</h1>
                <CategoriesList
                    activeCategory={category}
                    categories={categories}
                    onCategoryChange={this.handleOnCategoryChange} />
                <div className="products-list">
                    {
                        showingProducts.map(product =>
                        <Product
                            key={product.id}
                            name={product.name}
                            category={product.category}
                            originalPrice={product.originalPrice}
                            price={product.price} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ProductsList