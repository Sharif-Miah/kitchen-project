import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='container mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50'>
      <nav className='flex justify-between items-center'>
        <Link
          href='/'
          className='text-3xl font-bold'>
          <Image
            src='/lws-kitchen.png'
            className='h-10'
            alt='lws kitchen'
            height={100}
            width={100}
          />
        </Link>
        <ul className='hidden md:flex space-x-6'>
          <li>
            <Link
              href='/'
              className='hover:text-orange-500'>
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/categories'
              className='hover:text-orange-500'>
              Categories
            </Link>
          </li>
          <li>
            <Link
              href='/latestRecipes'
              className='hover:text-orange-500'>
              Latest Recipes
            </Link>
          </li>
          <li>
            <Link
              href='/delicious'
              className='hover:text-orange-500'>
              Super Delicious
            </Link>
          </li>
        </ul>
        <div className='flex items-center space-x-4'>
          <Link
            href='/'
            className='hover:text-orange-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
