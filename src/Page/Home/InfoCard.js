import React from 'react';

const InfoCard = ({img,title,bgClass}) => {
    return (
        <div class={`card lg:card-side text-white shadow-xl ${bgClass}`}>
        <figure className='pl-5 lg:mt-0 sm:mt-12'><img src={img} alt="Album"/></figure>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    );
};

export default InfoCard;