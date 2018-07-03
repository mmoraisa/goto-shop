import React, { Component } from 'react'
import './Button.css'

class Button extends Component {

    handleClick = () => {
        const {
            text,
            onClick = () => {}
        } = this.props
        onClick(text)
    }

    render () {
        const { isActive, text } = this.props
        return (
            <button
                className={ isActive ? 'active' : '' }
                onClick={ this.handleClick }>
                { text }
            </button>
        )
    }
}

export default Button