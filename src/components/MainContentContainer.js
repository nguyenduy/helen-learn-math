import React from 'react'
import "../css/mainContentContainer.css"
import { Button } from 'reactstrap'

class MainContentContainer extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            num1:"",
            num2:"",
            totalCounter: 1,
            correctCounter: 0,
            userInput: "",
        }
    }

    inputOnChangeHandler(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    getNewNumbers(props) {
        const range = parseInt(props.range.slice(-2))
        const num1 = Math.floor(Math.random() * range)
        const num2 = Math.floor(Math.random() * (range-num1))
        const newState = {
            num1: num1,
            num2: num2,
        }
        return newState
    }   

    getNewState(props) {
        const range = parseInt(props.range.slice(-3).trim())
        const num1 = Math.floor(Math.random() * range)
        const num2 = Math.floor(Math.random() * (range-num1))
        const newState = {
            num1: num1,
            num2: num2,
            totalCounter: 1,
            correctCounter: 0,
            userInput: "",
        }
        return newState
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (this.props.range !== prevProps.range) {
            const newState = this.getNewState(this.props)
            return newState
        }
        return null
    }

    componentDidUpdate(prevProps, prevState, newState) {
        const inputText = document.getElementById("userInput")
        inputText.focus()
        this.setState(newState)
    }

    enterPressed(e) {
        let code = e.keyCode || e.which;
        if(code === 13) { //13 is the enter keycode
            this.checkBtnOnClickHandler()
        } 
    }
    
    checkBtnOnClickHandler() {
        const userInput = parseInt(this.state.userInput)
        const result = this.state.num1 + this.state.num2
        const inputText = document.getElementById("userInput")
        if (userInput === result) {
            alert("correct")
            this.setState((preState) => this.getNewNumbers(this.props))
            this.setState((prevState) => {return {
                correctCounter: prevState.correctCounter + 1 ,
                totalCounter: prevState.totalCounter + 1,
                userInput: ""
            }})
            
        } else {
            alert("Sorry, it's not correct! Please try again!")
            inputText.select()        

        }
        inputText.focus() 
    }

    render() {
        return (
            <div className="main-content-container">
                <div className="main-content-header">{this.props.range === ""
                        ? 
                        <div>
                            <div>Hello Helen, are you ready to learn math?</div>
                            <div>Click a category on the left to start! </div>
                        </div>
                        : 
                        this.props.range}</div>
                <div>
                    {this.props.range === "" ? "" : 
                        <div className="main-content-content">
                            <div className="question">
                                <div>Question {this.state.totalCounter}:</div>
                                <span>{this.state.num1} + {this.state.num2} = </span>
                                <input id="userInput" onKeyPress={this.enterPressed.bind(this)} border="0" autoFocus type="number" value={this.state.userInput} onChange={this.inputOnChangeHandler.bind(this)}/>
                                <Button id="checkBtn" color="primary" size="lg" onClick={this.checkBtnOnClickHandler.bind(this)} >Check</Button>
                            </div>
                            <div className="correct-answer-counter">
                                Correct answers: {this.state.correctCounter}
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default MainContentContainer