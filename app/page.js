import SuperDelicious from '@/components/Food/SuperDelicious';
import Hero from '@/components/Hero';
import PopularCategories from '@/components/popularCategory/PopularCategories';

export default async function Home() {
  return (
    <main className='container mx-auto px-4 mt-[100px]'>
      <Hero />
      <SuperDelicious />
      <PopularCategories />
    </main>
  );
}
