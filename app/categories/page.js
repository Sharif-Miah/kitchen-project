import PopularCard from '@/components/popularCategory/PopularCard';

const CategoriesPage = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/categories`);
  const category = await response.json();

  return (
    <section className='my-24'>
      <div className='flex justify-between items-top'>
        <h2 className='text-3xl font-bold mb-8'>Popular Categories</h2>
      </div>
      <div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
        {category.map((popular) => (
          <PopularCard
            key={popular.category_id}
            popular={popular}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesPage;
