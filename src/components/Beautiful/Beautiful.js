import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Rank from '../Rank/Rank';

import eloRating from '../helpers/elo-alg';

import firebase from '../../firebase/index';
import 'firebase/firestore'

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
    const { rawDamen } = props.payload;
    const classes = useStyles();
    const [showRank, setShowRank] = React.useState(false)
    const [stepsCount, setStepsCount] = React.useState(0)
    const [linksDame, setLinksDame] = React.useState(getRandomGirls(rawDamen)[0])
    const [richtigDame, setRichtigDame] = React.useState(getRandomGirls(rawDamen)[1])

    const [gameData, setGameData] = React.useState({})
    const [serverData, setServerData] = React.useState({});
    const [rankData, setRankData] = React.useState({})

    React.useEffect(() => {
        // Get data of beautifuls from the firebase
        const getData = async () => {
            const db = firebase.firestore()
            var docRef = db.collection("glamorouswrc").doc("beautifuls");

            docRef.get().then(function (doc) {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    setServerData(doc.data())
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });

        }
        getData()
    }, []);


    React.useEffect(() => {
        if (stepsCount >= 10) {
            let toBePosted = serverData;
            // Update the rating hai ta
            for (let item in gameData) {
                // console.log(serverData.[gameData[item].accepted], 'is accepted person');
                let r1 = serverData[[gameData[item].accepted]] ? serverData[[gameData[item].accepted]] : 1000; //rating of accepted
                let r2 = serverData[[gameData[item].rejected]] ? serverData[[gameData[item].rejected]] : 1000; //rating of rejected
                const result = eloRating(r1, r2, 24, 1)
                toBePosted = {
                    ...toBePosted,
                    [gameData[item].accepted]: result['Ra'],
                    [gameData[item].rejected]: result['Rb'],
                }
            }

            const db = firebase.firestore();
            db.collection('glamorouswrc').doc('beautifuls').set(toBePosted)
            setRankData(toBePosted)
            setShowRank(true);
            setGameData({})
        }
    }, [stepsCount]);

    const _klicken = (chosenUser) => {
        let stepData = {}
        if (chosenUser === linksDame.username) {
            stepData = { accepted: linksDame.username, rejected: richtigDame.username };
        } else if (chosenUser === richtigDame.username) {
            stepData = { accepted: richtigDame.username, rejected: linksDame.username };
        }




        setGameData({ ...gameData, [stepsCount]: stepData })
        setLinksDame(getRandomGirls(rawDamen)[0])
        setRichtigDame(getRandomGirls(rawDamen)[1])
        setStepsCount(stepsCount + 1);
        // let message  = firebase.database().ref().child('game');
        // firebase.database().ref('messages').push(gameData);
        // firebase.database().ref('/').set(gameData)
        // const db = firebase.firestore();
        // db.collection('whatisintech').doc('beautifuls').set(gameData)
    }
    // console.log('GameData', gameData)
    // console.log('active girls', linksDame.username, richtigDame.username)
    // console.log(linksDame.username, richtigDame.username)
    console.log(linksDame.pictureUrl)
    console.log(richtigDame.pictureUrl)

    const rankPayload = {
        title: 'Most Beautiful girls in WRC (Top 80 only)',
        rankType: 'beautiful',
        rankData: rankData,
        rawDamen: props.payload.rawDamen
    }

    // console.log('data in parent rank data', rankData);

    if (showRank) return <Rank payload={rankPayload} />;

    if (showRank) return <Rank />;
    return (

        <div className="main-body command">
            <Typography variant="h6"
                style={{
                    color: '#123456',
                    paddding: '50px'
                }}
            >
                Play to see the rank of Most Beautiful Girls of WRC.
            </Typography>
            <Typography variant="h6"
                style={{ fontSize: '0.9em', fontWeight: 'bold' }} className={classes.title}
            >
                Who is more beautiful?

            </Typography>
            <div
                className="image-box"
                onClick={() => { _klicken(linksDame.username) }}
            >
                <img
                    src={linksDame.pictureUrl}
                    alt="Glamorous WRC glamorous wrc western region campus whatisin.tech"
                    className="first-image girl-image"

                />
            </div>
            <div
                className="image-box"
                onClick={() => { _klicken(richtigDame.username) }}
            >
                <img
                    src={richtigDame.pictureUrl}
                    alt="Glamorous WRC glamorous wrc western region campus whatisin.tech"
                    className="first-image girl-image"

                />
            </div>
        </div>
    )
}



const getRandomGirls = (rawDamen) => {
    const getRan = () => {
        return Math.floor(Math.random() * rawDamen.length)
    }
    let ran1 = getRan()
    let ran2 = getRan()
    const firstDame = rawDamen[ran1]
    let secondDame = rawDamen[ran2]
    while (firstDame === secondDame) {
        ran2 = getRan()
        secondDame = rawDamen[ran2]
    }
    return [firstDame, secondDame]
}



export default DuitaPhoto;


