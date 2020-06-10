import React from 'react'
import '../css/masterContainer.css'

const Header = (props) => {
    return (
        <div className= 'header'>
            <span>{props.text}</span>
        </div>
    )
}

export default Header