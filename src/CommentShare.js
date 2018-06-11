import React, { Component } from 'react'

class CommentShare extends Component {
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