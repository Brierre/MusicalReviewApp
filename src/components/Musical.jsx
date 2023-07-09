import {useState} from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReviewForm from './ReviewForm';
import {FaStar} from 'react-icons/fa';

function Musical({
    musicalId,
    image,
    title,
    composer,
    lyricist,
    book,
    synopsis,
    reviewList,
    addReview,
}) {
    function getaverageRating(musicalId) {
        let totalStars = 0;
        const filteredList = reviewList.filter(review => review.musicalId === musicalId);
        for (let i = 0; i < filteredList.length; i++) {
            totalStars += filteredList[i].stars;
        }

        if (filteredList.length === 0) {
            return 'No reviews have been given for this musical.';
        }
        return (Math.round((totalStars / filteredList.length) * 10) / 10).toFixed(1);
    }

    const [show, setShow] = useState(false);
    function showMusicalInfo() {
        setShow(!show);
    }

    return (
        <Col className='col-12 col-md-6 col-xl-4 col-xxl-3 mb-4'>
            <Card className='bg-secondary h-100 rounded border border-light'>
                <Card.Body className='bg-dark text-light rounded border border m-1'>
                    <Card.Title className='text-light fw-bold fs-4 mb-4'>{title}</Card.Title>
                    <img
                        src={image}
                        alt={title + 'playbill'}
                        className='img-fluid playbill'
                        onClick={showMusicalInfo}
                        title={title + ': ' + synopsis}
                    />

                    <div className='d-grid gap-2'>
                        <ReviewForm
                            reviewList={reviewList}
                            musicalId={musicalId}
                            addReview={addReview}
                        />
                    </div>

                    <div className='fw-bold'>
                        <Card.Text className='d-grid gap-2 mx-auto'>
                            <Button
                                className='mb-3'
                                onClick={showMusicalInfo}>
                                Musical Info
                            </Button>
                        </Card.Text>
                        {show && (
                            <div>
                                <Card.Text className='fw-bold'>
                                    Average Rating:{' '}
                                    <span className='fw-bold text-light'>
                                        {getaverageRating(musicalId)} {'  '}
                                        <FaStar
                                            className='star'
                                            color='#ffc107'
                                            size={15}/>
                                    </span> 
                                    
                                </Card.Text>
                                <Card.Text className='fw-bold'>
                                    Music by:{' '}
                                    <span className='fw-lighter text-light'>{composer}</span>
                                </Card.Text>
                                <Card.Text className='fw-bold'>
                                    Lyrics by:{' '}
                                    <span className='fw-lighter text-light'>{lyricist}</span>
                                </Card.Text>
                                <Card.Text className='fw-bold'>
                                    Book by:{' '}
                                    <span className='fw-lighter text-light'>{book}</span>
                                </Card.Text>
                            </div>
                        )}
                    </div>
                    <hr/>
                    <Card.Text className='fw-light fs-5 my-2'>{synopsis}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default Musical;