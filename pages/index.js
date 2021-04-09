import Head from 'next/head';
import About from '../components/About';
import Hero from '../components/Hero';
import { NavBar } from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';

const Home = ({ productsList }) => {
  return (
    <main className='w=full flex flex-col items-center'>
      <Head>
        <title>Darwin Music Store | Evolução para o seu timbre</title>
      </Head>
      <NavBar />
      <Hero />
      <section className='px-8 w-full max-w-7xl flex flex-col'>
        <SectionHeading id='lancamentos'>Lançamentos</SectionHeading>
        <div className='w-full grid grid-cols-1 items-center lg:grid-cols-2 xl:grid-cols-3'>
          {productsList.map((product, index) => {
            if(!product.attributes.isLaunch) return
            return (
              <ProductCard
                key={index}
                attributes={product.attributes}
                slug={product.slug}
              />
            );
          })}
        </div>
        <SectionHeading id='pedais'>Pedais</SectionHeading>
        <div className='w-full grid grid-cols-1 items-center lg:grid-cols-2 xl:grid-cols-3'>
          {productsList.map((product, index) => {
            if(product.attributes.category !== 'Pedais') return
            return (
              <ProductCard
                key={index}
                attributes={product.attributes}
                slug={product.slug}
              />
            );
          })}
        </div>
        <SectionHeading id='instrumentos'>Instrumentos</SectionHeading>
        <div className='w-full grid grid-cols-1 items-center lg:grid-cols-2 xl:grid-cols-3'>
          {productsList.map((product, index) => {
            if(product.attributes.category !== 'Instrumentos') return
            return (
              <ProductCard
                key={index}
                attributes={product.attributes}
                slug={product.slug}
              />
            );
          })}
        </div>
        <SectionHeading id='outros'>Outros</SectionHeading>
        <div className='w-full grid grid-cols-1 items-center lg:grid-cols-2 xl:grid-cols-3'>
          {productsList.map((product, index) => {
            if(product.attributes.category !== 'Outros') return
            return (
              <ProductCard
                key={index}
                attributes={product.attributes}
                slug={product.slug}
              />
            );
          })}
        </div>
      </section>
      <About />
    </main>
  );
};

const importProducts = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../content/products', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/products/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export async function getStaticProps() {
  const productsList = await importProducts();

  return {
    props: {
      productsList
    } // will be passed to the page component as props
  };
}

export default Home;
