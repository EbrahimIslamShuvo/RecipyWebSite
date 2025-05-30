import React, { useEffect, useState } from 'react';
import RecipiesCard from '../component/RecipiesCard';

const ShowRecipies = () => {
    const [recipies, setRecipie]= useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
        .then(Response => Response.json())
        .then(data => setRecipie(data.recipes))
    },[])


    return (
        <>
            <div className="my-4 text-4xl font-bold bg-sky-500 py-3 text-center ">
                <h1>Recipie List</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[90%] mx-auto mb-20'>
            {
                recipies.map(recipie => (
                    <RecipiesCard importRecipie={recipie}></RecipiesCard>
                ))
            }
        </div>
        </>
    );
};

export default ShowRecipies;