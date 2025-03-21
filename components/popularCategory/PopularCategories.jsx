import Link from 'next/link';
import PopularCard from './PopularCard';

const PopularCategories = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/categories`);
  const popularFood = await response.json();

  return (
    <section className='mb-16'>
      <div class='flex justify-between items-top'>
        <h2 class='text-3xl font-bold mb-8'>Popular Categories</h2>
        <Link
          href='/category'
          class='text-orange-500'>
          View All
        </Link>
      </div>
      <div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
        {popularFood.slice(0, 6).map((popular) => (
          <PopularCard
            key={popular.category_id}
            popular={popular}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
