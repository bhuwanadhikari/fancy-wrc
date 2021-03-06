import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Rank.css'

const Rank = (props) => {
    const { title, rankData, rawDamen, rankType, errorMessage } = props.payload;

    var sortable = [];

    // sort the rank data
    if (rankType === 'beautiful') {
        for (var one in rankData) {
            sortable.push([one, rankData[one]]);
        }

    } else {
        for (var one in rankData) {
            sortable.push([one, rankData[one]])
        }
    }

    sortable.sort(function (a, b) {
        return - a[1] + b[1];
    });






    const rankList = sortable.map((item, index) => {
        // console.log(item, '=================================')
        const person = rawDamen.find(user => user.username === item[0])
        if (item[1] > 0 && index < 80) {
            return (
                <div key={index} className="list-box">
                    <div className="paxaadiko ">
                        <img src={person.pictureUrl} alt="" className="rank-img" />
                    </div>

                    <div className="agaadiko">
                        <div className="rank-value">Rank: {index + 1}</div>
                        <a href={'https://facebook.com/' + person.username} target="_blank" className="iconpart">
                            <FacebookIcon style={{ fontSize: '24px', cursor: 'pointer' }} /></a>
                    </div>

                </div>
            )
        }
    });

    return (
        <div className="rank-box">
            {errorMessage ? (
                <div className="notPlayable" style={{ paddingTop: '10px' }}>
                    It's enough to play this category for today. Please, come next week! <br /> Or Play Most beatiful category as
                    much as you want.

    </div>
            ) : null}
            <h1 className="rank-title">{title} {" "}(Top 80 only)</h1>
            {rankList}
        </div>
    )
}


export default Rank;