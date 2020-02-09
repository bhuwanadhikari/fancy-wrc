import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Rank.css'

const Rank = () => {

    const rankList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22].map((item, index) => {
        return (
            <div className="list-box">
                 <div className="paxaadiko ">
                    <img src="https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.0-9/49155721_2229284347318145_5851850467868409856_n.jpg?_nc_cat=103&_nc_oc=AQmohlR7T18NZnsISVutJ-G19s8feWKUiRvQMc6_Ku3DmnhdPOrSSTtE4kpnUGOck-k&_nc_ht=scontent.fpkr1-1.fna&oh=dc33fc04767857a7439223e652af79a7&oe=5ECF8D50"
                        alt=""
                        className="rank-img"
                    />
                </div>

                <div className="agaadiko">
                    <div className="rank-value">Rank: {item}</div>
                    <a href={'https://facebook.com'} className="iconpart"><FacebookIcon style={{ fontSize: '24px', cursor: 'pointer' }} /></a>
                </div>
               
            </div>
        )
    });

    return (
        <div className="rank-box">
            <h1 className="rank-title">Most Popular Girls in WRC</h1>
            {rankList}
        </div>
    )
}


export default Rank;