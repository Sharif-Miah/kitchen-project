import Image from 'next/image';
import React from 'react';

const PopularCard = ({ popular }) => {
  return (
    <div className='cursor-pointer text-center group'>
      <div className='overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto'>
        <Image
          src={`/${popular.thumbnail}`}
          alt='Breakfast'
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
          width={100}
          height={100}
        />
      </div>
      <p className='transition-transform duration-300 group-hover:scale-105'>
        {popular.title.slice(0, 10)}
      </p>
    </div>
  );
};

export default PopularCard;
