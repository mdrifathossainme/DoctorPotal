import React from 'react';

const SingleTesimonial = ({stm}) => {
    return (
        <div  className="  card w-96 bg-base-100 shadow-xl">
        <div  className="  card-body">
            <p>{stm.body}</p>
            <div className='flex items-center mt-4 '>
                <img src={stm.img} className="border-4 border-secondary rounded-full" alt="" />
            <span>
            <h4 className='ml-2 text-lg font-semibold'>{stm.name}</h4>
            <h4 className='ml-2 text-lg '>{stm. place}</h4>
            </span>
            </div>
        </div>
      </div>
    );
};

export default SingleTesimonial;