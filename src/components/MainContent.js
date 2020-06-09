import React from 'react'
import "../css/main_content.css"

class MainContent extends React.Component {

    render() {
        console.log("rendering")
        return (
            <div className="main-content">
                {this.props.range === ""? "Welcome" : this.props.range}
            </div>
        )
    }
}

export default MainContent