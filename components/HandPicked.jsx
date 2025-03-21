import PickedCard from './PickedCard';

const HandPicked = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/categories`);
  const handPickers = await response.json();

  return (
    <div>
      <h2 className='text-3xl font-bold mb-8 animate-fade-in-down'>
        Hand-Picked Collections
      </h2>
      <div className='grid md:grid-cols-4 gap-4'>
        {handPickers.slice(10, 14).map((handPic) => (
          <PickedCard
            key={handPic.category_id}
            handPic={handPic}
          />
        ))}
      </div>
    </div>
  );
};

export default HandPicked;
