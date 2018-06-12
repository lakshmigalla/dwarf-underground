import React, { Component } from 'react'
import Textbox from './Textbox';

class CommentShare extends Component {
    constructor () {
        super();
        this.state = {
            commentClicked: false
        }
    }
    onClick() {
        this.setState({commentClicked: !this.state.commentClicked})
    }
    render() {
        return (
            <div className="article-links">
                <h6>
                    <a className="article-link" href="#" onClick = {this.onClick.bind(this)} id = "com">
                        <i className="fa fa-comments-o"></i>
                        <span className="article-link-text">Comments</span>
                    </a>
                    <a className="article-link" href="#">
                        <i className="fa fa-share"></i>
                        <span className="article-link-text">Share Post</span>
                    </a>
                    {this.state.commentClicked && <Textbox />}
                </h6>
            </div>
        )
    }
}

export default CommentShare