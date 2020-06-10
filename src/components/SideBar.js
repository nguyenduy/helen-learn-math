import React from 'react'
import '../css/sidebar.css'
import { Button } from 'reactstrap';

class SideBar extends React.Component {
    
    clickHandler =(e) => {
        this.props.chooseRange(e.target.value)
    }
    render() {
        return (
            <div className="side-bar">
                <div className="sidebar-header">{this.props.header}</div>
                <hr/>
                {this.props.items.map(({text,color}) => 
                    (<Button key={text} value={text} block color={color} size="lg" onClick={this.clickHandler.bind(this)}>{text}</Button>))}
            </div>
        )
    }
}

export default SideBar