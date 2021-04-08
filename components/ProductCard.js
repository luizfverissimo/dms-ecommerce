import Link from 'next/link';

function ProductCard({attributes, key, slug}) {
  const priceString = attributes.price.toFixed(2).toString().replace('.', ',')

  return (
    <div key={key} className='w-full max-w-xs mb-20 mx-auto lg:mx-0 flex flex-col items-center'>
      <Link href={`/products/${slug}`}>
        <img className='cursor-pointer' src={attributes.coverImage} alt={attributes.title} />
      </Link>
      <h3 className='w-full mt-4 font-catamaran text-2xl text-theme-black truncate'>
      {attributes.title}
      </h3>
      <p className='w-full mt-4 bg-theme-yellow py-2 font-catamaran font-bold text-center text-2xl text-theme-black  '>
        R$ {priceString}
      </p>
      <Link href={`/products/${slug}`}>
        <a className='w-full mt-4 bg-theme-black py-2 font-catamaran font-bold text-center text-2xl text-theme-yellow transition-all hover:text-theme-white'>
          Veja mais
        </a>
      </Link>
    </div>
  );
}

export default ProductCard;
