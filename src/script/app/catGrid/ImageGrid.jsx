import './grid.scss';
import {ImageItem} from "./ImageItem.jsx";
import React, {Fragment} from 'react';

export const ImageGrid = (props) => {
    const responseList = props.images.map(image =>
        <li key={image.id.toString()}>{image.url}</li>
    );

    const listItems = props.images.slice(0, 3).map(image =>
        <ImageItem key={image.id.toString()} url={image.url} />
    );

    return(
        <Fragment>
            <ul className='grid grid-list'>
                {responseList}
            </ul>
            <ul className='grid grid-images'>
                {listItems}
            </ul>
        </Fragment>
    )
}