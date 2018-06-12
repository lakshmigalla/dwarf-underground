import React, { Component } from 'react'

class Textbox extends Component {
    // constructor () {
    //     super();
    //     this.state = {
    //         inputVal: ''
    //     }
    // }
    // handleChange (e) {
    //     this.setState({inputVal: e.target.value})
    // }
    // handleClick (e) {
    //     alert({input: e.target.value})
    // }
    render() {
        return (
            <form>
                <input type="text" id="commentInput" placeholder="Type a comment"></input>
                <button style={{ color: 'green' }} id="submitButton"> Submit Comment </button>
        
            </form>
        )
    }
}

export default Textbox