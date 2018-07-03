import React, { Fragment } from 'react';
import { ImageGrid } from "../Components/ImageGrid.jsx";
import { registerWorker } from '../../register-worker.js';
import { CatsApi } from '../Services/catsApi.js';
import { withRouter } from 'react-router-dom';

class _Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesArr: [],
            workers: []
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const workerName = nextProps.location.pathname.replace(/^\//i, '');

        if (workerName && !prevState.workers.includes(workerName)) {
            prevState.workers.push(workerName);
            registerWorker(workerName);
            return prevState;
        }
        return null;
    }

    fetchData() {
        CatsApi.fetchData()
            .then(imagesArr => {                
                this.setState({ imagesArr }
            )})
            .catch(()=>{});
    }


    render() {
        return (
            <Fragment>
                <button className="btn-more" onClick={this.fetchData}>Show more</button>
                <ImageGrid images={this.state.imagesArr} />
            </Fragment>
        );
    }
}

export default withRouter(_Hello);