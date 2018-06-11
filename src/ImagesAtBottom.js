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

            <FirstImage />

            <SecondImage />

            <ThirdImage />

            <FourthImage />
            
          </div>
        )
    }
}

export default ImagesAtBottom