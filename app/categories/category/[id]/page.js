import SimilarItems from '@/components/singleProduct/SimilarItems';
import SingleProductTitle from '@/components/singleProduct/SingleProductTitle';

const SingleItemPage = async ({ params: { id } }) => {
  const response = await fetch(`${process.env.BASE_API_URL}/categories/${id}`);
  const data = await response.json();

  return (
    <main className='container mx-auto px-4 py-24'>
      <SingleProductTitle data={data} />
      <SimilarItems />
    </main>
  );
};

export default SingleItemPage;
