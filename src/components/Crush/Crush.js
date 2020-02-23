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

import firebase from '../../firebase/index';
import 'firebase/firestore'

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
    const [doneCrushGirls, setDoneCrushGirls] = React.useState([]);
    const [playable, setPlayable] = React.useState(true);



    // Helpers end--------------------------------------------------------
    const backupTempDone = [...doneCrushGirls];
    const getRandomGirl = () => {



        const crushingDone = localStorage.getItem('crushingDone') || '';

        // console.log(previouslyDone)
        let crushingNotDone = rawDamen.filter((item, index) => {
            return !crushingDone.includes(`${item.username},`)
        })

        crushingNotDone = crushingNotDone.filter(item => !backupTempDone.includes(`${item.username}`))

        var randomGirl = crushingNotDone[Math.floor(Math.random() * crushingNotDone.length)];
        return randomGirl;
    }
    // Helpers end--------------------------------------------------------

    const [dame, setDame] = React.useState(getRandomGirl(rawDamen))

    const [gameData, setGameData] = React.useState({})
    const [serverData, setServerData] = React.useState({});
    const [rankData, setRankData] = React.useState({});

    //Did mount
    React.useEffect(() => {
        // Get data of beautifuls from the firebase
        const getData = async () => {
            const db = firebase.firestore()
            var docRef = db.collection("glamorouswrc").doc("crushs");

            docRef.get().then(function (doc) {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    setServerData(doc.data())
                    setRankData(doc.data())
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });

        }
        getData()

        let crushingDone = localStorage.getItem('crushingDone') || '';
        let lastCrushPlayDate = localStorage.getItem('crushPlayDate');
        var now = new Date();

        var thisDay = Math.floor(now / 8.64e7);
        if (crushingDone.split(',').length >= 45) {
            setPlayable(false)
        }
        if (thisDay - parseInt(lastCrushPlayDate) > 6) {
            localStorage.setItem('crushingDone', '');
            localStorage.setItem('crushPlayDate', thisDay.toString());
            setPlayable(true)
        }


    }, []);

    React.useEffect(() => {
        if (stepsCount >= 12) {
            let toBePosted = serverData;
            // Update the rating hai ta

            const tempDone = [...doneCrushGirls]
            for (let item in gameData) {
                console.log(item)
                // console.log(serverData.[gameData[item].accepted], 'is accepted person');
                let result = serverData[item] ? serverData[item] : 0; //rating of accepted

                if (gameData[item]) {
                    result = result + 1
                }

                toBePosted = {
                    ...toBePosted,
                    [item]: result
                }
                tempDone.push(item)
                backupTempDone.push(item)
                setDoneCrushGirls(tempDone)
            }

            const db = firebase.firestore();
            db.collection('glamorouswrc').doc('crushs').set(toBePosted)
            setRankData(toBePosted)
            setShowRank(true);

            let doneDamenString = ''
            for (let aDame of tempDone) {
                doneDamenString = doneDamenString + aDame + ','
            }


            //Damen previously done crushing
            let crushingDone = localStorage.getItem('crushingDone');
            let toBeLocallyStored = `${crushingDone ? crushingDone : ""}${doneDamenString}`;
            localStorage.setItem('crushingDone', toBeLocallyStored);
            setGameData({})
        }
    }, [stepsCount]);

    const _klicken = (isChosen) => {

        setGameData({ ...gameData, [dame.username]: isChosen })
        setDame(getRandomGirl(rawDamen));
        setStepsCount(stepsCount + 1);

    }




    // console.log(dame.username)
    // console.log(gameData)

    const rankPayload = {
        title: 'Crush of most boys',
        rankType: 'noticed',
        rankData: rankData,
        rawDamen: props.payload.rawDamen,
        errorMessage: playable ? null : true
    }

    console.log('data in parent rank data', rankData);
    if (!playable) {
        var now = new Date();
        var fullDaysSinceEpoch = Math.floor(now / 8.64e7);
        localStorage.setItem('crushPlayDate', fullDaysSinceEpoch.toString());
    }
    if (showRank || !playable) return <Rank payload={rankPayload} />;
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
                Do you have crush on her?
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






export default Crush;