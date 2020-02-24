import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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



const Noticed = (props) => {
    const classes = useStyles();

    const { rawDamen } = props.payload

    const [showRank, setShowRank] = React.useState(false)
    const [stepsCount, setStepsCount] = React.useState(0)
    const [doneNoticedGirls, setDoneNoticedGirls] = React.useState([]);
    const [playable, setPlayable] = React.useState(true);



    // Helpers end--------------------------------------------------------
    const backupTempDone = [...doneNoticedGirls];
    const getRandomGirl = () => {



        const noticingDone = localStorage.getItem('noticingDone') || '';

        // console.log(previouslyDone)
        let noticingNotDone = rawDamen.filter((item, index) => {
            return !noticingDone.includes(`${item.username},`)
        })

        noticingNotDone = noticingNotDone.filter(item => !backupTempDone.includes(`${item.username}`))

        var randomGirl = noticingNotDone[Math.floor(Math.random() * noticingNotDone.length)];
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
            var docRef = db.collection("glamorouswrc").doc("noticeds");

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

        let noticingDone = localStorage.getItem('noticingDone') || '';
        let lastNoticedPlayDate = localStorage.getItem('noticedPlayDate');
        var now = new Date();
        var thisDay = Math.floor(now / 8.64e7);
        if (noticingDone.split(',').length >= 75) {
            setPlayable(false)
        }
        if (thisDay - parseInt(lastNoticedPlayDate) > 6) {
            localStorage.setItem('noticingDone', '');
            localStorage.setItem('noticedPlayDate', thisDay.toString())
            setPlayable(true)
        }


    }, []);

    React.useEffect(() => {
        if (stepsCount >= 15) {
            let toBePosted = serverData;
            // Update the rating hai ta

            const tempDone = [...doneNoticedGirls]
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
                setDoneNoticedGirls(tempDone)
            }
            // console.log(toBePosted)

            const db = firebase.firestore();
            db.collection('glamorouswrc').doc('noticeds').update(toBePosted)
            setRankData(toBePosted)
            setShowRank(true);

            let doneDamenString = ''
            for (let aDame of tempDone) {
                doneDamenString = doneDamenString + aDame + ','
            }


            //Damen previously done noticing
            let noticingDone = localStorage.getItem('noticingDone');
            let toBeLocallyStored = `${noticingDone ? noticingDone : ""}${doneDamenString}`;
            localStorage.setItem('noticingDone', toBeLocallyStored);
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
        title: 'Most Noticed girls in WRC',
        rankType: 'noticed',
        rankData: rankData,
        rawDamen: props.payload.rawDamen,
        errorMessage: playable ? null : true
    }

    if (!playable) {
        var now = new Date();
        var fullDaysSinceEpoch = Math.floor(now / 8.64e7);
        localStorage.setItem('noticedPlayDate', fullDaysSinceEpoch.toString());
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






export default Noticed;