import React, { Component } from "react";
import './Ball.css'

class Ball extends Component {
    render() {
        return (
            <div className='Ball-Container'>
                <div className='Ball'>
                    <h2 className='Ball-Number'>{this.props.number}</h2>
                </div>
            </div>

        )
    }
}

export default Ball