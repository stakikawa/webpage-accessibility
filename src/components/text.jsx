import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        fontSize: '18px',
    },
});

const Text = ({ text }) => {

    const classes = useStyles();

    return (
        <div className="paraText">
            <Typography className={classes.root} variant="p">
                {text}
            </Typography>
        </div>
    );
};

export default Text;