import React, { Component } from 'react'
import './estilo.css'

class Button extends Component {
    render() {
        const { classe, nome } = this.props;
        return <button class={classe ? nome : 'padrao'}>
            {nome ? nome : 'default'}
        </button>
    }
}

export default Button;