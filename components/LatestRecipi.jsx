import LatestRecipiCard from './LatestRecipiCard';

const LatestRecipi = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/categories`);
  const recipies = await response.json();

  return (
    <section className='mb-16'>
      <h2 className='text-3xl font-bold mb-8'>Latest Recipes</h2>
      <div className='grid md:grid-cols-4 gap-8'>
        {recipies.slice(15, 19).map((recipi) => (
          <LatestRecipiCard
            key={recipi.category_id}
            recipi={recipi}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestRecipi;
