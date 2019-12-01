import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        fontSize: '36px',
    },
});

const AltPicture = ({ source, newAlt }) => {

    // const classes = useStyles();

    return (
        <div className="altImage">
            <img width="100%" height="auto" src={ source } alt={ newAlt } />
        </div>
    );
};

export default AltPicture;