import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import Rank from '../Rank/Rank'

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



const Crush = (props) => {
    const classes = useStyles();

    const { rawDamen } = props.payload

    const [showRank, setShowRank] = React.useState(false)
    const [stepsCount, setStepsCount] = React.useState(0)
    const [dame, setDame] = React.useState(getRandomGirl(rawDamen))

    const [gameData, setGameData] = React.useState([])

    
    React.useEffect(() => {
        if (stepsCount > 3) {
            //calculate the new rank
            //wait until the data is sent
            setShowRank(true)
        }
    }, [stepsCount]);

    const _klicken = (isChosen) => {
        const stepData = { username: dame.username, isChosen }

        setGameData([...gameData, stepData])
        setDame(getRandomGirl(rawDamen));
        setStepsCount(stepsCount + 1);
    }

    console.log(dame.username)
    console.log(gameData)

    const rankPayload = {
        title: 'Most Noticed girls in WRC',
        rannkData: []
    }

    if (showRank) return <Rank payload = {rankPayload}/>;
    return (

        <div className="main-body command">
            <Typography variant="h6"
                style={{
                    color: '#123456',
                    paddding: '50px'
                }}
            >
                Play to see the rank
            </Typography>
            <Typography variant="h6"
                style={{ fontSize: '0.9em', fontWeight: 'bold' }} className={classes.title}
            >
                Have you noticed her in real life?
            </Typography>

            <div
                className="image-box"
            >
                <img
                    src={dame.pictureUrl}
                    alt="western region campus"
                    className="second-image girl-image"
                    style={{ cursor: 'default' }}
                />
            </div>
            <div className="one-footer">
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    style={{ margin: '10px', padding: '10px 40px', cursor: 'pointer' }}
                    onClick={() => { _klicken(false) }}
                >
                    No
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    style={{ margin: '10px', padding: '10px 40px', cursor: 'pointer' }}
                    onClick={() => { _klicken(true) }}

                >
                    Yeah
                </Button>

            </div>
        </div>
    )
}



const getRandomGirl = (rawDamen) => {
    return rawDamen[Math.floor(Math.random() * rawDamen.length)]
}


export default Crush;