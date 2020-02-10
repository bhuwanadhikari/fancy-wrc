import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Rank from '../Rank/Rank';
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


const DuitaPhoto = (props) => {
    const {rawDamen} = props.payload;
    const classes = useStyles();
    const [showRank, setShowRank] = React.useState(false)
    const [stepsCount, setStepsCount] = React.useState(0)
    const [linksDame, setLinksDame] = React.useState(getRandomGirls(rawDamen)[0])
    const [richtigDame, setRichtigDame] = React.useState(getRandomGirls(rawDamen)[1])

    const [gameData, setGameData] = React.useState([])

    React.useEffect(()=> {
        if(stepsCount>4){
            setShowRank(true)
        }
    }, [stepsCount]);

    const _klicken = (chosenUser) => {
        console.log(chosenUser)
        let stepData = {}
        if (chosenUser === linksDame.username){
            stepData = {accepted : linksDame.username, rejected: richtigDame.username};
        } else if(chosenUser === richtigDame.username){
            stepData = {accepted : richtigDame.username, rejected: linksDame.username};
        }

        setGameData([...gameData,stepData])
        setLinksDame(getRandomGirls(rawDamen)[0])
        setRichtigDame(getRandomGirls(rawDamen)[1])
        setStepsCount(stepsCount + 1);
    }
    console.log('GameData', gameData)
    console.log('active girls', linksDame.username, richtigDame.username)

    const rankPayload = {
        title: 'Most Beautiful girls in WRC',
        rannkData: []
    }

    if (showRank) return <Rank payload = {rankPayload}/>;

    if (showRank) return <Rank/>;
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
                Who is more beautiful?

            </Typography>
            <div
                className="image-box"
                onClick={() => { _klicken(linksDame.username)}}
            >
                <img
                    src={linksDame.pictureUrl}
                    alt="western region campus"
                    className="first-image girl-image"

                />
            </div>
            <div
                className="image-box"
                onClick={() => {_klicken(richtigDame.username)}}
            >
                <img
                    src={richtigDame.pictureUrl}
                    alt="western region campus"
                    className="first-image girl-image"

                />
            </div>
        </div>
    )
}



const getRandomGirls = (rawDamen) => {
    const firstDame = rawDamen[Math.floor(Math.random()*rawDamen.length)]
    let secondDame = rawDamen[Math.floor(Math.random()*rawDamen.length)]
    while(firstDame === secondDame){
        secondDame = rawDamen[Math.floor(Math.random()*rawDamen.length)]
    }
    return [firstDame, secondDame]
}



export default DuitaPhoto;


