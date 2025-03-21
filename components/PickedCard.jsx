import Image from 'next/image';

const PickedCard = ({ handPic }) => {
  return (
    <div class='relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer'>
      <Image
        src={`/${handPic.thumbnail}`}
        alt='Sushi Combos'
        class='w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110'
        width={100}
        height={400}
      />
      <div class='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0'>
        <h3 class='text-xl font-semibold mb-2'>{handPic.title}</h3>
        <a
          href='./recipes.html'
          class='text-orange-300 hover:underline'>
          View Collection
        </a>
      </div>
    </div>
  );
};

export default PickedCard;
