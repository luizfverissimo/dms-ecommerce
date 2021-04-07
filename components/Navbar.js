import { useState } from 'react';
import Link from 'next/link';

import Logo from './Logo';
import InstagramIcon from './InstagramIcon';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='bg-transparent z-10 absolute top-0 w-full'>
      <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between'>
          <Link href='/'>
            <a
              aria-label='Company'
              title='Company'
              className='inline-flex items-center'
            >
              <Logo />
            </a>
          </Link>
          <ul className='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <Link href="#lancamentos">
                <a
                  aria-label='Lançamentos'
                  title='Lançamentos'
                  className='font-merri font-medium tracking-wide text-theme-yellow transition-colors duration-200 hover:border-b-2 hover:border-theme-yellow'
                >
                  Lançamentos
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a
                  aria-label='Pedais'
                  title='Pedais'
                  className='font-merri font-medium tracking-wide text-theme-white transition-colors duration-200 hover:border-b-2 hover:border-theme-yellow'
                >
                  Pedais
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a
                  aria-label='Product pricing'
                  title='Product pricing'
                  className='font-merri font-medium tracking-wide text-theme-white transition-colors duration-200 hover:border-b-2 hover:border-theme-yellow'
                >
                  Instrumentos
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a
                  aria-label='Outros'
                  title='Outros'
                  className='font-merri font-medium tracking-wide text-theme-white transition-colors duration-200 hover:border-b-2 hover:border-theme-yellow'
                >
                  Outros
                </a>
              </Link>
            </li>
          </ul>
          <ul className='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <a href='/' aria-label='Instagram' title='Instagram'>
                <InstagramIcon />
              </a>
            </li>
          </ul>
          <div className='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className='w-5 text-theme-white' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full'>
                <div className='p-5 bg-theme-black border border-gray-700 rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <a
                        href='/'
                        aria-label='Company'
                        title='Company'
                        className='inline-flex items-center'
                      >
                        <Logo className='w-24' />
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-theme-yellow focus:bg-theme-yellow focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-5 text-theme-white' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className='space-y-4'>
                      <li>
                        <a
                          href='/'
                          aria-label='Lançamentos'
                          title='Lançamentos'
                          className='font-merri font-medium tracking-wide text-theme-yellow '
                        >
                          Lançamentos
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          aria-label='Pedais'
                          title='Pedais'
                          className='font-merri font-medium tracking-wide text-theme-white '
                        >
                          Pedais
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          aria-label='Instrumentos'
                          title='Instrumentos'
                          className='font-merri font-medium tracking-wide text-theme-white '
                        >
                          Instrumentos
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          aria-label='Outros'
                          title='Outros'
                          className='font-merri font-medium tracking-wide text-theme-white '
                        >
                          Outros
                        </a>
                      </li>
                      <li>
                        <a
                          href='/'
                          className='w-full flex justify-center'
                          aria-label='Sign up'
                          title='Sign up'
                        >
                          <InstagramIcon />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
