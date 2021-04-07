import InstagramIconBlack from './InstagramIconBlack';
import LogoBlack from './LogoBlack';
import SectionHeading from './SectionHeading';

function About() {
  return (
    <section className='w-full bg-theme-yellow flex justify-center'>
      <div className='w-full max-w-7xl px-8 flex flex-col relative items-center z-10'>
        <div className='w-full flex justify-between items-center'>
          <SectionHeading>Quem somos</SectionHeading>
          <LogoBlack />
        </div>
        <p className='w-full md:w-2/3 font-merri text-2xl text-theme-black self-start z-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          placerat finibus lectus sed convallis. Sed laoreet libero ut arcu
          congue, et ornare eros dignissim. Suspendisse potenti. Cras ornare
          ipsum quis sapien commodo consequat.
        </p>
        <div className='w-full mt-14 mb-14 flex flex-col'>
          <div className='flex items-center transform transition-all hover:translate-x-2 z-10'>
            <a
              className='flex items-center'
              href='/'
              rel='external'
              href='/'
              target='_blank'
              rel='noopener'
            >
              <InstagramIconBlack />
              <p className='ml-4 font-catamaran font-semibold text-4xl text-theme-black'>
                @darwinmusicstore
              </p>
            </a>
          </div>
          <div className='mt-4 flex items-center transform transition-all hover:translate-x-2 z-10'>
            <a
              className='flex items-center'
              href='/'
              rel='external'
              href='/'
              target='_blank'
              rel='noopener'
            >
              <svg
                className='fill-current text-theme-black'
                width='46'
                height='46'
                viewBox='0 0 46 46'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M38.3333 15.3334L23 24.9167L7.66668 15.3334V11.5001L23 21.0834L38.3333 11.5001V15.3334ZM38.3333 7.66675H7.66668C5.53918 7.66675 3.83334 9.37258 3.83334 11.5001V34.5001C3.83334 35.5167 4.23721 36.4918 4.9561 37.2107C5.67499 37.9295 6.65001 38.3334 7.66668 38.3334H38.3333C39.35 38.3334 40.325 37.9295 41.0439 37.2107C41.7628 36.4918 42.1667 35.5167 42.1667 34.5001V11.5001C42.1667 10.4834 41.7628 9.50839 41.0439 8.78951C40.325 8.07062 39.35 7.66675 38.3333 7.66675Z' />
              </svg>
              <p className='ml-4 font-catamaran font-semibold text-4xl text-theme-black'>
                darwinmusicstore@gmail.com
              </p>
            </a>
          </div>
        </div>

        <img className='absolute bottom-3' src='/image2.png' alt='Evolução' />
      </div>
    </section>
  );
}

export default About;
