import React from 'react';

const InfoCard = ({img,title,bgColor}) => {
    return (
        <div className={`card lg:card-side text-white shadow-xl ${bgColor}`}>
        <figure className='pl-5 lg:mt-0 sm:mt-12'><img src={img} alt="Album"/></figure>
        <div  className="  card-body">
          <h2  className="  card-title">{title}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    );
};

export default InfoCard;