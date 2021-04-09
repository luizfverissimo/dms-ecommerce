function HeroProduct({ attributes, onClickBuy }) {
  return (
    <div className='w-full h-[37.5rem] relative flex flex-col items-center justify-center'>
      <div className='absolute top-0 w-full h-full bg-gradient-to-r from-[#000] z-under' />
      <img
        className='absolute top-0 w-full h-full object-cover z-under-10'
        src={attributes.coverImage.substr(7)}
        alt='Hero Background'
      />

      <div className='w-full max-w-7xl flex flex-col items-start px-8'>
        <p className='font-merri text-xl sm:text-2xl text-theme-yellow'>
          {attributes.category}
        </p>
        <h1 className='font-catamaran font-semibold text-4xl sm:text-6xl text-theme-white'>
          {attributes.title}
        </h1>
        <p className='w-full sm:w-1/2 mt-16 font-merri font-bold text-2xl sm:text-4xl text-theme-yellow'>
          R$ {attributes.price.toFixed(2).toString().replace('.', ',')}
        </p>
        <p className='font-catamaran font-semibold text-base sm:text-lg text-theme-white'>
          {attributes.priceText}
        </p>
        <a
          className='flex items-center mt-6 bg-theme-yellow px-6 py-3 cursor-pointer font-catamaran font-black text-xl sm:text-2xl text-theme-black transition-all transform hover:-translate-y-1 hover:bg-theme-white'
          onClick={onClickBuy}
        >
          COMPRAR{' '}
          <svg
          className="fill-current text-theme-black ml-3"
            width='28'
            height='28'
            viewBox='0 0 30 31'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M25.5067 4.52604C22.7009 1.71354 18.9643 0.166666 14.9933 0.166666C6.79688 0.166666 0.127232 6.83631 0.127232 15.0327C0.127232 17.651 0.810268 20.2091 2.10938 22.4658L0 30.1667L7.8817 28.0975C10.0513 29.2827 12.4955 29.9055 14.9866 29.9055H14.9933C23.183 29.9055 30 23.2359 30 15.0394C30 11.0684 28.3125 7.33854 25.5067 4.52604ZM14.9933 27.401C12.7701 27.401 10.5937 26.8051 8.69866 25.6801L8.25 25.4122L3.57589 26.6376L4.82143 22.0774L4.52679 21.6086C3.28795 19.6399 2.63839 17.3698 2.63839 15.0327C2.63839 8.22247 8.18304 2.67783 15 2.67783C18.3013 2.67783 21.4018 3.96354 23.7321 6.30059C26.0625 8.63765 27.4955 11.7381 27.4888 15.0394C27.4888 21.8564 21.8036 27.401 14.9933 27.401ZM21.7701 18.1466C21.4018 17.9591 19.5737 17.0618 19.2321 16.9412C18.8906 16.814 18.6429 16.7537 18.3951 17.1287C18.1473 17.5037 17.4375 18.3341 17.2165 18.5885C17.0022 18.8363 16.7812 18.8698 16.4129 18.6823C14.2299 17.5908 12.7969 16.7336 11.3571 14.2626C10.9754 13.6064 11.7388 13.6533 12.4487 12.2336C12.5692 11.9859 12.5089 11.7716 12.4152 11.5841C12.3214 11.3966 11.5781 9.56845 11.2701 8.82515C10.9688 8.10193 10.6607 8.20238 10.433 8.18899C10.2188 8.17559 9.97098 8.17559 9.72321 8.17559C9.47545 8.17559 9.07366 8.26934 8.73214 8.63765C8.39062 9.01265 7.43304 9.90997 7.43304 11.7381C7.43304 13.5662 8.76562 15.3341 8.94643 15.5818C9.13393 15.8296 11.5647 19.5796 15.2946 21.1934C17.6518 22.2113 18.5759 22.2984 19.7545 22.1243C20.471 22.0171 21.9509 21.2269 22.2589 20.3564C22.567 19.4859 22.567 18.7426 22.4732 18.5885C22.3862 18.4211 22.1384 18.3274 21.7701 18.1466Z'
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default HeroProduct;
