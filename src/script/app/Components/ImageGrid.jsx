import './grid.scss';
import { ImageItem } from "./ImageItem.jsx";
import React, { Fragment } from 'react';

export const ImageGrid = (props) => {
    const responseList = props.images.slice(0, 10).map(image =>
        <li key={image.id.toString()}>{image.url}</li>
    );

    const listItems = props.images.slice(0, 1).map(image =>
        <ImageItem key={image.id.toString()} url={image.url} />
    );

    return (
        <div className='grid'>
            <h2 className='grid__title'>{props.title}</h2>
            <ul className='grid grid-list'>
                {responseList}
            </ul>
            <ul className='grid grid-images'>
                {listItems}
            </ul>
        </div>
    )
}