import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Rank.css'

const Rank = (props) => {
    const { title, rankData, rawDamen } = props.payload;


    // sort the rank data
    var sortable = [];
    for (var one in rankData) {
        sortable.push([one, rankData[one]]);
    }



    sortable.sort(function (a, b) {
        return - a[1] + b[1];
    });

    console.log(sortable)

    const rankList = sortable.map((item, index) => {
        // console.log(item, '=================================')
        const person = rawDamen.find(user => user.username === item[0])
        return (
            <div key={index} className="list-box">
                <div className="paxaadiko ">
                    <img src={person.pictureUrl}
                        alt=""
                        className="rank-img"
                    />
                </div>

                <div className="agaadiko">
                    <div className="rank-value">Rank: {index + 1}</div>
                    <a href={'https://facebook.com' + person.username} className="iconpart"><FacebookIcon style={{ fontSize: '24px', cursor: 'pointer' }} /></a>
                </div>

            </div>
        )
    });

    return (
        <div className="rank-box">
            <h1 className="rank-title">{title}</h1>
            {rankList}
        </div>
    )
}


export default Rank;