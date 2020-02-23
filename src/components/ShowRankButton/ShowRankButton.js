import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const rawDamen = require('../../assets/data/dumbasData.json')

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function ShowRankButton(props) {
    const classes = useStyles();

    return (
        <div >
            <div
            className="notPlayable"
            style={{ paddingTop: '30vh' }}
        >
            It's enough to play this category for today. Please, come next week! <br/><br/>
            Or Play Most beatiful category as much as you want.

             </div>
             <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    style={{ margin: '10px', padding: '10px 40px', cursor: 'pointer' }}
                    onClick={() => { console.log('object'); }}
                >
                    Show Ranking
                </Button>
        </div>
    );
}

 