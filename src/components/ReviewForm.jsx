import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ReviewList from './ReviewList';
import Stars from './Stars';

function ReviewForm({ reviewList, musicalId, addReview }) {
    const [show, setShow] = useState(false);
    const [newAuthor, setNewAuthor] = useState('');
    const [newReviewText, setNewReviewText] = useState('');
    const [newRating, setNewRating] = useState(1);
    const [validName, setValidName] = useState(false); 
    const [validReview, setValidReview] = useState(false); 
    const [isFormDisabled, setisFormDisabled] = useState(false); 

    const handleClose = () => {
        setNewAuthor('');
        setNewReviewText('');
        setValidName(false);
        setValidReview(false);
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
        //re-enable the form
        setisFormDisabled(false);
    };

    const handleReviewChange = e => {
        validateReview(e);
        setNewReviewText(e.target.value);
    };

    const handleAuthorChange = e => {
        validateName(e);
        setNewAuthor(e.target.value);
    };

    const handleRatingChange = rating => {
        setNewRating(rating);
    };

    const validateName = e => {
        if (e.target.value.length === 0) {
            setValidName(false);
        } else {
            setValidName(true);
        }
    };

    const validateReview = e => {
        if (e.target.value.length === 0) {
            setValidReview(false);
        } else {
            setValidReview(true);
        }
    };

    const handleSave = e => {
        e.preventDefault();

        if (newAuthor.length === 0 || newReviewText.length === 0) {
            return;
        }

        const nextID = Math.max(...reviewList.map(review => review.reviewId)) + 1;
        const newReviewObj = {
            musicalId: musicalId,
            reviewId: nextID,
            author: newAuthor,
            stars: newRating,
            review: newReviewText,
        };
        addReview(newReviewObj);
        setNewAuthor('');
        setNewReviewText('');
        setValidName(false);
        setValidReview(false);
//form must be closed and opened again to enter review
        setisFormDisabled(true);
    };

    return (
        <>
            <Button className='mt-4 mb-3 outline-warning' variant='outline-warning' onClick={handleShow}>
                Reviews
            </Button>

            <Modal
                size='lg'
                show={show}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
                scrollable={true}
                data-bs-theme='dark'>
                <Modal.Header
                    className='bg-dark border border-0 text-light'
                    closeVariant={'white'}
                    closeButton>
                    <Modal.Title>Review this Show</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-light'>
                    <Form className='border-bottom'>
                        <label htmlFor='author-name'>
                            {!validName ? (
                                <span className='fst-italic fw-light text-warning'>
                                    {' '}
                                    Enter your name.
                                </span>
                            ) : (
                                <span></span>
                            )}
                        </label>
                        <input
                            disabled={isFormDisabled}
                            id='author-name'
                            type='text'
                            placeholder='Your name'
                            autoFocus
                            className='bg-dark text-light form-control'
                            value={newAuthor}
                            onChange={handleAuthorChange}
                            required/>
                        <label htmlFor='new-review'>
                            {!validReview ? (
                                <span className='fst-italic fw-light text-warning'>
                                    {' '}
                                    Write your review.
                                </span>
                            ) : (
                                <span></span>
                            )}
                        </label>
                        <textarea
                            disabled={isFormDisabled}
                            id='new-review'
                            placeholder='Your review'
                            rows='3'
                            className='bg-dark text-light form-control'
                            value={newReviewText}
                            onChange={handleReviewChange}
                            required/>
                        <Form.Group className='mb-3' controlId='stars'>
                            <Form.Label>Rate this show</Form.Label>
                            <Stars changeRating={handleRatingChange}/>
                        </Form.Group>
                        <div className='d-flex justify-content-end mb-3'>
                            <Button
                                className='ms-3 btn'
                                variant='outline-warning'
                                onClick={handleClose}>
                                Close
                            </Button>
                            <Button
                                disabled={isFormDisabled}
                                id='save-review'
                                className='ms-3'
                                variant='outline-warning'
                                type='submit'
                                onClick={handleSave}>
                                Save Review
                            </Button>
                        </div>
                    </Form>
                    <h4>Past Reviews</h4>
                    <div className='reviews-section'>           
                    <ReviewList reviewList={reviewList} musicalId={musicalId}/>
                    </div> 
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ReviewForm;