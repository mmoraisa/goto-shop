import React, { Component } from 'react'
import './Product.css'

class Product extends Component{
    render () {

        const {
            name,
            category,
            price,
            originalPrice = 0
        } = this.props

        return (
            <div className={ 'product' + (originalPrice > price ? ' sale ' : '') }>
                <div className="name">{ name }</div>
                <div className="category">{ category }</div>
                <div className="price">
                    {
                        originalPrice > price
                        ? (
                            <span>
                                <del>U$${ originalPrice }</del>
                                U$${ price }
                            </span>
                        )
                        : (
                            <span>U$${ price }</span>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Product