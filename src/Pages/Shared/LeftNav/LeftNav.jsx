import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [chef, setChef] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className=''>
            <h4>All chef details</h4>

            {
                chef.map(chefs => <div className="mt-4" key={chefs.id}>
                    <Card >
                        <Card.Img variant="top" src={chefs.picture} />
                        <Card.Body>
                            <Card.Title>{chefs.name}</Card.Title>
                            <Card.Text>
                                Years Of Experience: {chefs.yearsOfExperience}
                            </Card.Text>
                            <Card.Text>
                                Number Of Recipes: {chefs.numberOfRecipes}
                            </Card.Text>
                            <Card.Text>
                                Likes: {chefs.likes}
                            </Card.Text>
                            <Link to={`/chef/${chefs.id}`}><Button variant="primary">Go to details</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
                )
            }
        </div>
    );
};

export default LeftNav;