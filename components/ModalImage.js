import Logo from './Logo';

function ModalImage({ src, title, onCLickCloseModal }) {
  return (
    <div className='modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-40'>
      <div className='modal-overlay absolute w-full h-full bg-theme-black opacity-60'></div>

      <div className='bg-theme-black w-11/12 md:max-w-3xl mx-auto shadow-lg z-50 overflow-y-auto'>
        <div
          className='absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50'
          onClick={onCLickCloseModal}
        >
          <svg
            className='fill-current text-white'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 18 18'
          >
            <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
          </svg>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='w-full flex justify-end items-center p-3'>
            <div className='cursor-pointer z-50' onClick={onCLickCloseModal}>
              <svg
                className='fill-current text-theme-white'
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
              >
                <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
              </svg>
            </div>
          </div>

          <img className='w-full px-2' src={src} alt={title} />

          <div className='pointer-events-none flex justify-center py-4'>
            <Logo className="w-24 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalImage;
