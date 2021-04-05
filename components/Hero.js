function Hero() {
  return (
    <div className='w-full h-[37.5rem] relative flex flex-col items-center justify-center'>
      <div className='absolute top-0 w-full h-full bg-gradient-to-r from-[#000] z-under' />
      <img
        className='absolute top-0 w-full h-full object-cover z-under-10'
        src='/hero.jpg'
        alt='Hero Background'
      />

      <div className='w-full max-w-7xl flex flex-col items-start px-8'>
        <h1 className='font-catamaran font-semibold text-4xl sm:text-6xl text-theme-white'>
          Evolução para o seu timbre
        </h1>
        <p className='w-full sm:w-1/2 mt-8 font-merri text-2xl sm:text-4xl text-theme-yellow'>
          O equipamento certo para tirar seu som da idade da pedra!
        </p>
        <a className="mt-14 bg-theme-yellow px-6 py-3 font-catamaran font-black text-xl sm:text-2xl text-theme-black transition-all transform hover:-translate-y-1 hover:bg-theme-white" href="/">EVOLUA AGORA!</a>

      </div>
    </div>
  )
}

export default Hero;
