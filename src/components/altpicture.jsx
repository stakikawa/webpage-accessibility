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
        <div class="altImage">
            <img src={source} alt={newAlt} />
        </div>
    );
};

export default AltPicture;