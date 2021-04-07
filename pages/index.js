import About from "../components/About";
import Hero from "../components/Hero";
import { NavBar } from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";

const Home = () => (
  <main className="w=full flex flex-col items-center">
    <NavBar/>
    <Hero/>
    <section className="px-8 w-full max-w-7xl flex flex-col" >
      <SectionHeading id="lancamentos">
        Lançamentos
      </SectionHeading>
      <div className="w-full grid grid-cols-1 items-center lg:grid-cols-2 xl:grid-cols-3" >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
    <About/>
  </main>
);

export default Home;
