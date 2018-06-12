import React, { Component } from 'react'

class Textbox extends Component {
    handleClick (e) {
        e.preventDefault()
        if (document.querySelector('input').value != null) {
            const inputTxt = document.querySelector('input').value
            const listOfComments = document.getElementById('comm')
            listOfComments.innerHTML += '<p>' + inputTxt + '<p>'

            document.querySelector('input').value = ''
        }
    }
    render() {
        return (
            <form>
                <input type="text" id="commentInput" placeholder="Type a comment"></input>
                <button style={{ color: 'green' }} id="submitButton" onClick = {this.handleClick} > Submit Comment </button>
        
            </form>
        )
    }
}

export default Textbox