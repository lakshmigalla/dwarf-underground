import React, { Component } from 'react'

class FirstImage extends Component {
    render () {
        return (
            <div className="small-6 medium-3 columns other-article">
              {/* <a href="http://lotr.wikia.com/wiki/Orcs"> */}
                <img src="https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif" alt="orc" />
                <p><h4><strong>Single Orcs in Indianapolis</strong></h4></p>
              {/* </a> */}
            </div>
        )
    }
}

export default FirstImage