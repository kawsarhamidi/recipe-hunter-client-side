import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Chef = ({ foods }) => {
    const { _id,category_id, title, details,image_url, total_view, rating } = foods;
    return (
        <Card className="m-2">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
            <Card.Img variant="top" src={image_url} />
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/foods/${_id}`}>Read More</Link> </>}
                </Card.Text>
                <Link to={`/chef/${category_id}`}><Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className="flex-grow-1">
                    <Rating
                    placeholderRating={rating.number}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span>{rating?.number}</span>
                </div>
                <div className="">
            <FaEye></FaEye> {total_view}
                </div></Card.Footer>
        </Card>
    );
};

export default Chef;