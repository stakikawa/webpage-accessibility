import React from 'react';

const AltPicture = ({ source, newAlt }) => {

    // const classes = useStyles();

    return (
        <div className="altImage">
            <img width="100%" height="auto" src={ source } alt={ newAlt } />
        </div>
    );
};

export default AltPicture;