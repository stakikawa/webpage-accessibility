
import React, { Component } from 'react';

export default class GetPicture extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        };
    }

    componentDidMount() {
        fetch('----')
            .then(results => {
                return results.json();
            }).then(data => {
                let pictures = data.results();
            })
    }

}