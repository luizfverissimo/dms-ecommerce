import About from "../components/About";
import Hero from "../components/Hero";
import { NavBar } from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";

const importProducts = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../content/products', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/products/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const Home = ({productsList}) => {
  console.log(productsList)

  return(
  <main className="w=full flex flex-col items-center">
    <NavBar/>
    <Hero/>
    <section className="px-8 w-full max-w-7xl flex flex-col" >
      <SectionHeading id="lancamentos">
        Lançamentos
      </SectionHeading>
      <div className="w-full grid grid-cols-1 items-center lg:grid-cols-2 xl:grid-cols-3" >
        {productsList.map((product, index)  => {
          return <ProductCard key={index} attributes={product.attributes} slug={product.slug} />
        })}
      </div>
    </section>
    <About/>
  </main>
)};

export async function getStaticProps() {
  const productsList = await importProducts()

  return {
    props: {
      productsList,
    }, // will be passed to the page component as props
  }
}

export default Home;
