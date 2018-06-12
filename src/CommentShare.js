import React, { Component } from 'react'

class CommentShare extends Component {
    // constructor () {
    //     super();
    //     this.state = {
    //         commentClicked: false
    //     }
    // }
    // onClick() {
    //     if (this.state.commentClicked == true) {
    //         this.setState({commentClicked: false})
    //     }
    //     else {
    //         this.setState({commentClicked: true})
    //     }
    // }
    render() {
        return (
            <div className="article-links">
                <h6>
                    <a className="article-link" href="#">
                        <i className="fa fa-comments-o"></i>
                        <span className="article-link-text">Comments</span>
                    </a>
                    <a className="article-link" href="#">
                        <i className="fa fa-share"></i>
                        <span className="article-link-text">Share Post</span>
                    </a>
                </h6>
            </div>
        )
    }
}

export default CommentShare