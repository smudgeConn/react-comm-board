import React from 'react';

const Tile = ({ imageURL, tileDescription }) => {
    return (
        <div className="tile" style={{ border: '5px solid red'}}>
            <img className="image"  src={imageURL} alt="Tile Description" />
            <div className='tileDescription'> { tileDescription }</div>
        </div>
    );
};

export default Tile;
