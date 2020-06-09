import React from 'react'
import '../css/styles.css'
import Header from './Header'
import SideBarAddition from './SideBarAddition'
import MainContent from './MainContent'

class Container extends React.Component {

    constructor() {
        super()
        this.state = {
            range: ""
        }
    }

    getRange = (range) => {
        this.setState({
            range: range
        })
        console.log(range)
    }

    render() {
        return (
            <div className= 'container'>
                <Header />
                <SideBarAddition chooseRange={this.getRange.bind(this)}/>
                <MainContent range={this.state.range}/>
            </div>
        )
    }
}

export default Container