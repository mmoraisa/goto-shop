import React, { Component } from 'react'
import Button from '../general/Button'

class CategoriesList extends Component {
    render () {
        const { activeCategory, categories, onCategoryChange = () => {} } = this.props
        return (
            <div className="categories-list">
                {
                    categories.map((category,i) =>
                        <Button
                            key={i}
                            text={category}
                            isActive={category === activeCategory}
                            onClick={onCategoryChange} />
                    )
                }
                <Button
                    text="todas as categorias"
                    isActive={activeCategory.length === 0}
                    onClick={() => { onCategoryChange('') }}/>
            </div>
        )
    }
}

export default CategoriesList