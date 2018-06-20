import React from 'react';
import {ImageGrid} from "./catGrid/ImageGrid.jsx";

export class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            imagesArr: [],
        };

        this.handleXML = this.handleXMLresponse.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://thecatapi.com/api/images/get?format=xml&results_per_page=20')
            .then(data => {
                return data.text();
            })
            .then(this.handleXML)
            .catch(error => {
                console.log('error with fetch');
            })
    }

    handleXMLresponse(data) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data,"text/xml");
        const collection = xmlDoc.getElementsByTagName('image');
        let imagesArr = [];

        for (const item of collection ) {
            imagesArr.push({
                id: item.children[1].innerHTML,
                url: item.children[0].innerHTML,
            });
        }

        this.setState({imagesArr});
    }


    render() {
        return <ImageGrid images={this.state.imagesArr}/>
    }
}