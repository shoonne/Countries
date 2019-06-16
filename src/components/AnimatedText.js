import React from 'react';

import './../css/AnimatedText.css';

export default class AnimatedText extends React.Component {
    render(){
        return(
            <div>
                <h1 className="home-title">
                <span>Simple text reveal with css</span>
                <span>using pseudo elements</span>
                </h1>
            </div>
        )
    }
}