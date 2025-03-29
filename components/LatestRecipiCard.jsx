import Image from 'next/image';

const LatestRecipiCard = ({ recipi }) => {
  // console.log(recipi.description, recipi.sharif);
  console.log(recipi.author);
  return (
    <div>
      <Image
        src={`/${recipi.thumbnail}`}
        alt='Strawberry Cream'
        className='w-full h-[300px] object-cover rounded-lg mb-4'
        width={100}
        height={300}
      />
      <h3 className='text-lg font-semibold mb-2'>
        {recipi.title.slice(0, 20)}
      </h3>
      <p className='text-gray-600'>
        {recipi.title.slice(0, 10) || 'No category'}
      </p>
    </div>
  );
};

export default LatestRecipiCard;
