import Link from 'next/link';

function ProductCard() {
  return (
    <div className='w-full max-w-xs mb-20 mx-auto lg:mx-0 flex flex-col items-center'>
      <Link href='/'>
        <img className='cursor-pointer' src='image.png' alt='Product Image' />
      </Link>
      <h3 className='w-full mt-4 font-catamaran text-2xl text-theme-black truncate'>
        King Genesis Reverb V2
      </h3>
      <p className='w-full mt-4 bg-theme-yellow py-2 font-catamaran font-bold text-center text-2xl text-theme-black  '>
        R$ 999.90
      </p>
      <Link href='/'>
        <a className='w-full mt-4 bg-theme-black py-2 font-catamaran font-bold text-center text-2xl text-theme-yellow transition-all hover:text-theme-white'>
          Veja mais
        </a>
      </Link>
    </div>
  );
}

export default ProductCard;
