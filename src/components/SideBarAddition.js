import React from 'react'
import '../css/sidebar_addition.css'
import { Button } from 'reactstrap';

class SideBarAddition extends React.Component {

    clickHandler =(e) => {
        this.props.chooseRange(e.target.value)
        // switch (e.target.value) {
        //     case "10" :
        //         break;
        //     case "20" :
        //         break;
        //     case "30" :
        //         break;
        //     case "40" :
        //         break;
        //     case "50" :
        //         break;
        //     case "60" :
        //         break;
        //     case "70" :
        //         break;
        //     case "80" :
        //         break;
        //     case "90" :
        //         break;
        //     case "100" :
        //         break;
        //     default:
        //         break;
        // }
    }
    render() {

    
        return (
            <div className = 'sidebar'>
                <div className="sidebar-header">Addition</div>
                <hr/>
                <Button value="10" block color="success" size="lg" onClick={this.clickHandler.bind(this)}>Less Than 10</Button>
                <Button value="20" block color="info" size="lg" onClick={this.clickHandler.bind(this)}>Less Than 20</Button>
                <Button value="30" block color="warning" size="lg" onClick={this.clickHandler.bind(this)}>Less Than 30</Button>
                <Button value="40" block color="primary"  size="lg" onClick={this.clickHandler.bind(this)}>Less Than 40</Button>
                <Button value="50" block color="success"  size="lg" onClick={this.clickHandler.bind(this)}>Less Than 50</Button>
                <Button value="60" block color="secondary"  size="lg" onClick={this.clickHandler.bind(this)}>Less Than 60</Button>
                <Button value="70" block color="danger"  size="lg" onClick={this.clickHandler.bind(this)}>Less Than 70</Button>
                <Button value="80" block color="success"  size="lg" onClick={this.clickHandler.bind(this)}>Less Than 80</Button>
                <Button value="90" block color="info"  size="lg" onClick={this.clickHandler.bind(this)}>Less Than 90</Button>
                <Button value="100" block color="warning"  size="lg" onClick={this.clickHandler.bind(this)}>Less Than 100</Button>
            </div>
        )
    }
}

export default SideBarAddition