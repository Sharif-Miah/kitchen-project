import EmailForm from '@/components/EmailForm';
import SuperDelicious from '@/components/Food/SuperDelicious';
import HandPicked from '@/components/HandPicked';
import Hero from '@/components/Hero';
import LatestRecipi from '@/components/LatestRecipi';
import PopularCategories from '@/components/popularCategory/PopularCategories';

export default async function Home() {
  return (
    <main className='container mx-auto px-4 mt-[100px]'>
      <Hero />
      <SuperDelicious />
      <PopularCategories />
      <EmailForm />
      <HandPicked />
      <LatestRecipi />
    </main>
  );
}
