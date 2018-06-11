import './grid.scss';
import {ImageItem} from "./ImageItem.jsx";
import React from 'react';

export const ImageGrid = (props) => {
    const listItems = props.images.map(image =>
        <ImageItem key={image.id.toString()} url={image.url} />
    );

    return(
        <ul className='grid'>
            {listItems}
        </ul>
    )
}