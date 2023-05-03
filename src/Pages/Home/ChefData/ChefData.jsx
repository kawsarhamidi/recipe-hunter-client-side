import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Chef from '../../Chef/Chef';

const ChefData = () => {
    const {id} = useParams();
    const chefFoods = useLoaderData();
    
    return (
        <div>
            {id && <h2>this is data : {id}</h2>}
            {
                chefFoods.map(foods => <Chef
                key={foods._id}
                foods = {foods}
                ></Chef>)
            }
        </div>
    );
};

export default ChefData;