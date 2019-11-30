import React, { Component } from 'react';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
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
}
