import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Musical from './Musical';
import {musicals, musicalReviews} from '../assets/data/musicalReviewData.jsx';
import chicago from '../assets/img/chicago.jpg';
import comeFromAway from '../assets/img/comeFromAway.jpg';
import hadestown from '../assets/img/hadestown.jpg';
import intoTheWoods from '../assets/img/intoTheWoods.jpg';
import littleShop from '../assets/img/littleShop.jpg';
import littleWomen from '../assets/img/littleWomen.jpg';
import missSaigon from '../assets/img/missSaigon.jpg';
import phantom from '../assets/img/phantomOfTheOpera.jpg';
import pippin from '../assets/img/pippin.jpg';
import spongebob from '../assets/img/spongebobTheMusical.jpg';
import musicMan from '../assets/img/theMusicMan.jpg';

function MusicalList() {
    const musicalList = musicals;
    musicals[0].image = missSaigon;
    musicals[1].image = spongebob;
    musicals[2].image = comeFromAway;
    musicals[3].image = musicMan;
    musicals[4].image = phantom;
    musicals[5].image = pippin;
    musicals[6].image = chicago;
    musicals[7].image = littleWomen;
    musicals[8].image = littleShop;
    musicals[9].image = intoTheWoods;
    musicals[10].image = hadestown;

    const [reviewList, setReviewList] = useState(musicalReviews);

    const addReview = ({musicalId, stars, review, author}) => {
        const nextId = Math.max(...reviewList.map(review => review.reviewId)) + 1;

        const newReview = {
            musicalId: musicalId,
            reviewId: nextId,
            stars: stars,
            review: review,
            author: author
        };
        setReviewList([...reviewList, newReview]);
    };

    return(
        <Container className="bg-dark mt-2">
            <div className="row">
                {musicalList.map(musical => (
                    <Musical
                        key={musical.musicalId}
                        musicalId={musical.musicalId}
                        title={musical.title}
                        image={musical.image}
                        composer={musical.composer}
                        lyricist={musical.lyricist}
                        book={musical.book}
                        synopsis={musical.synopsis}
                        rating={musical.rating}
                        reviewList={reviewList}
                        addReview={addReview}/>
                ))}
            </div>
        </Container>
    );
}

export default MusicalList;