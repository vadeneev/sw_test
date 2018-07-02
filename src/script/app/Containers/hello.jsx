import React, {Fragment} from 'react';
import {ImageGrid} from "../Components/ImageGrid.jsx";
import {registerWorker} from '../../register-worker.js';
import {CatsApi} from '../Services/catsApi.js';

export class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            imagesArr: [],
            workers: []
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {        
        if ('match' in this.props) {                        
            this.fetchData();            
        }          
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if ('match' in nextProps) {                        
            return null;
        }
        if ('worker' in nextProps && !prevState.workers.includes(nextProps.worker)) {
            prevState.workers.push(nextProps.worker);
            registerWorker(nextProps.worker);
            return prevState;
        }
        return null;
    }

    fetchData() {
        CatsApi.fetchData()
            .then(imagesArr => this.setState({imagesArr}));
    }


    render() {
        return (
            <Fragment>
                <button className="btn-more" onClick={this.fetchData}>Show more</button>
                <ImageGrid images={this.state.imagesArr}/>
            </Fragment>
        );
    }
}