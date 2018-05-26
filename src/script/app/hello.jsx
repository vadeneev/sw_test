import React from 'react';

export class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://thecatapi.com/api/images/get?format=xml&results_per_page=20')
            .then(data => {

            })
            .catch(error => {
                console.log('error with fetch');
            })
        //this.setState()
    }


    render() {
        return <div>Hello</div>;
    }
}