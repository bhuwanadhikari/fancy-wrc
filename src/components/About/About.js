import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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






const About = (props) => {
    const classes = useStyles();
    return (
        < div style={{ padding: '10px' }}>
            <Typography variant="h6" style={{ fontWeight: 'bold', padding: '40px' }} className={classes.title}>
                About whatisin.tech
            </Typography>

            <div className="aboutTitle"
                style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.1em', padding: '5px' }}
            >
                How we got your data?
            </div>
            <div className="aboutContent"
                style={{ textAlign: 'left' }}
            >
                We can extract data from facebook by making a robot or a bot. The bot could automatically run on the browser as per it is
                programmed. The bot did the following things to get these data this website has.
                <br />
                <br />
                At first about 1000 students' username(facebook) is collected from two famous students groups(facebook) of wrc with the help of that bot. The
                1000 students here may or may not be from wrc.
                <br />
                <br />
                To get the girls of wrc following steps were carried out:
                <br />
                <br />
                -From those 1000 students, a random photo from their facebook was taken from each of them.
                <br />
                -Likers of each of those photo was listed. So, in total there were usernames of about one lakh people who were the
                <br />
                likers of those 1000 photos.
                <br />
                -Then, about 20 student were taken manually who are genuinely from WRC.
                <br />
                -Suppose, if a person likes more than 10 different photos of different people from the pool of that 1000 people,
                then the person must be a student of WRC.
                <br />
                - From this, about 2000 persons were collected who were staffs, students of wrc and also the students who already
                have graduated.
                - Then, a different bot was made to get the name, username and a photo of those students from WRC.
                <br />
                - Those photos of 2000 students were fed into the Machine Learning Model that separated the girls and boys with
                accuracy of 92%.
                <br />
                - That threw a list of 200 girls where there were some boys too and also some inaccurate list of other people
                <br />
                - That was then filtered from a portal where other students from WRC removed the inaccurate data.

                <br />
                <br />
                We are soorrrry, if this hampers you, send message with your username telling us to remove your name in the input box below. Thankyou
                <br />
                <br />
                Still there are a lot of inaccurate data in the list who have already passed out from the wrc and who are not of WRC. Help us to increase accuracy.
                <br />
                <br />
                If any developers want to contribute in the project, send your email in the input box below. We will write you.
            </div>
            <br />
            <br />
            <div className="aboutTitle"
                style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '1.1em', padding: '5px' }}
            >
                We are planning to make this a competing platform. So, we suggest you to take part by filling the input box below!!
            </div>
            <br />
            <br /> 
            <br />  
            ---Thank you from the team of Developers.---
            <br /> 
            <br /> 
            <br /> 
        </div>
    )
}





export default About;