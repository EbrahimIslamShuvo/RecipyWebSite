import React from 'react';

const RecipiesCard = ({ importRecipie }) => {



    return (
        <div className="card bg-gray-800 w-76 shadow-sm">
            <figure>
                <img
                    src={importRecipie.image} className='w-[250px] h-[250px]'
                />
            </figure>
            <div className="card-body ">
                <div className="flex justify-between">
                    <div className="">
                        <p>{importRecipie.cuisine}</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex items-center gap-1">
                            <p>{importRecipie.rating}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
                        </div>
                        <p> Rating</p>
                    </div>
                </div>
                <h2 className="card-title">{importRecipie.name}</h2>
                <div className="flex items-center gap-1">
                    <div className="avatar-group -space-x-3">
                        <div className="avatar border-1 border-white">
                            <div className="w-4">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="avatar border-1 border-white">
                            <div className="w-4">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="avatar border-1 border-white">
                            <div className="w-4">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="avatar border-1 border-white">
                            <div className="w-4">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className=''>{importRecipie.reviewCount} Reviews</p>
                    </div>

                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" >View Recipie</button>
                </div>
            </div>
        </div>
    );
};

export default RecipiesCard;