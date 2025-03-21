import CategoryCard from './CategoryCard';

const SuperDelicious = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/categories`);
  const categoriesFood = await response.json();

  return (
    <section className='mb-16'>
      <h2 className='text-3xl font-bold mb-8'>Super Delicious</h2>
      <div className='grid md:grid-cols-3 gap-8'>
        {categoriesFood.slice(0, 6).map((food) => (
          <CategoryCard
            key={food.category_id}
            food={food}
          />
        ))}
      </div>
    </section>
  );
};

export default SuperDelicious;
