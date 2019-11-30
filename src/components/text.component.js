
import React, { Component } from 'react';

export default class GetText extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            type: "paragraph",
        };
    }

    componentDidMount() {
        fetch('----')
            .then(results => {
                return results.json();
            }).then(data => {
                let text = data.results((txt) => {
                    return (

                        )
                })
                this.setState({ text: text });
                console.log("state", this, state.text);
            })
    }

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button
                    onClick={this.onIncrement}
                    type="button"
                >
                    Increment
        </button>
                <button
                    onClick={this.onDecrement}
                    type="button"
                >
                    Decrement
        </button>
            </div>
        );
    }

}