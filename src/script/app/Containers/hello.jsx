import React, { Fragment } from 'react';
import { ImageGrid } from "../Components/ImageGrid.jsx";
import { registerWorker } from '../../register-worker.js';
import { CatsApi } from '../Services/catsApi.js';
import { withRouter } from 'react-router-dom';
import * as constants from '../Constants/constants.js';

class _Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesArr: [],
            imagesArrCache: [],
            workers: [],
            isServerOn: true
        };
        this.fetchData = this.fetchData.bind(this);
        this.toggleServer = this.toggleServer.bind(this);
        this.checkServer = this.checkServer.bind(this);
    }

    componentDidMount() {
        this.fetchData();
        this.checkServer();
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

    checkServer() {
        CatsApi.checkServer()
        .then(response => {
                this.setState({isServerOn: response.ok})
            }
        );
    }

    toggleServer() {
        CatsApi.toggleServer();
        this.setState({isServerOn: !this.state.isServerOn});
    }

    fetchData() {
        this.setState({ imagesArr: [], imagesArrCache:[] });
        CatsApi.fetchData()
            .then(imagesArr => {                
                this.setState({ imagesArr }
            )});

        CatsApi.fetchData('cache')
            .then(imagesArrCache => {                
                this.setState({ imagesArrCache }
            )});
    }

    render() {        
        const {first, second} = constants.TITLES[this.props.worker];
        const serverClass = this.state.isServerOn? 'on' : 'off';

        return (
            <Fragment>                
                <button className={`btn-more ${serverClass}`} onClick={this.toggleServer}>server is {serverClass.toUpperCase()}</button>
                <button className="btn-more" onClick={this.fetchData}>Show more</button>
                <div className="container">
                    <ImageGrid images={this.state.imagesArr} title={first}/>
                    <ImageGrid images={this.state.imagesArrCache} title={second}/>                    
                </div>
            </Fragment>
        );
    }
}

export default withRouter(_Hello);
