import React from 'react';
<<<<<<< HEAD
import { Typography } from '@material-ui/core';
=======
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        fontSize: '18px',
    },
});
>>>>>>> parent of 8a26194... Merge pull request #6 from stakikawa/wpa-5-better-site

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