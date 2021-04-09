import fs from 'fs';
import path from 'path';
import { useState } from 'react';
import Head from 'next/head';

import HeroProduct from '../../components/HeroProduct';
import ModalImage from '../../components/ModalImage';
import { NavBar } from '../../components/Navbar';
import SectionHeading from '../../components/SectionHeading';

function ProductPage({ product }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [clickedImageSrc, setClickedImageSrc] = useState('');

  if (!product) return <div>not found</div>;

  const { html, attributes } = product;

  function handleCloseModal() {
    setIsOpenModal(false);
    setClickedImageSrc('');
  }

  function handleOpenModal(imageSrc) {
    setIsOpenModal(true);
    setClickedImageSrc(imageSrc);
  }

  function handleBuyProduct() {
    window.open(`https://wa.me/554388286301?text=Olá%20Darwin%20Music%20Store!%20Quero%20comprar%20o%20produto%20${attributes.title}!`)
  }

  return (
    <main className='w=full flex flex-col items-center mb-20'>
      <Head>
        <title>{attributes.title} | Darwin Music Store</title>
      </Head>
      {isOpenModal && (
        <ModalImage
          src={clickedImageSrc.substr(7)}
          title={attributes.title}
          onCLickCloseModal={handleCloseModal}
        />
      )}
      <NavBar />
      <HeroProduct attributes={attributes} onClickBuy={handleBuyProduct}/>
      <section className='px-8 w-full max-w-7xl flex flex-col'>
        <SectionHeading>Fotos</SectionHeading>
        <div className='w-full grid grid-cols-2 items-center sm:grid-cols-4 xl:grid-cols-6'>
          {typeof attributes.images === 'string' ? (
            <img
              className='w-36 h-36 mb-3 cursor-pointer object-cover transform transition-all hover:-translate-y-2'
              src={attributes.images.substr(7)}
              alt={`${attributes.title}-foto`}
              onClick={() => handleOpenModal(attributes.images)}
            />
          ) : (
            attributes.images.map((image, index) => {
              return (
                <img
                  className='w-36 h-36 mb-3 cursor-pointer object-cover transform transition-all hover:-translate-y-2'
                  key={index}
                  src={image.substr(7)}
                  alt={`${attributes.title}-foto-${index}`}
                  onClick={() => handleOpenModal(image)}
                />
              );
            })
          )}
        </div>
        {attributes.video.length !== 0 && (
          <>
            <SectionHeading>Vídeo</SectionHeading>
            <div className='relative pt-[56.25%]'>
              <iframe
                className='absolute inset-0 w-full h-full'
                src={attributes.video}
                title={`${attributes.title} vídeo de demonstração`}
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </>
        )}

        <SectionHeading>Descrição</SectionHeading>
        <div
          className='html-insert w-full font-merri sm:text-lg'
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </section>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'content/products'))
    .map((product) => {
      const trimmedName = product.substring(0, product.length - 3);
      console.log(trimmedName);
      return {
        params: { slug: trimmedName }
      };
    });

  return {
    paths,
    fallback: false // controls whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const product = await import(`../../content/products/${slug}.md`).catch(
    () => null
  );

  return {
    props: {
      product: product.default
    }
  };
}

export default ProductPage;
