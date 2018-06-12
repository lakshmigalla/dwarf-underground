import React, { Component } from 'react'
import FirstImage from './FirstImage';
import SecondImage from './SecondImage';
import ThirdImage from './ThirdImage';
import FourthImage from './FourthImage';

class ImagesAtBottom extends Component {
    render () {
        return (
            <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>

            {/* <FirstImage />

            <SecondImage />

            <ThirdImage />

            <FourthImage /> */}
           
            {/* this.props.imageLinks.map(function(imageLinks) {
                <div> */}
                <a href="http://lotr.wikia.com/wiki/Orcs"><FirstImage /></a>
                <a href="http://lotr.wikia.com/wiki/Dwarves"><SecondImage /></a>
                <a href="http://artemisfowl.wikia.com/wiki/Mulch_Diggums"><ThirdImage /></a>
                <a href="http://lotr.wikia.com/wiki/Hobbits"><FourthImage /></a>
                {/* </div>
            }) */}
          </div>
        )
    }
}

export default ImagesAtBottom