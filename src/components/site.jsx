import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from './header.jsx';
import AltPicture from './altpicture.jsx';
import Text from './text.jsx';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: "0 auto",
        padding: 10,
    },
});

/*

TYPE CONSTRAINT: inputData is a list of objects such that each one if either a (1) header (2) paragraph (3) image

*/

const Site = ({ inputData }) => {

    const classes = useStyles();

    return (
        <div className="newWebpage">
            { inputData.map(comp =>
                { switch(comp.type) {
                    case "h1":
                        return <div className={classes.root}><Header text={ comp.text } /><br></br></div>
                    case "para":
                        return <div className={classes.root}><Text text={ comp.text } /><br></br></div>
                    case "img":
                        return <div className={classes.root}><AltPicture source={ comp.source } newAlt={ comp.alt } /><br></br></div>
                    default:
                        return ""
                  } 
                })
            }
        </div>
    )
};

export default Site;