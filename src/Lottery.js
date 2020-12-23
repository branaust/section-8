import React, { Component } from "react";
import Ball from './Ball'
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
    }
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Lotto</h1>
                <Ball />
                <button className="Lotto-Btn">GENERATE</button>
            </div>

        )
    }
};

export default Lottery



